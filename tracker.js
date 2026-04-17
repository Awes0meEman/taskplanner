/* ── State ───────────────────────────────────────────────── */
const STORAGE_KEY        = 'dp_league_done_v1';
const ORDER_KEY          = 'dp_league_order_v1';
const IMPORTED_KEY       = 'dp_league_imported_v1';
const EXTRA_KEY          = 'dp_league_extra_v1';
const COLLAPSE_KEY       = 'dp_league_collapse_v1';
const DELETED_PHASES_KEY = 'dp_league_deleted_phases_v1';
const DELETED_TASKS_KEY  = 'dp_league_deleted_tasks_v1';

let done           = new Set();
let hideDone       = false;
let editMode       = false;
let activeFilter   = 'all';
let taskOrder      = {};   // { [phaseId]: [taskName, ...] }
let importedPhases = [];   // phases created via importer
let extraTasks     = {};   // { [phaseId]: [task, ...] } — tasks added to hardcoded phases
let collapseState  = {};   // { [phaseId]: true } — collapsed phases
let deletedPhases  = new Set();  // IDs of phases that have been deleted
let deletedTasks   = new Set();  // "phaseId::taskName" keys for deleted tasks

/* ── Persistence ─────────────────────────────────────────── */
function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch (e) { return fallback; }
}

function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

function loadDone()           { done          = new Set(loadJSON(STORAGE_KEY,        [])); }
function saveDone()           { saveJSON(STORAGE_KEY,        [...done]);                   }
function loadOrder()          { taskOrder     = loadJSON(ORDER_KEY,              {});       }
function loadCollapseState()  { collapseState = loadJSON(COLLAPSE_KEY,          {});       }
function saveCollapseState()  { saveJSON(COLLAPSE_KEY,          collapseState);            }
function saveImportedPhases() { saveJSON(IMPORTED_KEY,   importedPhases);                  }
function saveExtraTasks()     { saveJSON(EXTRA_KEY,       extraTasks);                     }
function saveDeletedPhases()  { saveJSON(DELETED_PHASES_KEY, [...deletedPhases]);          }
function saveDeletedTasks()   { saveJSON(DELETED_TASKS_KEY,  [...deletedTasks]);           }

function saveOrder() {
  for (const p of PHASES) {
    const list = document.getElementById('tl-' + p.id);
    if (!list) continue;
    taskOrder[p.id] = [...list.querySelectorAll('.task-item')]
      .map(el => el.dataset.taskName);
  }
  saveJSON(ORDER_KEY, taskOrder);
}

function loadImportedPhases() {
  importedPhases = loadJSON(IMPORTED_KEY, []);
  for (const p of importedPhases) PHASES.push(p);
}

function loadExtraTasks() {
  extraTasks = loadJSON(EXTRA_KEY, {});
  for (const p of PHASES) {
    if (extraTasks[p.id]?.length) p.tasks.push(...extraTasks[p.id]);
  }
}

function loadDeletedState() {
  deletedPhases = new Set(loadJSON(DELETED_PHASES_KEY, []));
  deletedTasks  = new Set(loadJSON(DELETED_TASKS_KEY,  []));
}

function applyDeletedState() {
  for (let i = PHASES.length - 1; i >= 0; i--) {
    if (deletedPhases.has(PHASES[i].id)) PHASES.splice(i, 1);
  }
  for (const p of PHASES) {
    p.tasks = p.tasks.filter(t => !deletedTasks.has(taskKey(p.id, t.name)));
  }
}

function togglePhase(phaseId) {
  const section = document.getElementById('phase-section-' + phaseId);
  if (!section) return;
  if (collapseState[phaseId]) {
    delete collapseState[phaseId];
    section.classList.remove('collapsed');
  } else {
    collapseState[phaseId] = true;
    section.classList.add('collapsed');
  }
  saveCollapseState();
}

/* ── Helpers ─────────────────────────────────────────────── */
function taskKey(phaseId, taskName) { return phaseId + '::' + taskName; }

function ptsClass(pts) {
  if (!pts)        return '';
  if (pts >= 400)  return 'pts-400';
  if (pts >= 200)  return 'pts-200';
  if (pts >= 80)   return 'pts-80';
  if (pts >= 30)   return 'pts-30';
  return 'pts-10';
}

