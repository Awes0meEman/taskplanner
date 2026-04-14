/* ── Task data ───────────────────────────────────────────── */
const PHASES = [
  {
    id: 'p1', num: 'Phase 01', title: 'Immediate Freebies', tag: 'general',
    tasks: [
      { name: 'Complete the Leagues Tutorial', desc: 'Complete tutorial and begin your adventure.', req: null, pts: 10 },
      { name: 'Open the Leagues Menu', desc: 'Open the Leagues Menu in the Journal Panel.', req: null, pts: 10 },
      { name: 'Attack a dummy', desc: 'Attack a training dummy.', req: null, pts: 10 },
      { name: 'Defeat a Chicken', desc: 'Kill a chicken.', req: null, pts: 10 },
      { name: 'Defeat a Rat', desc: 'Kill a rat.', req: null, pts: 10 },
      { name: 'Defeat a Frog', desc: 'Kill a frog.', req: null, pts: 10 },
      { name: 'Defeat a scorpion', desc: 'Kill a scorpion.', req: null, pts: 10 },
      { name: 'Defeat a Hill Giant', desc: 'Kill a Hill Giant.', req: null, pts: 10 },
      { name: 'Achieve Your First Level Up', desc: 'Level up any skill.', req: null, pts: 10 },
      { name: 'Achieve Your First Level 5', desc: 'Reach level 5 in any skill.', req: null, pts: 10 },
      { name: 'Achieve Your First Level 10', desc: 'Reach level 10 in any skill.', req: null, pts: 10 },
      { name: 'Reach Combat Level 25', desc: 'Reach combat level 25.', req: null, pts: 10 },
      { name: "Scatter some Ashes in Yama's lair", desc: "Scatter ashes in Yama's League domain.", req: null, pts: 10 },
      { name: 'Bury 6 bones', desc: 'Bury 6 bones of any kind.', req: null, pts: 10 },
      { name: 'Burn Some Normal Logs', desc: 'Burn normal logs.', req: null, pts: 10 },
      { name: 'Chop Some Logs', desc: 'Chop any logs with any axe.', req: 'Any axe', pts: 10 },
      { name: 'Mine 5 Tin Ore', desc: 'Mine 5 tin ore.', req: null, pts: 10 },
      { name: 'Catch a Shrimp', desc: 'Catch raw shrimp.', req: null, pts: 10 },
      { name: 'Cook Shrimp', desc: 'Cook raw shrimp.', req: null, pts: 10 },
      { name: 'Burn Some Food', desc: 'Burn any food while trying to cook it.', req: null, pts: 10 },
      { name: 'Smelt a Bronze Bar', desc: 'Smelt a bronze bar at a furnace.', req: null, pts: 10 },
      { name: 'Fletch Some Arrow Shafts', desc: 'Fletch arrow shafts.', req: null, pts: 10 },
      { name: 'Clean a Grimy Guam', desc: 'Clean a grimy guam.', req: null, pts: 10 },
      { name: 'Clean 25 Grimy Guam Leafs', desc: 'Clean 25 grimy guam.', req: null, pts: 10 },
      { name: 'Create an Antipoison', desc: 'Make an antipoison.', req: '5 Herblore', pts: 10 },
      { name: 'Pickpocket a Citizen', desc: 'Pickpocket a man or woman.', req: null, pts: 10 },
      { name: 'Activate a prayer near an altar', desc: 'Activate a prayer near an altar.', req: null, pts: 10 },
      { name: 'Cast Home Teleport', desc: 'Cast home teleport.', req: null, pts: 10 },
      { name: 'Equip an Iron dagger', desc: 'Equip an iron dagger.', req: null, pts: 10 },
      { name: 'Equip an Elemental Staff', desc: 'Equip a basic elemental staff.', req: null, pts: 10 },
      { name: 'Shoot 6 iron arrows', desc: 'Shoot 6 iron arrows.', req: null, pts: 10 },
      { name: 'Perform a Special Attack', desc: 'Perform any special attack.', req: null, pts: 10 },
      { name: 'Turn off your run', desc: 'Turn off run energy.', req: null, pts: 10 },
      { name: 'Snare a Bird', desc: 'Catch any bird with a bird snare.', req: null, pts: 10 },
      { name: 'Snare 5 Crimson Swifts', desc: 'Catch 5 crimson swifts.', req: null, pts: 10 },
      { name: 'Drink a Strength Potion', desc: 'Drink a strength potion.', req: null, pts: 10 },
      { name: 'Eat an Onion', desc: 'Eat a raw onion.', req: null, pts: 10 },
      { name: 'Pick 6 flax', desc: 'Pick 6 flax.', req: null, pts: 10 },
      { name: 'Feed a dog some bones', desc: 'Feed a dog some bones.', req: null, pts: 10 },
      { name: 'Spin a Ball of Wool', desc: 'Spin a ball of wool at a spinning wheel.', req: null, pts: 10 },
      { name: 'Sell some silk to a silk trader', desc: 'Sell silk to a silk trader.', req: null, pts: 10 },
      { name: 'Talk to any Port master', desc: 'Talk to any port master.', req: null, pts: 10 },
      { name: 'Rake a Flower Patch', desc: 'Rake a flower patch.', req: null, pts: 10 },
      { name: 'Dye a cape Purple', desc: 'Dye a cape purple.', req: null, pts: 10 },
      { name: 'Get a haircut', desc: 'Get a haircut.', req: null, pts: 10 },
      { name: 'Eat a Rabbit', desc: 'Eat a cooked rabbit.', req: null, pts: 10 },
      { name: 'Obtain a Bird Nest', desc: 'Get a bird nest while woodcutting.', req: null, pts: 10 },
      { name: "Jump on Yama's stepping stones 666 times", desc: "Jump on stepping stones in Yama's domain.", req: '1 Agility', pts: 30 },
      { name: 'Open the Mystery Box', desc: 'A boat is a boat, but the mystery box could be anything...', req: null, pts: 30 },
      { name: "Sacrifice something to Death's coffer", desc: "Sacrifice an item to Death's coffer.", req: null, pts: 30 },
      { name: 'Defeat 3 chickens in 6 seconds', desc: 'Kill 3 chickens in 6 seconds.', req: null, pts: 30 },
      { name: 'Defeat 5 Bunnies', desc: 'Kill 5 bunnies.', req: null, pts: 30 },
      { name: '5 Collection log slots', desc: 'Obtain 5 unique collection log entries.', req: null, pts: 30 },
      { name: '15 Collection log slots', desc: 'Obtain 15 unique collection log entries.', req: null, pts: 30 },
    ]
  },
  {
    id: 'p2', num: 'Phase 02', title: 'Varlamore — Early Tasks', tag: 'varlamore',
    tasks: [
      { name: 'Bow near a quetzal', desc: 'Bow emote near a quetzal.', req: null, pts: 10 },
      { name: 'Charter a Ship From Sunset Coast to Civitas', desc: 'Take a charter ship from Sunset Coast.', req: null, pts: 10 },
      { name: 'Chop a tree in the Tlati Rainforest', desc: 'Chop any tree in Tlati Rainforest.', req: null, pts: 10 },
      { name: 'Complete the Vale totems miniquest', desc: 'Complete the Vale totems miniquest.', req: '20 Fletching', pts: 10 },
      { name: 'Cry near a child', desc: 'Cry emote near a child.', req: null, pts: 10 },
      { name: 'Dance near a bard', desc: 'Dance emote near a bard.', req: null, pts: 10 },
      { name: 'Drink a cup of tea in auburn valley', desc: 'Drink tea in Auburn Valley.', req: null, pts: 10 },
      { name: 'Drink from a bird bath', desc: 'Drink from a bird bath.', req: null, pts: 10 },
      { name: 'Drink some moon-lite', desc: 'Drink moon-lite.', req: null, pts: 10 },
      { name: 'Exit civitas via the secret passage', desc: 'Exit Civitas illa Fortis via the secret passage.', req: null, pts: 10 },
      { name: 'Fill a bucket with sand at the Sunset coast', desc: 'Fill a bucket with sand.', req: null, pts: 10 },
      { name: 'Fill something up from a water pump', desc: 'Fill something from a water pump.', req: null, pts: 10 },
      { name: 'Give Oli some Stew', desc: 'Give Oli stew in Civitas illa Fortis.', req: null, pts: 10 },
      { name: 'Inspect a green flame', desc: 'Inspect a green flame near Salvagers Outlook.', req: null, pts: 10 },
      { name: 'Defeat a Buffalo', desc: 'Defeat a buffalo.', req: null, pts: 10 },
      { name: 'Defeat a Guard in Varlamore underground', desc: 'Kill a guard in the Varlamore underground.', req: null, pts: 10 },
      { name: 'Defeat a Seagull', desc: 'Kill a seagull.', req: null, pts: 10 },
      { name: 'Defeat a thief', desc: 'Kill a thief.', req: null, pts: 10 },
      { name: 'Defeat an Icefiend in Varlamore', desc: 'Kill an icefiend in Varlamore.', req: null, pts: 10 },
      { name: 'Defeat an Imp in a basement', desc: 'Kill an imp in the Kastori basement.', req: null, pts: 10 },
      { name: 'Milk a Buffalo', desc: 'Milk a buffalo.', req: null, pts: 10 },
      { name: 'Pet a Caique', desc: 'Pet a caique near the statue of Ates or in Tlati Rainforest.', req: null, pts: 10 },
      { name: 'Pet Renu', desc: 'Pet Renu.', req: null, pts: 10 },
      { name: 'Pet Xolo in Civitas', desc: 'Pet Xolo in Civitas illa Fortis.', req: null, pts: 10 },
      { name: 'Pick some Sweetcorn from a Field', desc: 'Pick sweetcorn from a field.', req: null, pts: 10 },
      { name: 'Salute next to a statue of Quoatlos', desc: 'Salute emote near a statue of Quoatlos.', req: null, pts: 10 },
      { name: 'Shear an Alpaca', desc: 'Shear an alpaca.', req: null, pts: 10 },
      { name: 'Sit near a stolen cabbage', desc: 'Sit emote near a stolen cabbage.', req: null, pts: 10 },
      { name: 'Step onto an Ent trail', desc: 'Step on an ent trail.', req: null, pts: 10 },
      { name: 'Talk to a Gladiator', desc: 'Talk to a gladiator.', req: null, pts: 10 },
      { name: "Travel in Achilka's boat", desc: "Travel in Achilka's boat along the River Varla.", req: null, pts: 10 },
      { name: 'Travel to Aldarin via Fairy ring', desc: 'Use a fairy ring to travel to Aldarin.', req: null, pts: 10 },
      { name: 'Travel using the Quetzal Transport System', desc: 'Use Quetzal fast travel.', req: null, pts: 10 },
      { name: 'Trim your beard in Cam torum', desc: 'Trim your beard in Cam Torum.', req: null, pts: 10 },
      { name: 'Witness the gemstone Crab burrow away', desc: 'Witness a gemstone crab burrow.', req: null, pts: 10 },
      { name: 'Admire some beautiful scenery', desc: 'Admire scenery in Auburnvale or Auburn Valley.', req: null, pts: 10 },
      { name: 'Complete Meat and Greet', desc: 'Complete the Meat and Greet quest.', req: null, pts: 30 },
      { name: 'Equip an orange', desc: 'Equip an orange.', req: null, pts: 30 },
      { name: 'Use the pottery oven in Civitas', desc: 'Make something out of clay in Civitas.', req: null, pts: 30 },
      { name: 'Fill a Grape Barrel for the Foreman', desc: 'Fill a grape barrel in Aldarin.', req: null, pts: 30 },
      { name: 'Exchange an Ent seed with an Ent', desc: 'Exchange an ent seed with an ent.', req: null, pts: 30 },
      { name: 'Fish a House Key', desc: 'Fish a house key with a big fishing net.', req: 'Big fishing net', pts: 30 },
      { name: 'Defeat a Oryx with melee', desc: 'Kill an Oryx in Avium Savannah with melee.', req: null, pts: 30 },
      { name: 'Defeat a Dire Wolf', desc: 'Kill a dire wolf.', req: 'Partial Meat and Greet', pts: 30 },
      { name: 'Defeat a fully grown jaguar without taking any damage', desc: 'Safespot a jaguar and take zero damage.', req: 'A weapon to safespot', pts: 30 },
      { name: 'Complete Wave 1 of Fortis Colosseum', desc: 'Complete wave 1 of the Fortis Colosseum.', req: null, pts: 30 },
      { name: 'Defeat the Moons of Peril', desc: 'Kill the Moons of Peril.', req: null, pts: 30 },
      { name: 'Defeat the Moons of Peril 10 times', desc: 'Kill the Moons of Peril 10 times.', req: null, pts: 30 },
      { name: 'Defeat the Moons of Peril 25 times', desc: 'Kill the Moons of Peril 25 times.', req: null, pts: 30 },
      { name: '1 Hueycoatl Kill', desc: 'Kill the Hueycoatl in Varlamore.', req: null, pts: 30 },
    ]
  },
  {
    id: 'p3', num: 'Phase 03', title: 'Varlamore — Skilling Chain', tag: 'varlamore',
    tasks: [
      { name: 'Complete Death on the Isle', desc: 'Complete the quest.', req: '34 Thieving, 32 Agility', pts: 30 },
      { name: 'Activate the Statue of Ates', desc: 'Activate the Statue of Ates in Aldarin.', req: 'Death on the Isle', pts: 30 },
      { name: 'Activate all Statues of Ates', desc: 'Activate all statues of Ates.', req: 'Death on the Isle', pts: 30 },
      { name: 'Complete At First Light', desc: 'Complete the quest.', req: '46 Hunter, 30 Herblore, 27 Construction', pts: 30 },
      { name: 'Complete a Hunter Rumour', desc: 'Complete 1 hunter rumour.', req: '46 Hunter', pts: 30 },
      { name: 'Complete 10 Hunter Rumours', desc: 'Complete 10 hunter rumours.', req: '46 Hunter', pts: 30 },
      { name: 'Complete 25 Hunter Rumours', desc: 'Complete 25 hunter rumours.', req: '46 Hunter', pts: 30 },
      { name: 'Build a Quetzal Landing Site', desc: 'Build a quetzal landing site.', req: '46 Hunter', pts: 30 },
      { name: 'Create a Quetzal Whistle', desc: 'Create a quetzal whistle.', req: '46 Hunter', pts: 30 },
      { name: 'Enter a dark cave in Varlamore', desc: 'Enter the cave near the Hunter Guild.', req: '46 Hunter', pts: 30 },
      { name: 'Catch a Jerboa', desc: 'Catch an embertailed jerboa.', req: '39 Hunter, Box trap', pts: 30 },
      { name: 'Catch a Pyre fox', desc: 'Catch a pyre fox.', req: '57 Hunter, Knife and Logs', pts: 30 },
      { name: 'Complete 10 laps of the Varlamore Agility Course', desc: 'Complete 10 laps of the Colossal Wyrm Agility Course.', req: '50 Agility', pts: 30 },
      { name: 'Break down 10 calcified deposits', desc: 'Mine 10 calcified deposits.', req: '41 Mining, Hammer and Pickaxe', pts: 30 },
      { name: 'Mine 250 Blessed Bone Shards', desc: 'Mine 250 blessed bone shards.', req: '41 Mining', pts: 30 },
      { name: 'Teleport to Cam Torum using a Calcified Moth', desc: 'Use a calcified moth to teleport.', req: '41 Mining', pts: 30 },
      { name: 'Mine some coal from Stone cutter outpost', desc: 'Mine coal from Stonecutter Outpost.', req: '30 Mining', pts: 10 },
      { name: 'Mine 20 Mithril Ore in the Stonecutter Outpost', desc: 'Mine 20 mithril in the Stonecutter Outpost.', req: '55 Mining', pts: 30 },
      { name: 'Steal a House Key', desc: 'Steal a house key.', req: '50 Thieving', pts: 30 },
      { name: 'Steal 15 House Keys', desc: 'Steal 15 house keys.', req: '50 Thieving', pts: 30 },
      { name: 'Steal 25 Valuables', desc: 'Steal 25 valuables.', req: '50 Thieving', pts: 30 },
      { name: 'Steal 100 Valuables', desc: 'Steal 100 valuables.', req: '50 Thieving', pts: 30 },
      { name: 'Pay an Urchin for Information', desc: 'Pay an urchin in the Stealing Valuables minigame.', req: '50 Thieving', pts: 30 },
      { name: 'Pickpocket a knight of varlamore 20 times', desc: 'Pickpocket a Knight of Varlamore 20 times.', req: '55 Thieving', pts: 30 },
      { name: 'Steal from the Fortis Spice Stall', desc: 'Steal from the spice stall in Civitas.', req: '65 Thieving', pts: 30 },
      { name: 'Fully decorate an Oak totem', desc: 'Decorate an oak totem in Auburn Valley.', req: '20 Fletching, 5 Oak logs, Knife', pts: 30 },
      { name: 'Fully decorate a Willow totem', desc: 'Decorate a willow totem in Auburn Valley.', req: '35 Fletching, 5 Willow logs, Knife', pts: 30 },
      { name: 'Fully decorate a Maple totem', desc: 'Decorate a maple totem in Auburn Valley.', req: '50 Fletching, 5 Maple logs, Knife', pts: 30 },
      { name: 'Store some bowstrings inside a bowstring spool', desc: 'Store bowstrings in a spool.', req: '20 Fletching, Vale Totems', pts: 30 },
      { name: 'Make a Greenman statue', desc: 'Make a Greenman statue.', req: '53 Fletching, 5 Ent branches, Greenman mask', pts: 30 },
      { name: 'Complete Shadows of Custodia', desc: 'Complete the Shadows of Custodia quest.', req: '54 Slayer, 45 Fishing, 41 Construction, 36 Hunter', pts: 30 },
      { name: 'Bury some wyrm bones near a Wyrm skeleton', desc: 'Bury wyrm bones near a skeleton.', req: '62 Slayer, Wyrm bones', pts: 30 },
      { name: 'Complete the Heart of Darkness', desc: 'Complete The Heart of Darkness quest.', req: '55 Mining, 48 Thieving, 48 Slayer, 46 Agility', pts: 30 },
      { name: 'Defeat 10 Frost Crabs', desc: 'Kill 10 frost crabs.', req: 'Heart of Darkness + requirements', pts: 30 },
      { name: 'Defeat Amoxliatl 1 Time', desc: 'Kill the Amoxliatl.', req: 'Heart of Darkness + requirements', pts: 30 },
      { name: 'Complete a Ribbiting Tale', desc: 'Complete the quest.', req: '15 Woodcutting, 126 Combat', pts: 30 },
      { name: 'Equip a piece of armour from the moons of peril', desc: 'Equip any Blood/Frost/Eclipse moon armour piece.', req: '50 Defence + 75 Str/Mag/Rng', pts: 30 },
      { name: 'Equip Pendant of Ates', desc: 'Equip the pendant of ates.', req: '48 Slayer', pts: 30 },
      { name: 'Equip Glacial Temotli', desc: 'Equip the glacial temotli.', req: '48 Slayer, 55 Attack', pts: 30 },
      { name: 'Equip Sulphur Blades', desc: 'Equip sulphur blades.', req: '55 Attack', pts: 30 },
      { name: 'Equip an egg', desc: 'Hold an egg (requires Scrambled! quest).', req: 'Scrambled!', pts: 30 },
      { name: 'Teleport to Civitas illa Fortis', desc: 'Teleport using standard spellbook.', req: '54 Magic', pts: 30 },
      { name: 'Equip a piece of Alchemists outfit', desc: 'Get a piece from the Mixology shop.', req: '60 Herblore', pts: 30 },
      { name: 'Equip a piece of Hueycoatl armour', desc: 'Equip hueycoatl armour.', req: '86 Crafting, 70 Ranged, 40 Defence', pts: 30 },
    ]
  },
  {
    id: 'p4', num: 'Phase 04', title: 'Karamja', tag: 'karamja',
    tasks: [
      { name: 'Catch a Karambwanji on Karamja', desc: 'Catch a karambwanji.', req: '5 Fishing', pts: 10 },
      { name: 'Fill a Crate With Bananas', desc: 'Fill a crate with bananas for Luthas at Musa Point.', req: null, pts: 10 },
      { name: 'Defeat a Snake in Karamja', desc: 'Kill a snake in Karamja.', req: null, pts: 10 },
      { name: 'Pick a Pineapple on Karamja', desc: 'Pick a pineapple.', req: null, pts: 10 },
      { name: 'Receive an Agility Arena Ticket', desc: 'Get a ticket from the Brimhaven Agility Arena.', req: null, pts: 10 },
      { name: 'Defeat a TzHaar', desc: 'Kill any TzHaar in Mor Ul Rek.', req: null, pts: 30 },
      { name: 'Enter the Brimhaven Dungeon', desc: 'Enter the Brimhaven Dungeon.', req: null, pts: 30 },
      { name: 'Enter the Tai Bwo Wannai Hardwood Grove', desc: 'Enter the hardwood grove.', req: null, pts: 30 },
      { name: 'Equip an Obsidian Cape', desc: 'Equip an obsidian cape.', req: null, pts: 30 },
      { name: 'Sleep in Paramaya Inn', desc: 'Pay the barkeep to sleep in Paramaya Inn.', req: null, pts: 30 },
      { name: 'Buy a Snapdragon From Pirate Jackie the Fruit', desc: 'Buy from Pirate Jackie in Brimhaven.', req: null, pts: 30 },
      { name: 'Complete the Easy Karamja Diary', desc: 'Complete all easy Karamja diary tasks.', req: 'See wiki', pts: 30 },
      { name: 'Equip a Full Tai Bwo Wannai Villager Set', desc: 'Equip the full villager clothing set.', req: null, pts: 30 },
      { name: 'Catch a Salmon on Karamja', desc: 'Catch a salmon on Karamja.', req: '30 Fishing', pts: 30 },
      { name: 'Take a Shortcut Across the Shilo Village River', desc: 'Use the stepping stones shortcut.', req: '32 Agility', pts: 30 },
      { name: 'Equip a Toktz-Ket-Xil', desc: 'Equip a TzHaar shield.', req: '60 Defence', pts: 30 },
      { name: 'Equip a Toktz-Xil-Ak', desc: 'Equip a TzHaar sword.', req: '60 Attack', pts: 30 },
      { name: 'Equip a Toktz-Xil-Ek', desc: 'Equip a TzHaar knife.', req: '60 Attack', pts: 30 },
      { name: 'Craft 50 Nature Runes', desc: 'Craft nature runes at the Nature Altar.', req: '44 Runecraft', pts: 30 },
      { name: 'Defeat a Black Demon on Karamja', desc: 'Kill a black demon on Karamja.', req: null, pts: 30 },
      { name: 'Defeat a Steel Dragon on Karamja', desc: 'Kill a steel dragon on Karamja.', req: null, pts: 30 },
      { name: 'Chop a dense jungle', desc: 'Fully clear a dense jungle in Tai Bwo Wannai Cleanup.', req: '35 Woodcutting', pts: 30 },
      { name: 'Complete the Medium Karamja Diary', desc: 'Complete all medium Karamja diary tasks.', req: 'See wiki', pts: 30 },
      { name: 'Catch 50 Karambwan', desc: 'Catch 50 karambwan.', req: '65 Fishing, partial Tai Bwo Wannai Trio', pts: 30 },
      { name: 'Equip any spear (kp)', desc: 'Equip a karambwan-poisoned spear.', req: null, pts: 30 },
    ]
  },
  {
    id: 'p5', num: 'Phase 05', title: 'General Skilling', tag: 'skilling',
    tasks: [
      { name: 'Reach Combat Level 50', desc: 'Reach combat level 50.', req: null, pts: 30 },
      { name: 'Reach Combat Level 75', desc: 'Reach combat level 75.', req: null, pts: 30 },
      { name: 'Achieve Your First Level 20', desc: 'Reach level 20 in any skill.', req: null, pts: 30 },
      { name: 'Achieve Your First Level 30', desc: 'Reach level 30 in any skill.', req: null, pts: 30 },
      { name: 'Achieve Your First Level 40', desc: 'Reach level 40 in any skill.', req: null, pts: 30 },
      { name: 'Achieve Your First Level 50', desc: 'Reach level 50 in any skill.', req: null, pts: 30 },
      { name: 'Achieve Your First Level 60', desc: 'Reach level 60 in any skill.', req: null, pts: 30 },
      { name: 'Reach Base Level 5', desc: 'Reach level 5 in every skill.', req: null, pts: 30 },
      { name: 'Reach Base Level 10', desc: 'Reach level 10 in every skill.', req: null, pts: 30 },
      { name: 'Reach Base Level 20', desc: 'Reach level 20 in every skill.', req: null, pts: 30 },
      { name: 'Reach Base Level 30', desc: 'Reach level 30 in every skill.', req: null, pts: 30 },
      { name: 'Reach Total Level 100', desc: 'Reach total level 100.', req: null, pts: 30 },
      { name: 'Reach Total Level 250', desc: 'Reach total level 250.', req: null, pts: 30 },
      { name: 'Reach Total Level 666', desc: 'Reach total level 666.', req: null, pts: 30 },
      { name: 'Reach Total Level 750', desc: 'Reach total level 750.', req: null, pts: 30 },
      { name: 'Complete 1 Slayer Task', desc: 'Complete 1 slayer task.', req: null, pts: 30 },
      { name: 'Slay 250 Creatures', desc: 'Kill 250 creatures on a slayer task.', req: null, pts: 30 },
      { name: 'Assemble a Slayer Helm', desc: 'Assemble a slayer helmet.', req: '58 Slayer, 55 Crafting, 400 Slayer pts', pts: 80 },
      { name: 'Smelt an Iron Bar', desc: 'Smelt an iron bar.', req: '15 Smithing', pts: 10 },
      { name: 'Smelt a Steel Bar', desc: 'Smelt a steel bar.', req: '30 Smithing', pts: 30 },
      { name: 'Mine 50 Iron Ore', desc: 'Mine 50 iron ore.', req: '15 Mining', pts: 30 },
      { name: 'Mine 50 Mithril Ore', desc: 'Mine 50 mithril ore.', req: '55 Mining', pts: 30 },
      { name: 'Smith 150 Iron Arrowtips', desc: 'Smith 150 iron arrowtips.', req: '20 Smithing', pts: 30 },
      { name: 'Smith a Steel 2h sword', desc: 'Smith a steel 2h sword.', req: '44 Smithing', pts: 30 },
      { name: 'Chop 100 Willow Logs', desc: 'Chop 100 willow logs.', req: '30 Woodcutting', pts: 30 },
      { name: 'Chop 50 Maple Logs', desc: 'Chop 50 maple logs.', req: '45 Woodcutting', pts: 30 },
      { name: 'Burn 100 Willow Logs', desc: 'Burn 100 willow logs.', req: '30 Firemaking', pts: 30 },
      { name: 'Burn 25 Maple Logs', desc: 'Burn 25 maple logs.', req: '45 Firemaking', pts: 30 },
      { name: 'Catch 50 Tuna', desc: 'Catch 50 tuna.', req: '35 Fishing', pts: 30 },
      { name: 'Catch 75 Lobsters', desc: 'Catch 75 lobsters.', req: '40 Fishing', pts: 30 },
      { name: 'Catch 100 Tuna', desc: 'Catch 100 tuna.', req: '35 Fishing', pts: 30 },
      { name: 'Catch 100 Swordfish', desc: 'Catch 100 swordfish.', req: '50 Fishing', pts: 30 },
      { name: 'Use the Protect from Melee Prayer', desc: 'Activate protect from melee.', req: '43 Prayer', pts: 30 },
      { name: 'Activate Smite', desc: 'Activate smite prayer.', req: '52 Prayer', pts: 30 },
      { name: 'Make 30 Prayer Potions', desc: 'Brew 30 prayer potions.', req: '38 Herblore', pts: 30 },
      { name: 'Make 20 Stamina Potions', desc: 'Brew 20 stamina potions.', req: '77 Herblore', pts: 30 },
      { name: 'Cast Low Level Alchemy', desc: 'Cast low alch.', req: '21 Magic', pts: 30 },
      { name: 'Teleport Using Law Runes', desc: 'Cast any law rune teleport.', req: '25 Magic', pts: 30 },
      { name: '1 Easy Clue Scroll', desc: 'Complete an easy clue scroll.', req: null, pts: 30 },
      { name: '1 Medium Clue Scroll', desc: 'Complete a medium clue scroll.', req: null, pts: 30 },
      { name: '1 Hard Clue Scroll', desc: 'Complete a hard clue scroll.', req: null, pts: 30 },
      { name: '1 Elite Clue Scroll', desc: 'Complete an elite clue scroll.', req: null, pts: 30 },
      { name: '30 Collection log slots', desc: 'Obtain 30 unique collection log entries.', req: null, pts: 30 },
      { name: '50 Collection log slots', desc: 'Obtain 50 unique collection log entries.', req: null, pts: 30 },
    ]
  },
  {
    id: 'p6', num: 'Phase 06', title: 'Mid-Game Combat', tag: 'combat',
    tasks: [
      { name: 'Defeat a Troll in Asgarnia', desc: 'Kill a troll in Asgarnia.', req: null, pts: 10 },
      { name: 'Defeat a Werewolf in Morytania', desc: 'Kill a werewolf in Morytania.', req: null, pts: 10 },
      { name: 'Defeat a Chaos Dwarf in the Wilderness', desc: 'Kill a chaos dwarf in the Wilderness.', req: null, pts: 10 },
      { name: '150 Lizardmen Shaman Kills', desc: 'Kill 150 lizardmen shamans.', req: null, pts: 30 },
      { name: 'Defeat a Demonic Gorilla', desc: 'Kill a demonic gorilla in Crash Site Cavern.', req: null, pts: 80 },
      { name: 'Defeat a Mithril Dragon', desc: 'Kill a mithril dragon in the Ancient Cavern.', req: null, pts: 80 },
      { name: 'Equip a Dragon Defender', desc: 'Equip a dragon defender.', req: "60 Defence, Warriors' Guild access", pts: 80 },
      { name: 'Equip any Full Barrows Armour Set', desc: 'Equip a full barrows armour set.', req: '70 Defence + 70 Attack or 70 Ranged', pts: 80 },
      { name: 'Equip a Malediction Ward', desc: 'Equip a malediction ward.', req: '60 Defence', pts: 80 },
      { name: 'Equip a Dragon 2-Handed Sword in the Wilderness', desc: 'Equip a d2h in the Wilderness.', req: '60 Attack', pts: 80 },
      { name: 'Defeat Phantom Muspah', desc: 'Kill Phantom Muspah.', req: null, pts: 80 },
      { name: '1 Skotizo Kill', desc: 'Kill Skotizo in the Catacombs of Kourend.', req: null, pts: 80 },
      { name: 'Kill 1 unique Echo Boss', desc: 'Kill 1 unique echo boss.', req: null, pts: 80 },
      { name: 'Kill 2 unique Echo Bosses', desc: 'Kill 2 unique echo bosses.', req: null, pts: 80 },
      { name: 'Kill 3 unique Echo Bosses', desc: 'Kill 3 unique echo bosses.', req: null, pts: 80 },
      { name: 'Defeat the Royal Titans solo', desc: 'Kill the Royal Titans solo.', req: null, pts: 80 },
      { name: 'Defeat the Corporeal Beast', desc: 'Kill the Corporeal Beast in the Wilderness.', req: null, pts: 80 },
      { name: 'Equip a Trident of the Seas', desc: 'Equip a trident of the seas.', req: '75 Magic, 87 Slayer', pts: 80 },
      { name: 'Defeat the Kraken Boss 50 Times', desc: 'Kill the Kraken boss 50 times.', req: '87 Slayer', pts: 80 },
      { name: '1 Araxxor Kill', desc: 'Kill Araxxor in Morytania.', req: '92 Slayer', pts: 80 },
      { name: 'Equip a Fire Cape', desc: 'Complete the TzHaar Fight Cave.', req: 'Fight Cave completion', pts: 200 },
    ]
  },
  {
    id: 'p7', num: 'Phase 07', title: 'Endgame', tag: 'endgame',
    tasks: [
      { name: 'Complete the Corrupted Gauntlet', desc: 'Complete the Corrupted Gauntlet in Prifddinas.', req: null, pts: 80 },
      { name: 'Defeat Zalcano', desc: 'Kill Zalcano in Prifddinas.', req: null, pts: 80 },
      { name: "Equip a Piece of the Dagon'Hai Set", desc: "Equip any dagon'hai robe piece.", req: '70 Magic, 40 Defence', pts: 200 },
      { name: 'Equip an Occult Necklace', desc: 'Equip an occult necklace.', req: '70 Magic, 93 Slayer', pts: 200 },
      { name: 'Equip an Abyssal Tentacle', desc: 'Equip an abyssal tentacle.', req: '50 Magic, 75 Attack, 87 Slayer', pts: 200 },
      { name: 'Craft a Toxic Blowpipe', desc: 'Craft a toxic blowpipe.', req: '78 Fletching', pts: 200 },
      { name: 'Equip any Ancestral piece', desc: 'Equip any ancestral robe piece.', req: '75 Magic, 65 Defence', pts: 200 },
      { name: 'Equip a Piece of Radiant Oathplate', desc: 'Equip a piece of radiant oathplate.', req: '78 Defence', pts: 200 },
      { name: 'Equip Some Zenyte Jewelry', desc: 'Equip any zenyte jewelry.', req: '89 Crafting', pts: 200 },
      { name: 'Imbue a God Cape', desc: 'Imbue a god cape.', req: '75 Magic, Mage Arena II', pts: 200 },
      { name: 'Equip a Dragon Hunter Lance', desc: 'Equip a dragon hunter lance.', req: '95 Slayer, 78 Attack', pts: 200 },
      { name: "Defeat Phosani's Nightmare", desc: "Kill Phosani's Nightmare.", req: null, pts: 200 },
      { name: 'Equip a Godsword', desc: 'Equip any godsword.', req: '75 Attack + 70 Hitpoints/Agility/Ranged/Str', pts: 200 },
      { name: 'Equip the Voidwaker', desc: 'Equip the voidwaker.', req: '75 Attack', pts: 200 },
      { name: 'Cast Ice Barrage', desc: 'Cast ice barrage.', req: '94 Magic', pts: 200 },
      { name: 'Kill 4 unique Echo Bosses', desc: 'Kill 4 unique echo bosses.', req: null, pts: 200 },
      { name: 'Complete Wave 12 of Fortis Colosseum', desc: 'Complete wave 12 of the Fortis Colosseum.', req: null, pts: 200 },
      { name: 'Defeat Awakened Whisperer', desc: 'Kill the Awakened Whisperer.', req: null, pts: 200 },
      { name: 'Defeat Awakened Leviathan', desc: 'Kill the Awakened Leviathan.', req: null, pts: 200 },
      { name: 'Defeat Awakened Duke Sucellus', desc: 'Kill the Awakened Duke Sucellus.', req: null, pts: 200 },
      { name: 'Defeat Awakened Vardorvis', desc: 'Kill the Awakened Vardorvis.', req: null, pts: 200 },
      { name: 'Equip a Corrupted Weapon', desc: 'Equip a corrupted blade or bow.', req: '80 Attack or 80 Ranged + 70 Agility', pts: 400 },
      { name: 'Equip an Infernal Cape', desc: 'Complete The Inferno.', req: 'Inferno completion', pts: 400 },
      { name: "Complete Tzhaar-Ket-Rak's Special challenge", desc: 'Complete the league-only TzHaar challenge.', req: null, pts: 400 },
      { name: 'Defeat Nex Solo', desc: 'Kill Nex solo in a private instance.', req: null, pts: 400 },
    ]
  }
];

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
function loadDone() {
  try { done = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
  catch (e) { done = new Set(); }
}

function saveDone() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...done])); } catch (e) {}
}

function loadOrder() {
  try { taskOrder = JSON.parse(localStorage.getItem(ORDER_KEY) || '{}'); }
  catch (e) { taskOrder = {}; }
}

function saveOrder() {
  for (const p of PHASES) {
    const list = document.getElementById('tl-' + p.id);
    if (!list) continue;
    taskOrder[p.id] = [...list.querySelectorAll('.task-item')]
      .map(el => el.dataset.taskName);
  }
  try { localStorage.setItem(ORDER_KEY, JSON.stringify(taskOrder)); } catch (e) {}
}

function loadImportedPhases() {
  try { importedPhases = JSON.parse(localStorage.getItem(IMPORTED_KEY) || '[]'); }
  catch (e) { importedPhases = []; return; }
  for (const p of importedPhases) PHASES.push(p);
}

function saveImportedPhases() {
  try { localStorage.setItem(IMPORTED_KEY, JSON.stringify(importedPhases)); } catch (e) {}
}

function loadExtraTasks() {
  try { extraTasks = JSON.parse(localStorage.getItem(EXTRA_KEY) || '{}'); }
  catch (e) { extraTasks = {}; return; }
  for (const p of PHASES) {
    if (extraTasks[p.id] && extraTasks[p.id].length) p.tasks.push(...extraTasks[p.id]);
  }
}