function orderedTasks(phase) {
  const saved = taskOrder[phase.id];
  if (!saved || !saved.length) return phase.tasks;
  const byName  = Object.fromEntries(phase.tasks.map(t => [t.name, t]));
  const ordered = saved.map(n => byName[n]).filter(Boolean);
  const inSaved = new Set(saved);
  phase.tasks.forEach(t => { if (!inSaved.has(t.name)) ordered.push(t); });
  return ordered;
}

/* ── Stats ───────────────────────────────────────────────── */
function calcStats() {
  let totalPts = 0, totalTasks = 0, earnedPts = 0, doneTasks = 0;
  for (const p of PHASES) {
    for (const t of p.tasks) {
      totalPts += (t.pts || 0);
      totalTasks++;
      if (done.has(taskKey(p.id, t.name))) { earnedPts += (t.pts || 0); doneTasks++; }
    }
  }
  return { totalPts, totalTasks, earnedPts, doneTasks };
}

function updateStats() {
  const { totalPts, totalTasks, earnedPts, doneTasks } = calcStats();
  document.getElementById('statPts').textContent   = earnedPts.toLocaleString();
  document.getElementById('statTotal').textContent = totalPts.toLocaleString();
  document.getElementById('statDone').textContent  = doneTasks + ' / ' + totalTasks;
  const pct = totalTasks > 0 ? Math.round(doneTasks / totalTasks * 100) : 0;
  document.getElementById('statPct').textContent      = pct + '%';
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent =
    doneTasks.toLocaleString() + ' / ' + totalTasks.toLocaleString() + ' pts';
}

function updatePhaseTotals() {
  for (const p of PHASES) {
    const el = document.getElementById('phase-pts-' + p.id);
    if (!el) continue;
    let earned = 0, total = 0;
    for (const t of p.tasks) {
      total += (t.pts || 0);
      if (done.has(taskKey(p.id, t.name))) earned += (t.pts || 0);
    }
    el.innerHTML = '<span class="earned">' + earned.toLocaleString() +
                   '</span> / ' + total.toLocaleString() + ' pts';
  }
}

/* ── Task toggle ─────────────────────────────────────────── */
function toggleTask(key, el) {
  if (editMode) return;
  if (done.has(key)) done.delete(key);
  else done.add(key);
  saveDone();
  if (el) {
    if (done.has(key)) {
      el.classList.add('done');
      if (hideDone) el.classList.add('hidden');
    } else {
      el.classList.remove('done', 'hidden');
    }
  }
  updateStats();
  updatePhaseTotals();
}

/* ── Hide completed ──────────────────────────────────────── */
function toggleHide() {
  hideDone = !hideDone;
  const btn  = document.getElementById('hideBtn');
  const icon = document.getElementById('hideIcon');
  if (hideDone) {
    btn.classList.add('active');
    icon.textContent = '✓';
    document.querySelectorAll('.task-item.done').forEach(el => el.classList.add('hidden'));
  } else {
    btn.classList.remove('active');
    icon.textContent = '';
    document.querySelectorAll('.task-item.done').forEach(el => el.classList.remove('hidden'));
  }
  updateEmptyMessages();
}

function updateEmptyMessages() {
  for (const p of PHASES) {
    const container = document.getElementById('tl-' + p.id);
    if (!container) continue;
    const visible = container.querySelectorAll('.task-item:not(.hidden)').length;
    let msg = container.querySelector('.phase-empty');
    if (hideDone && visible === 0) {
      if (!msg) {
        msg = document.createElement('div');
        msg.className   = 'phase-empty';
        msg.textContent = 'All tasks in this phase are complete.';
        container.appendChild(msg);
      }
    } else {
      if (msg) msg.remove();
    }
  }
}

/* ── Edit / drag mode ────────────────────────────────────── */
function toggleEditMode() {
  editMode = !editMode;
  const btn = document.getElementById('editBtn');
  if (editMode) {
    btn.classList.add('active');
    document.body.classList.add('edit-mode');
  } else {
    btn.classList.remove('active');
    document.body.classList.remove('edit-mode');
    clearDropIndicator();
  }
}

/* ── Delete phase / task ─────────────────────────────────── */
function deletePhase(phaseId) {
  const phase = PHASES.find(p => p.id === phaseId);
  if (!phase) return;
  const taskCount = phase.tasks.length;
  if (!confirm(`Delete phase "${phase.title}" and all ${taskCount} task(s)? This cannot be undone.`)) return;

  // Remove from PHASES
  const idx = PHASES.findIndex(p => p.id === phaseId);
  if (idx !== -1) PHASES.splice(idx, 1);

  // Clean up done entries
  for (const key of [...done]) {
    if (key.startsWith(phaseId + '::')) done.delete(key);
  }
  saveDone();

  // Clean up task order
  delete taskOrder[phaseId];
  saveJSON(ORDER_KEY, taskOrder);

  // Persist deletion
  const impIdx = importedPhases.findIndex(p => p.id === phaseId);
  if (impIdx !== -1) {
    importedPhases.splice(impIdx, 1);
    saveImportedPhases();
  } else {
    deletedPhases.add(phaseId);
    saveDeletedPhases();
    delete extraTasks[phaseId];
    saveExtraTasks();
  }

  // Remove DOM element
  const section = document.getElementById('phase-section-' + phaseId);
  if (section) section.remove();

  updateStats();
}

function deleteTask(phaseId, taskName, itemEl) {
  if (!confirm(`Delete task "${taskName}"? This cannot be undone.`)) return;

  const phase = PHASES.find(p => p.id === phaseId);
  if (phase) {
    const tIdx = phase.tasks.findIndex(t => t.name === taskName);
    if (tIdx !== -1) phase.tasks.splice(tIdx, 1);
  }

  const key = taskKey(phaseId, taskName);
  done.delete(key);
  saveDone();

  // Clean up task order
  if (taskOrder[phaseId]) {
    taskOrder[phaseId] = taskOrder[phaseId].filter(n => n !== taskName);
    saveJSON(ORDER_KEY, taskOrder);
  }

  // Persist deletion
  const isImportedPhase = importedPhases.some(p => p.id === phaseId);
  if (isImportedPhase) {
    saveImportedPhases();
  } else if (extraTasks[phaseId] && extraTasks[phaseId].some(t => t.name === taskName)) {
    extraTasks[phaseId] = extraTasks[phaseId].filter(t => t.name !== taskName);
    saveExtraTasks();
  } else {
    deletedTasks.add(key);
    saveDeletedTasks();
  }

  if (itemEl) itemEl.remove();

  updateStats();
  updatePhaseTotals();
}

/* ── CSV parsing ─────────────────────────────────────────── */
function splitCSVLine(line) {
  const result = [];
  let cur = '', inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuote && line[i + 1] === '"') { cur += '"'; i++; }
      else inQuote = !inQuote;
    } else if (ch === ',' && !inQuote) {
      result.push(cur); cur = '';
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result;
}

const VALID_PTS = new Set([10, 30, 80, 200, 400]);

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/).filter(l => l.trim());
  if (!lines.length) return { tasks: [], errors: [] };

  const tasks = [], errors = [];
  let startIdx = 0;

  // Skip header row if first field looks like a column name
  const firstField = splitCSVLine(lines[0])[0].trim().toLowerCase();
  if (firstField === 'name' || firstField === 'task') startIdx = 1;

  for (let i = startIdx; i < lines.length; i++) {
    const f      = splitCSVLine(lines[i]);
    const name   = (f[0] || '').trim();
    const desc   = (f[1] || '').trim();
    const req    = (f[2] || '').trim() || null;
    const ptsRaw = (f[3] || '').trim();
    const pts    = ptsRaw ? parseInt(ptsRaw, 10) : null;

    if (!name) { errors.push(`Row ${i + 1}: name is required`); continue; }
    if (!desc) { errors.push(`Row ${i + 1}: desc is required`); continue; }
    if (pts !== null && !VALID_PTS.has(pts)) {
      errors.push(`Row ${i + 1}: pts must be empty or one of 10, 30, 80, 200, 400`);
      continue;
    }

    tasks.push({ name, desc, req, pts });
  }
  return { tasks, errors };
}