function saveExtraTasks() {
  try { localStorage.setItem(EXTRA_KEY, JSON.stringify(extraTasks)); } catch (e) {}
}

function loadCollapseState() {
  try { collapseState = JSON.parse(localStorage.getItem(COLLAPSE_KEY) || '{}'); }
  catch (e) { collapseState = {}; }
}

function saveCollapseState() {
  try { localStorage.setItem(COLLAPSE_KEY, JSON.stringify(collapseState)); } catch (e) {}
}

function loadDeletedState() {
  try { deletedPhases = new Set(JSON.parse(localStorage.getItem(DELETED_PHASES_KEY) || '[]')); }
  catch (e) { deletedPhases = new Set(); }
  try { deletedTasks = new Set(JSON.parse(localStorage.getItem(DELETED_TASKS_KEY) || '[]')); }
  catch (e) { deletedTasks = new Set(); }
}

function saveDeletedPhases() {
  try { localStorage.setItem(DELETED_PHASES_KEY, JSON.stringify([...deletedPhases])); } catch (e) {}
}

function saveDeletedTasks() {
  try { localStorage.setItem(DELETED_TASKS_KEY, JSON.stringify([...deletedTasks])); } catch (e) {}
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
  const pct = totalPts > 0 ? Math.round(earnedPts / totalPts * 100) : 0;
  document.getElementById('statPct').textContent      = pct + '%';
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent =
    earnedPts.toLocaleString() + ' / ' + totalPts.toLocaleString() + ' pts';
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
  try { localStorage.setItem(ORDER_KEY, JSON.stringify(taskOrder)); } catch (e) {}

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
    try { localStorage.setItem(ORDER_KEY, JSON.stringify(taskOrder)); } catch (e) {}
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

/* ── Import modal ────────────────────────────────────────── */
function openHelpModal() {
  document.getElementById('helpOverlay').classList.add('open');
}

function closeHelpModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('helpOverlay').classList.remove('open');
}

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
    const btn   = document.createElement('button');
    btn.className   = 'filter-btn' + (tag === 'all' ? ' active' : '');
    btn.textContent = label;
    btn.onclick     = () => setFilter(tag, btn);
    row.appendChild(btn);
  }
}

function addFilterTag(tag) {
  if (knownFilterTags.has(tag)) return;
  knownFilterTags.add(tag);
  const row = document.getElementById('filterRow');
  const btn = document.createElement('button');
  btn.className   = 'filter-btn';
  btn.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
  btn.onclick     = () => setFilter(tag, btn);
  row.appendChild(btn);
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
      <button class="import-phase-btn" title="Import CSV into this phase">Bulk Import Tasks</button>
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

function exportJSON() {
  const data = {};
  for (const key of ALL_KEYS) {
    const raw = localStorage.getItem(key);
    if (raw !== null) {
      try { data[key] = JSON.parse(raw); } catch (e) { data[key] = raw; }
    }
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'taskplanner-export.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
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