/* ── Help modal ──────────────────────────────────────────── */
function openHelpModal() {
  document.getElementById('helpOverlay').classList.add('open');
}

function closeHelpModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('helpOverlay').classList.remove('open');
}

/* ── Import modal ────────────────────────────────────────── */
function openImportModal(phaseId) {
  const sel = document.getElementById('importPhaseSelect');
  sel.innerHTML = '';
  const newOpt = document.createElement('option');
  newOpt.value = '__new__';
  newOpt.textContent = '— Create new phase —';
  sel.appendChild(newOpt);
  for (const p of PHASES) {
    const opt = document.createElement('option');
    opt.value       = p.id;
    opt.textContent = p.num + ' — ' + p.title;
    sel.appendChild(opt);
  }
  sel.value = phaseId && [...sel.options].some(o => o.value === phaseId) ? phaseId : '__new__';
  onPhaseSelectChange();
  document.getElementById('importOverlay').classList.add('open');
}

function closeImportModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('importOverlay').classList.remove('open');
  document.getElementById('importCSV').value      = '';
  document.getElementById('importPreview').innerHTML = '';
  document.getElementById('importError').textContent  = '';
  document.getElementById('newPhaseTitle').value  = '';
  document.getElementById('newPhaseTag').value    = '';
  document.getElementById('importBtn').disabled   = true;
}

function onPhaseSelectChange() {
  const isNew = document.getElementById('importPhaseSelect').value === '__new__';
  document.getElementById('newPhaseFields').style.display = isNew ? '' : 'none';
}

let csvDebounce = null;
function onCSVInput() {
  clearTimeout(csvDebounce);
  csvDebounce = setTimeout(updateImportPreview, 250);
}

function updateImportPreview() {
  const text = document.getElementById('importCSV').value;
  const previewEl = document.getElementById('importPreview');
  if (!text.trim()) {
    previewEl.innerHTML = '';
    document.getElementById('importBtn').disabled = true;
    return;
  }
  const { tasks, errors } = parseCSV(text);
  let html = '';
  if (tasks.length) {
    html += '<div class="import-preview">';
    html += `<div class="preview-header">${tasks.length} task${tasks.length !== 1 ? 's' : ''} ready to import</div>`;
    html += '<div class="preview-list">';
    for (const t of tasks) {
      const badge = t.pts ? `<span class="pts-badge ${ptsClass(t.pts)}">${t.pts}</span>` : '';
      html += `<div class="preview-row">
        <span class="preview-name">${t.name}</span>
        ${badge}
      </div>`;
    }
    html += '</div>';
    if (errors.length) {
      html += '<div class="preview-errors">';
      for (const err of errors) html += `<div class="preview-error">⚠ ${err}</div>`;
      html += '</div>';
    }
    html += '</div>';
  } else if (errors.length) {
    html += '<div class="import-preview"><div class="preview-errors">';
    for (const err of errors) html += `<div class="preview-error">⚠ ${err}</div>`;
    html += '</div></div>';
  }
  previewEl.innerHTML = html;
  document.getElementById('importBtn').disabled = tasks.length === 0;
}

function doImport() {
  const { tasks, errors } = parseCSV(document.getElementById('importCSV').value);
  const errEl = document.getElementById('importError');
  errEl.textContent = '';

  if (!tasks.length) {
    errEl.textContent = errors.length ? errors[0] : 'No valid tasks found in CSV.';
    return;
  }

  const phaseId = document.getElementById('importPhaseSelect').value;

  if (phaseId === '__new__') {
    const title = document.getElementById('newPhaseTitle').value.trim();
    if (!title) { errEl.textContent = 'Phase title is required.'; return; }
    const tag  = document.getElementById('newPhaseTag').value.trim().toLowerCase() || 'general';
    const num  = 'Phase ' + String(PHASES.length + 1).padStart(2, '0');
    const id   = 'p_imp_' + Date.now();
    const phase = { id, num, title, tag, tasks: tasks.slice() };
    PHASES.push(phase);
    importedPhases.push(phase);
    saveImportedPhases();
    buildPhaseSection(phase);
    addFilterTag(tag);
  } else {
    const phase = PHASES.find(p => p.id === phaseId);
    if (!phase) return;
    for (const t of tasks) phase.tasks.push(t);
    const isImported = importedPhases.some(p => p.id === phaseId);
    if (isImported) {
      saveImportedPhases();
    } else {
      if (!extraTasks[phaseId]) extraTasks[phaseId] = [];
      extraTasks[phaseId].push(...tasks);
      saveExtraTasks();
    }
    const list = document.getElementById('tl-' + phaseId);
    if (list) for (const t of tasks) list.appendChild(buildTaskItem(phase, t));
    updatePhaseTotals();
  }

  updateStats();
  closeImportModal();
}

/* ── Drag and drop ───────────────────────────────────────── */
let dragSrc   = null;
let indicator = null;

function clearDropIndicator() {
  if (indicator && indicator.parentNode) indicator.parentNode.removeChild(indicator);
  indicator = null;
}

function getIndicator() {
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.className = 'drop-indicator';
  }
  return indicator;
}

function getDropPosition(targetList, clientY) {
  const items = [...targetList.querySelectorAll('.task-item:not(.dragging)')];
  for (const item of items) {
    const rect = item.getBoundingClientRect();
    if (clientY < rect.top + rect.height / 2) return { before: item };
  }
  return { before: null };
}

function attachDragHandlers(item) {
  const handle = item.querySelector('.drag-handle');
  if (!handle) return;

  handle.addEventListener('mousedown', e => {
    if (!editMode) return;
    e.preventDefault();
    startDrag(item, e.clientX, e.clientY);
  });

  handle.addEventListener('touchstart', e => {
    if (!editMode) return;
    e.preventDefault();
    const t = e.touches[0];
    startDrag(item, t.clientX, t.clientY);
  }, { passive: false });
}

function startDrag(item, startX, startY) {
  dragSrc = item;

  // Measure and clone BEFORE adding .dragging so the ghost doesn't inherit opacity:0
  const rect    = item.getBoundingClientRect();
  const offsetX = startX - rect.left;
  const offsetY = startY - rect.top;

  const ghost = item.cloneNode(true);
  ghost.classList.add('drag-ghost');

  item.classList.add('dragging');
  ghost.style.width = rect.width + 'px';
  ghost.style.left  = rect.left + 'px';
  ghost.style.top   = rect.top  + 'px';
  document.body.appendChild(ghost);

  const onMove = (cx, cy) => {
    if (!dragSrc) return;

    ghost.style.left = (cx - offsetX) + 'px';
    ghost.style.top  = (cy - offsetY) + 'px';

    let targetList = null;
    for (const l of document.querySelectorAll('.task-list')) {
      const r = l.getBoundingClientRect();
      if (cx >= r.left && cx <= r.right && cy >= r.top - 20 && cy <= r.bottom + 20) {
        targetList = l;
        break;
      }
    }
    if (!targetList) { clearDropIndicator(); return; }
    const { before } = getDropPosition(targetList, cy);
    const ind = getIndicator();
    if (before) targetList.insertBefore(ind, before);
    else        targetList.appendChild(ind);
  };

  const onEnd = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup',   onMouseUp);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend',  onTouchEnd);
    ghost.remove();
    if (!dragSrc) return;
    dragSrc.classList.remove('dragging');
    if (indicator && indicator.parentNode) {
      indicator.parentNode.insertBefore(dragSrc, indicator);
    }
    clearDropIndicator();
    dragSrc = null;
    saveOrder();
  };

  const onMouseMove = e => onMove(e.clientX, e.clientY);
  const onMouseUp   = () => onEnd();
  const onTouchMove = e => { const t = e.touches[0]; onMove(t.clientX, t.clientY); };
  const onTouchEnd  = () => onEnd();

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup',   onMouseUp);
  document.addEventListener('touchmove', onTouchMove, { passive: true });
  document.addEventListener('touchend',  onTouchEnd);
}

/* ── Filter ──────────────────────────────────────────────── */
function setFilter(tag, btn) {
  activeFilter = tag;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  for (const p of PHASES) {
    const section = document.getElementById('phase-section-' + p.id);
    if (section) section.style.display = (tag === 'all' || p.tag === tag) ? '' : 'none';
  }
}

/* ── Build UI ────────────────────────────────────────────── */
const knownFilterTags = new Set();

// Display labels for well-known tags; unknown tags fall back to capitalised slug
const TAG_LABELS = {
  all:       'All Phases',
  general:   'General',
  varlamore: 'Varlamore',
  karamja:   'Karamja',
  skilling:  'Skilling',
  combat:    'Combat',
  endgame:   'Endgame',
};

function makeFilterBtn(tag, label, active) {
  const btn = document.createElement('button');
  btn.className   = 'filter-btn' + (active ? ' active' : '');
  btn.textContent = label;
  btn.onclick     = () => setFilter(tag, btn);
  return btn;
}

function buildFilters() {
  const row = document.getElementById('filterRow');

  // Derive tag list from the phases that actually exist after deletions are applied.
  // This ensures Clear All removes orphaned filter buttons automatically.
  const tags = ['all'];
  for (const p of PHASES) {
    if (!tags.includes(p.tag)) tags.push(p.tag);
  }

  for (const tag of tags) {
    knownFilterTags.add(tag);
    const label = TAG_LABELS[tag] || (tag.charAt(0).toUpperCase() + tag.slice(1));
    row.appendChild(makeFilterBtn(tag, label, tag === 'all'));
  }
}

function addFilterTag(tag) {
  if (knownFilterTags.has(tag)) return;
  knownFilterTags.add(tag);
  document.getElementById('filterRow').appendChild(
    makeFilterBtn(tag, tag.charAt(0).toUpperCase() + tag.slice(1), false)
  );
}

function buildTaskItem(p, t) {
  const key    = taskKey(p.id, t.name);
  const isDone = done.has(key);
  const item   = document.createElement('div');
  item.className        = 'task-item' + (isDone ? ' done' : '') + (hideDone && isDone ? ' hidden' : '');
  item.dataset.key      = key;
  item.dataset.taskName = t.name;
  item.onclick = e => {
    if (e.target.closest('.drag-handle') || e.target.closest('.delete-task-btn')) return;
    toggleTask(key, item);
  };
  const ptsBadge = t.pts ? `<span class="pts-badge ${ptsClass(t.pts)}">${t.pts}</span>` : '';
  item.innerHTML = `
    <div class="drag-handle" title="Drag to reorder">⠿</div>
    <div class="delete-task-btn" title="Delete task">✕</div>
    <div class="task-check"><span class="check-mark">✓</span></div>
    <div class="task-content">
      <div class="task-name">${t.name}</div>
      <div class="task-desc">${t.desc}</div>
      ${t.req ? `<div class="task-req">${t.req}</div>` : ''}
    </div>
    ${ptsBadge}
  `;
  item.querySelector('.delete-task-btn').addEventListener('click', e => {
    e.stopPropagation();
    deleteTask(p.id, t.name, item);
  });
  attachDragHandlers(item);
  return item;
}

function buildPhaseSection(p) {
  const container = document.getElementById('phasesContainer');
  const tasks  = orderedTasks(p);
  const earned = tasks.filter(t => done.has(taskKey(p.id, t.name))).reduce((s, t) => s + (t.pts || 0), 0);
  const total  = tasks.reduce((s, t) => s + (t.pts || 0), 0);

  const section = document.createElement('div');
  section.className = 'phase' + (collapseState[p.id] ? ' collapsed' : '');
  section.id        = 'phase-section-' + p.id;
  section.innerHTML = `
    <div class="phase-header" onclick="togglePhase('${p.id}')">
      <span class="phase-number">${p.num}</span>
      <span class="phase-title">${p.title}</span>
      <span class="phase-pts-info" id="phase-pts-${p.id}">
        <span class="earned">${earned.toLocaleString()}</span> / ${total.toLocaleString()} pts
      </span>
      <button class="add-task-btn" title="Add task to this phase">+</button>
      <button class="import-phase-btn phase-action-btn" title="Import CSV into this phase">Bulk Import Tasks</button>
      <button class="export-phase-btn phase-action-btn" title="Export phase as JSON">↓ Export</button>
      <button class="delete-phase-btn" title="Delete phase">✕</button>
      <span class="phase-chevron">▾</span>
    </div>
    <div class="task-list-wrap"><div class="task-list" id="tl-${p.id}"></div></div>
  `;
  section.querySelector('.add-task-btn').addEventListener('click', e => {
    e.stopPropagation();
    openAddTaskModal(p.id);
  });
  section.querySelector('.import-phase-btn').addEventListener('click', e => {
    e.stopPropagation();
    openImportModal(p.id);
  });
  section.querySelector('.export-phase-btn').addEventListener('click', e => {
    e.stopPropagation();
    exportPhaseJSON(p.id);
  });
  section.querySelector('.delete-phase-btn').addEventListener('click', e => {
    e.stopPropagation();
    deletePhase(p.id);
  });
  container.appendChild(section);

  const list = section.querySelector('#tl-' + p.id);
  for (const t of tasks) list.appendChild(buildTaskItem(p, t));
}

function buildPhases() {
  for (const p of PHASES) buildPhaseSection(p);
}

/* ── Add Phase Modal ─────────────────────────────────────── */
function openAddPhaseModal() {
  const nextNum = 'Phase ' + String(PHASES.length + 1).padStart(2, '0');
  document.getElementById('addPhaseNum').value         = nextNum;
  document.getElementById('addPhaseTitle').value       = '';
  document.getElementById('addPhaseTag').value         = '';
  document.getElementById('addPhaseError').textContent = '';
  document.getElementById('addPhaseOverlay').classList.add('open');
  document.getElementById('addPhaseTitle').focus();
}

function closeAddPhaseModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('addPhaseOverlay').classList.remove('open');
}

function doAddPhase() {
  const num   = document.getElementById('addPhaseNum').value.trim();
  const title = document.getElementById('addPhaseTitle').value.trim();
  const tag   = document.getElementById('addPhaseTag').value.trim().toLowerCase() || 'general';
  const errEl = document.getElementById('addPhaseError');
  errEl.textContent = '';

  if (!title) { errEl.textContent = 'Title is required.'; return; }

  const id    = 'p_imp_' + Date.now();
  const label = num || ('Phase ' + String(PHASES.length + 1).padStart(2, '0'));
  const phase = { id, num: label, title, tag, tasks: [] };
  PHASES.push(phase);
  importedPhases.push(phase);
  saveImportedPhases();
  buildPhaseSection(phase);
  addFilterTag(tag);
  updateStats();
  closeAddPhaseModal();
}

/* ── Reload defaults ─────────────────────────────────────── */
function reloadDefaults() {
  if (!confirm('Restore all default phases?\n\nDeleted default phases will reappear. Your progress, custom phases, and extra tasks will be kept.')) return;
  localStorage.removeItem(DELETED_PHASES_KEY);
  location.reload();
}

/* ── Add Task Modal ──────────────────────────────────────── */
let addTaskTargetPhaseId = null;

function openAddTaskModal(phaseId) {
  addTaskTargetPhaseId = phaseId;
  const phase = PHASES.find(p => p.id === phaseId);
  if (!phase) return;
  document.getElementById('addTaskPhaseName').textContent = phase.num + ' — ' + phase.title;
  document.getElementById('addTaskName').value        = '';
  document.getElementById('addTaskDesc').value        = '';
  document.getElementById('addTaskReq').value         = '';
  document.getElementById('addTaskPts').value         = '';
  document.getElementById('addTaskError').textContent = '';
  document.getElementById('addTaskOverlay').classList.add('open');
  document.getElementById('addTaskName').focus();
}

function closeAddTaskModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('addTaskOverlay').classList.remove('open');
}

function doAddTask() {
  const name   = document.getElementById('addTaskName').value.trim();
  const desc   = document.getElementById('addTaskDesc').value.trim();
  const req    = document.getElementById('addTaskReq').value.trim() || null;
  const ptsRaw = document.getElementById('addTaskPts').value;
  const pts    = ptsRaw ? parseInt(ptsRaw, 10) : null;
  const errEl  = document.getElementById('addTaskError');
  errEl.textContent = '';

  if (!name) { errEl.textContent = 'Name is required.'; return; }
  if (!desc) { errEl.textContent = 'Description is required.'; return; }

  const phase = PHASES.find(p => p.id === addTaskTargetPhaseId);
  if (!phase) return;

  if (phase.tasks.some(t => t.name === name)) {
    errEl.textContent = 'A task with this name already exists in this phase.';
    return;
  }

  const task = { name, desc, req, pts };
  phase.tasks.push(task);

  const isImportedPhase = importedPhases.some(p => p.id === addTaskTargetPhaseId);
  if (isImportedPhase) {
    saveImportedPhases();
  } else {
    if (!extraTasks[addTaskTargetPhaseId]) extraTasks[addTaskTargetPhaseId] = [];
    extraTasks[addTaskTargetPhaseId].push(task);
    saveExtraTasks();
  }

  const list = document.getElementById('tl-' + addTaskTargetPhaseId);
  if (list) list.appendChild(buildTaskItem(phase, task));

  updateStats();
  updatePhaseTotals();
  closeAddTaskModal();
}

/* ── Clear / Export / Import JSON ────────────────────────── */
const ALL_KEYS = [
  STORAGE_KEY, ORDER_KEY, IMPORTED_KEY, EXTRA_KEY,
  COLLAPSE_KEY, DELETED_PHASES_KEY, DELETED_TASKS_KEY,
];

function clearAll() {
  const phaseCount = PHASES.length;
  const taskCount  = PHASES.reduce((s, p) => s + p.tasks.length, 0);
  if (!confirm(
    `Reset everything?\n\n` +
    `This will remove all ${phaseCount} phase(s) and ${taskCount} task(s) ` +
    `and clear your progress.\n\nThis cannot be undone.`
  )) return;

  // Determine which phase IDs are hardcoded (not user-imported).
  // Imported phases are cleared by removing IMPORTED_KEY, but hardcoded
  // phases reload from source — so we must mark them deleted explicitly.
  const importedIds   = new Set(importedPhases.map(p => p.id));
  const hardcodedIds  = PHASES.filter(p => !importedIds.has(p.id)).map(p => p.id);

  for (const key of ALL_KEYS) localStorage.removeItem(key);

  if (hardcodedIds.length) {
    localStorage.setItem(DELETED_PHASES_KEY, JSON.stringify(hardcodedIds));
  }

  location.reload();
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportPhaseJSON(phaseId) {
  const phase = PHASES.find(p => p.id === phaseId);
  if (!phase) return;
  const safeName = phase.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  downloadJSON(
    { id: phase.id, num: phase.num, title: phase.title, tag: phase.tag, tasks: phase.tasks },
    'phase-' + safeName + '.json'
  );
}

function exportJSON() {
  const data = {};
  for (const key of ALL_KEYS) {
    const raw = localStorage.getItem(key);
    if (raw !== null) {
      try { data[key] = JSON.parse(raw); } catch (e) { data[key] = raw; }
    }
  }
  downloadJSON(data, 'taskplanner-export.json');
}

function importJSON() {
  document.getElementById('jsonFileInput').click();
}

function onJSONFileSelected(e) {
  const file = e.target.files[0];
  if (!file) return;
  e.target.value = '';   // allow re-selecting the same file

  const reader = new FileReader();
  reader.onload = evt => {
    let data;
    try { data = JSON.parse(evt.target.result); }
    catch { alert('Invalid JSON file — could not parse.'); return; }

    if (typeof data !== 'object' || Array.isArray(data) || data === null) {
      alert('Invalid export format — expected a JSON object.');
      return;
    }
    if (!ALL_KEYS.some(k => k in data)) {
      alert('This file does not appear to be a valid Task Planner export.');
      return;
    }
    if (!confirm('Import this file? Your current phases and progress will be replaced.')) return;

    for (const key of ALL_KEYS) localStorage.removeItem(key);
    for (const key of ALL_KEYS) {
      if (key in data) {
        try { localStorage.setItem(key, JSON.stringify(data[key])); } catch (e) {}
      }
    }
    location.reload();
  };
  reader.readAsText(file);
}

/* ── Init ────────────────────────────────────────────────── */
loadDone();
loadOrder();
loadImportedPhases();
loadExtraTasks();
loadDeletedState();
applyDeletedState();
loadCollapseState();
buildFilters();
buildPhases();
updateStats();
