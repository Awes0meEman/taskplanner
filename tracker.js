/* ── Task data ───────────────────────────────────────────── */
const PHASES = [
  {
    id: "p_phase_01", num: "Phase 01", title: "Day 1", tag: "day1",
    tasks: [
      { name: "Open the Leagues Menu", desc: "Open the Leagues Menu", req: null, pts: null },
      { name: "Complete the Leagues Tutorial", desc: "Complete the Leagues Tutorial", req: null, pts: null },
      { name: "Claim first relic (I'm going Endless Harvest) *turn off auto bank for now*", desc: "Claim first relic (I'm going Endless Harvest) *turn off auto bank for now*", req: null, pts: null },
      { name: "Turn off Run and back on", desc: "Turn off Run and back on", req: null, pts: null },
      { name: "Pickpocket a Citizen (to level 5 Thieving)", desc: "Pickpocket a Citizen (to level 5 Thieving)", req: null, pts: null },
      { name: "Go inside house to the east fill bucket at water pump", desc: "Go inside house to the east fill bucket at water pump", req: null, pts: null },
      { name: "Run north pet Renu", desc: "Run north pet Renu", req: null, pts: null },
      { name: "Bow emote near Renu", desc: "Bow emote near Renu", req: null, pts: null },
      { name: "Travel with bird to anywhere", desc: "Travel with bird to anywhere", req: null, pts: null },
      { name: "Home teleport (might put you in Yama's lair leave to Varlamore again)", desc: "Home teleport (might put you in Yama's lair leave to Varlamore again)", req: null, pts: null },
      { name: "Run west attack dummy to lv 8 attack", desc: "Run west attack dummy to lv 8 attack", req: null, pts: null },
      { name: "Run to Bazaar (market) cry near a child", desc: "Run to Bazaar (market) cry near a child", req: null, pts: null },
      { name: "Thieve full inventory of Cakes (need 14+)", desc: "Thieve full inventory of Cakes (need 14+)", req: null, pts: null },
      { name: "Run northwest to General store", desc: "Run northwest to General store", req: null, pts: null },
      { name: "Sell 1 CAKE AT A TIME for maximum GP (not 5 10 or 50) need 260+ gp", desc: "Sell 1 CAKE AT A TIME for maximum GP (not 5 10 or 50) need 260+ gp", req: null, pts: null },
      { name: "Buy 1 knife 1 chisel 1 spade 2 bird snares", desc: "Buy 1 knife 1 chisel 1 spade 2 bird snares", req: null, pts: null },
      { name: "Run south to clothing shop buy PINK SKIRT Brown Apron Red Cape (red cape is 2gp others are 32gp)", desc: "Run south to clothing shop buy PINK SKIRT Brown Apron Red Cape (red cape is 2gp others are 32gp)", req: null, pts: null },
      { name: "Run straight south of general store to southern Varlamore wall. Kill rat w/ bow", desc: "Run straight south of general store to southern Varlamore wall. Kill rat w/ bow", req: null, pts: null },
      { name: "Run east to altar Salute next to Statue of Quoatlos (southern)", desc: "Run east to altar Salute next to Statue of Quoatlos (southern)", req: null, pts: null },
      { name: "Run next to Altar activate Thick skin", desc: "Run next to Altar activate Thick skin", req: null, pts: null },
      { name: "Run east pet Xolo outside near Bird Bath", desc: "Run east pet Xolo outside near Bird Bath", req: null, pts: null },
      { name: "Drink from Bird Bath", desc: "Drink from Bird Bath", req: null, pts: null },
      { name: "Chop (or punch) 2 trees (Barb should get 15+ wc here)", desc: "Chop (or punch) 2 trees (Barb should get 15+ wc here)", req: null, pts: null },
      { name: "Burn 1 log fletch 1 log into arrow shafts", desc: "Burn 1 log fletch 1 log into arrow shafts", req: null, pts: null },
      { name: "Run to east bank deposit all withdraw coins", desc: "Run to east bank deposit all withdraw coins", req: null, pts: null },
      { name: "Enter Colosseum run north and talk to gladiator", desc: "Enter Colosseum run north and talk to gladiator", req: null, pts: null },
      { name: "Exit run north talk to Port master (Sailing)", desc: "Exit run north talk to Port master (Sailing)", req: null, pts: null },
      { name: "Run west and buy 10 buckets of sand 10 soda ash glassblowing pipe", desc: "Run west and buy 10 buckets of sand 10 soda ash glassblowing pipe", req: null, pts: null },
      { name: "Run south to furnace make 10 molten glass deposit at bank", desc: "Run south to furnace make 10 molten glass deposit at bank", req: null, pts: null },
      { name: "Run back to charter buy 10 more buckets of sand 10 soda ash", desc: "Run back to charter buy 10 more buckets of sand 10 soda ash", req: null, pts: null },
      { name: "Run to furnace make 10 molten glass again blow all glass into oil lanterns for 20 Crafting", desc: "Run to furnace make 10 molten glass again blow all glass into oil lanterns for 20 Crafting", req: null, pts: null },
      { name: "Run to bank deposit oil lanterns withdraw Bucket of water (empty keep bucket) air and mind runes dramen staff -(equip) spade pot", desc: "Run to bank deposit oil lanterns withdraw Bucket of water (empty keep bucket) air and mind runes dramen staff -(equip) spade pot", req: null, pts: null },
      { name: "Run west to crafting shop buy shears", desc: "Run west to crafting shop buy shears", req: null, pts: null },
      { name: "Run south of Varlamore from the bank", desc: "Run south of Varlamore from the bank", req: null, pts: null },
      { name: "Pick 6 cabbage (drop)", desc: "Pick 6 cabbage (drop)", req: null, pts: null },
      { name: "Kill 1 chicken pick up bone", desc: "Kill 1 chicken pick up bone", req: null, pts: null },
      { name: "Run just south of the cabbage field and sit emote by the cabbage (near dogs)", desc: "Run just south of the cabbage field and sit emote by the cabbage (near dogs)", req: null, pts: null },
      { name: "Run west pick sweetcorn (drop)", desc: "Run west pick sweetcorn (drop)", req: null, pts: null },
      { name: "Give Molossus bones (north/northwest of sweetcorn)", desc: "Give Molossus bones (north/northwest of sweetcorn)", req: null, pts: null },
      { name: "Run west pick and eat 1 onion", desc: "Run west pick and eat 1 onion", req: null, pts: null },
      { name: "Run west pick 6 wheat (keep 1) (drop 5)", desc: "Run west pick 6 wheat (keep 1) (drop 5)", req: null, pts: null },
      { name: "Make flour in the windmill to the west (can drop flour)", desc: "Make flour in the windmill to the west (can drop flour)", req: null, pts: null },
      { name: "Run northwest to Ortus farm pick 6 potatos (drop)", desc: "Run northwest to Ortus farm pick 6 potatos (drop)", req: null, pts: null },
      { name: "Buy rake from Harminia (farming patch) rake flower patch", desc: "Buy rake from Harminia (farming patch) rake flower patch", req: null, pts: null },
      { name: "Run north milk Dairy Buffalo", desc: "Run north milk Dairy Buffalo", req: null, pts: null },
      { name: "Run west shear 1 alpaca", desc: "Run west shear 1 alpaca", req: null, pts: null },
      { name: "Run southeast to fairy ring", desc: "Run southeast to fairy ring", req: null, pts: null },
      { name: "Fairy ring to Zanaris", desc: "Fairy ring to Zanaris", req: null, pts: null },
      { name: "Kill cow pick up cowhide bury bones", desc: "Kill cow pick up cowhide bury bones", req: null, pts: null },
      { name: "Claim slayer task from Chaeldar", desc: "Claim slayer task from Chaeldar", req: null, pts: null },
      { name: "Fairy ring to Aldarin (CKQ)", desc: "Fairy ring to Aldarin (CKQ)", req: null, pts: null },
      { name: "Run south speak to Vineyard Foreman (near big wine vats) ask if he needs help", desc: "Run south speak to Vineyard Foreman (near big wine vats) ask if he needs help", req: null, pts: null },
      { name: "Search the grape vineyards for 4 shimmering grape vines (Vineyard helper Runelite plugin if you're struggling)", desc: "Search the grape vineyards for 4 shimmering grape vines (Vineyard helper Runelite plugin if you're struggling)", req: null, pts: null },
      { name: "Speak to Vineyard Foreman to turn in destroy grape barel", desc: "Speak to Vineyard Foreman to turn in destroy grape barel", req: null, pts: null },
      { name: "Run east to bank deposit all", desc: "Run east to bank deposit all", req: null, pts: null },
      { name: "Withdraw coins (need 25+ GP) chisel", desc: "Withdraw coins (need 25+ GP) chisel", req: null, pts: null },
      { name: "Buy chisel in General store to the north if you forgot to buy earlier", desc: "Buy chisel in General store to the north if you forgot to buy earlier", req: null, pts: null },
      { name: "Run to crafting shop (northeast of bank)", desc: "Run to crafting shop (northeast of bank)", req: null, pts: null },
      { name: "Money making: Buy uncut sapphires cut then sell (1 at a time is 7x GP 5 at a time is ~5x GP)", desc: "Money making: Buy uncut sapphires cut then sell (1 at a time is 7x GP 5 at a time is ~5x GP)", req: null, pts: null },
      { name: "Stay as long as you want upgrade to Emeralds and Rubies when possible. I plan to stay for ~50k gp and return -later at 8x rate", desc: "Stay as long as you want upgrade to Emeralds and Rubies when possible. I plan to stay for ~50k gp and return -later at 8x rate", req: null, pts: null },
      { name: "When done buy 3 Sapphires emeralds rubies for later. Run east to charters", desc: "When done buy 3 Sapphires emeralds rubies for later. Run east to charters", req: null, pts: null },
      { name: "Buy 5 raw rabbit tyras helm bucket tinderbox.", desc: "Buy 5 raw rabbit tyras helm bucket tinderbox.", req: null, pts: null },
      { name: "Cook rabbit at range southwest eat once you get a cooked. Buy more if you failed", desc: "Cook rabbit at range southwest eat once you get a cooked. Buy more if you failed", req: null, pts: null },
      { name: "Kill a seagull", desc: "Kill a seagull", req: null, pts: null },
      { name: "Travel at Antonia to Sunset Coast (Don't charter)", desc: "Travel at Antonia to Sunset Coast (Don't charter)", req: null, pts: null },
      { name: "Buy torch in General store Light torch and drop torch/tinderbox", desc: "Buy torch in General store Light torch and drop torch/tinderbox", req: null, pts: null },
      { name: "Fill bucket at sand pit (north) drop sand", desc: "Fill bucket at sand pit (north) drop sand", req: null, pts: null },
      { name: "Run to Fishing Shop (Southeast look at map)", desc: "Run to Fishing Shop (Southeast look at map)", req: null, pts: null },
      { name: "Buy 1000 feathers big net (we'll buy more later)", desc: "Buy 1000 feathers big net (we'll buy more later)", req: null, pts: null },
      { name: "Charter to Civitas Illa Fortis", desc: "Charter to Civitas Illa Fortis", req: null, pts: null },
      { name: "Buy 15 pineapples from charter bank them", desc: "Buy 15 pineapples from charter bank them", req: null, pts: null },
      { name: "Run south to pond (\"Park\" on map)", desc: "Run south to pond (\"Park\" on map)", req: null, pts: null },
      { name: "Fish until casket old boot and house key (Can skip house key and come back later 1/10 might take a while)", desc: "Fish until casket old boot and house key (Can skip house key and come back later 1/10 might take a while)", req: null, pts: null },
      { name: "Run northwest to bar", desc: "Run northwest to bar", req: null, pts: null },
      { name: "Buy 1 cup of tea 1 Moon-lite 1 stew 1 jug of wine.", desc: "Buy 1 cup of tea 1 Moon-lite 1 stew 1 jug of wine.", req: null, pts: null },
      { name: "Drink Moon-lite jug of wine", desc: "Drink Moon-lite jug of wine", req: null, pts: null },
      { name: "Run southwest buy POH", desc: "Run southwest buy POH", req: null, pts: null },
      { name: "Run southeast to mace shop buy steel mace", desc: "Run southeast to mace shop buy steel mace", req: null, pts: null },
      { name: "Run to Civitas Bazaar thieve from citizen 10 times without failing", desc: "Run to Civitas Bazaar thieve from citizen 10 times without failing", req: null, pts: null },
      { name: "Buy 1 silk from silk trader sell it back", desc: "Buy 1 silk from silk trader sell it back", req: null, pts: null },
      { name: "Run west near west bank. Give Oli a stew", desc: "Run west near west bank. Give Oli a stew", req: null, pts: null },
      { name: "Run to Quetzal (Renu) bird to Aubernvale (top left)", desc: "Run to Quetzal (Renu) bird to Aubernvale (top left)", req: null, pts: null },
      { name: "Drink cup of tea", desc: "Drink cup of tea", req: null, pts: null },
      { name: "Run south to bank deposit steel mace big net tyras helm bucket", desc: "Run south to bank deposit steel mace big net tyras helm bucket", req: null, pts: null },
      { name: "Withdraw axe knife cowhide wool", desc: "Withdraw axe knife cowhide wool", req: null, pts: null },
      { name: "Run south to staff shop buy Air and fire staff (equip)", desc: "Run south to staff shop buy Air and fire staff (equip)", req: null, pts: null },
      { name: "Run west to Axe shop buy Steel Mith and Adamant axe", desc: "Run west to Axe shop buy Steel Mith and Adamant axe", req: null, pts: null },
      { name: "Chop dead tree near river *EH toggle autobank on* (stay until 45 logs banked if endless harvest)", desc: "Chop dead tree near river *EH toggle autobank on* (stay until 45 logs banked if endless harvest)", req: null, pts: null },
      { name: "withdraw log from bank if EH", desc: "withdraw log from bank if EH", req: null, pts: null },
      { name: "Make 1 plank at sawmill", desc: "Make 1 plank at sawmill", req: null, pts: null },
      { name: "Run southwest tan cowhide into regular leather", desc: "Run southwest tan cowhide into regular leather", req: null, pts: null },
      { name: "Buy needle and thread in gen store", desc: "Buy needle and thread in gen store", req: null, pts: null },
      { name: "Craft leather chaps", desc: "Craft leather chaps", req: null, pts: null },
      { name: "Admire beautiful logs just outside of gen store (east)", desc: "Admire beautiful logs just outside of gen store (east)", req: null, pts: null },
      { name: "Step oin Ent trail (near maple trees to the south wait for Ent to walk by)", desc: "Step oin Ent trail (near maple trees to the south wait for Ent to walk by)", req: null, pts: null },
      { name: "Run south to nemus retreat", desc: "Run south to nemus retreat", req: null, pts: null },
      { name: "Claim Forestry kit from Forestry shop (southwest of nemus retreat near water)", desc: "Claim Forestry kit from Forestry shop (southwest of nemus retreat near water)", req: null, pts: null },
      { name: "Equip forestry kit to enable Forestry events while WCing (lot of forestry tasks)", desc: "Equip forestry kit to enable Forestry events while WCing (lot of forestry tasks)", req: null, pts: null },
      { name: "Pick 6 flax", desc: "Pick 6 flax", req: null, pts: null },
      { name: "Spin ball of wool 1 bowstring", desc: "Spin ball of wool 1 bowstring", req: null, pts: null },
      { name: "Endless Harvesters/woodsman can do the following others can skip for now if you want:", desc: "Endless Harvesters/woodsman can do the following others can skip for now if you want:", req: null, pts: null },
      { name: "Fletch headless arrows until 20 fletching.", desc: "Fletch headless arrows until 20 fletching.", req: null, pts: null },
      { name: "Chop oak to the south until 60 oak logs banked. Complete Burn 1 oak log Fletch 1 oak shortbow fletch 25 oak -stocks decorate oak totem (5 oaks)", desc: "Chop oak to the south until 60 oak logs banked. Complete Burn 1 oak log Fletch 1 oak shortbow fletch 25 oak -stocks decorate oak totem (5 oaks)", req: null, pts: null },
      { name: "Chop willows until 100 burn task then toggle Woodsman burn off and bank 56 willows: 1 willow shortbow 50 willow longbows fletched decorate willow totem (5 willows)", desc: "Chop willows until 100 burn task then toggle Woodsman burn off and bank 56 willows: 1 willow shortbow 50 willow longbows fletched decorate willow totem (5 willows)", req: null, pts: null },
      { name: "Finish 1000 arrow shafts with extra oaks or willows", desc: "Finish 1000 arrow shafts with extra oaks or willows", req: null, pts: null },
      { name: "Chop 50 Maple logs (burn 25 bank 25)", desc: "Chop 50 Maple logs (burn 25 bank 25)", req: null, pts: null },
      { name: "Fletch 25 Maple longbow (u)", desc: "Fletch 25 Maple longbow (u)", req: null, pts: null },
      { name: "Complete vale totem miniquest bring 5 oak logs 5 willow logs 5 maple logs", desc: "Complete vale totem miniquest bring 5 oak logs 5 willow logs 5 maple logs", req: null, pts: null },
      { name: "Deposit all withdraw coins axe 2 bird snares green cape steel mace", desc: "Deposit all withdraw coins axe 2 bird snares green cape steel mace", req: null, pts: null },
      { name: "Run south to Rowboat take boat to Tal Teklan", desc: "Run south to Rowboat take boat to Tal Teklan", req: null, pts: null },
      { name: "Run north to rune shop buy 5 of each elemental rune pack 5 mind rune pacts 5 cosmics 75 natures 1 chaos pack 1 death rune", desc: "Run north to rune shop buy 5 of each elemental rune pack 5 mind rune pacts 5 cosmics 75 natures 1 chaos pack 1 death rune", req: null, pts: null },
      { name: "Low alch anything for mage exp", desc: "Low alch anything for mage exp", req: null, pts: null },
      { name: "Run west buy purple dye. Dye cape purple", desc: "Run west buy purple dye. Dye cape purple", req: null, pts: null },
      { name: "Run west dance near Bards on the dock", desc: "Run west dance near Bards on the dock", req: null, pts: null },
      { name: "Run southeast to ranged shop buy 10 iron arrows shortbow", desc: "Run southeast to ranged shop buy 10 iron arrows shortbow", req: null, pts: null },
      { name: "Run to bank deposit 5 nature runes", desc: "Run to bank deposit 5 nature runes", req: null, pts: null },
      { name: "Run east out of Tal teklan kill frog near Doom dungeon shortcut (shoot 6+ iron arrows)", desc: "Run east out of Tal teklan kill frog near Doom dungeon shortcut (shoot 6+ iron arrows)", req: null, pts: null },
      { name: "Cut any regular tree", desc: "Cut any regular tree", req: null, pts: null },
      { name: "(Can skip the next step if not woodsman birds are painful non-woodsman tasks but you'll have to skip later puro tasks too if you don't do these now)", desc: "(Can skip the next step if not woodsman birds are painful non-woodsman tasks but you'll have to skip later puro tasks too if you don't do these now)", req: null, pts: null },
      { name: "Run north across bridge then east to Crimson Swifts", desc: "Run north across bridge then east to Crimson Swifts", req: null, pts: null },
      { name: "Catch 8 Crimson swifts (16 if not woodsman)", desc: "Catch 8 Crimson swifts (16 if not woodsman)", req: null, pts: null },
      { name: "Run west to bridge cross to the south then run southwest to Tropical Wagtails", desc: "Run west to bridge cross to the south then run southwest to Tropical Wagtails", req: null, pts: null },
      { name: "Catch 15 Tropical wagtails", desc: "Catch 15 Tropical wagtails", req: null, pts: null },
      { name: "Take rowboat near Tal Teklan to Kastori", desc: "Take rowboat near Tal Teklan to Kastori", req: null, pts: null },
      { name: "Run southwest to fishing shop", desc: "Run southwest to fishing shop", req: null, pts: null },
      { name: "Buy small net fishing rod fly fishing rod harpoon lobster pot 50 bait fill inv with raw sardines", desc: "Buy small net fishing rod fly fishing rod harpoon lobster pot 50 bait fill inv with raw sardines", req: null, pts: null },
      { name: "Cook sardines at range to the west (can buy more sardines if you didn't successfully cook 5)", desc: "Cook sardines at range to the west (can buy more sardines if you didn't successfully cook 5)", req: null, pts: null },
      { name: "Run southwest fish shrimp until 10+ fishing (EH toggle off auto bank until several raw shrimp in inv then back on catch at least 1 if already lv 10)", desc: "Run southwest fish shrimp until 10+ fishing (EH toggle off auto bank until several raw shrimp in inv then back on catch at least 1 if already lv 10)", req: null, pts: null },
      { name: "Bait fish for Herring until 15 (catch at least 1 if already lv 15)", desc: "Bait fish for Herring until 15 (catch at least 1 if already lv 15)", req: null, pts: null },
      { name: "Net fish until Anchovy (stay until 16 fishing)", desc: "Net fish until Anchovy (stay until 16 fishing)", req: null, pts: null },
      { name: "Run northeast cook shrimp", desc: "Run northeast cook shrimp", req: null, pts: null },
      { name: "Run northeast to Dungeon icon climb ladder", desc: "Run northeast to Dungeon icon climb ladder", req: null, pts: null },
      { name: "Kill imp with earth spell pick up ashes (save them)", desc: "Kill imp with earth spell pick up ashes (save them)", req: null, pts: null },
      { name: "Run north to Statue of Ates. Pet Caique (Bird on a rock)", desc: "Run north to Statue of Ates. Pet Caique (Bird on a rock)", req: null, pts: null },
      { name: "Run north observe the gemstone crab burrow. Get 20 attack on crab (steel mace) then train magic on defensive -until burrow (get at least 5 defence)", desc: "Run north observe the gemstone crab burrow. Get 20 attack on crab (steel mace) then train magic on defensive -until burrow (get at least 5 defence)", req: null, pts: null },
      { name: "Take closest rowboat to Gloomthorn", desc: "Take closest rowboat to Gloomthorn", req: null, pts: null },
      { name: "Run east to Mons Gratia kill icefiend (fire spells)", desc: "Run east to Mons Gratia kill icefiend (fire spells)", req: null, pts: null },
      { name: "Run southeast to Quetzacalli gorge kill 5 rabbits with mace bury bones", desc: "Run southeast to Quetzacalli gorge kill 5 rabbits with mace bury bones", req: null, pts: null },
      { name: "Home teleport to Yama's lair bury ashes", desc: "Home teleport to Yama's lair bury ashes", req: null, pts: null },
      { name: "Hop 666 hoppy stones", desc: "Hop 666 hoppy stones", req: null, pts: null },
      { name: "Return to Civitas illa Fortis", desc: "Return to Civitas illa Fortis", req: null, pts: null },
      { name: "Quetzal to Aldarin run North to bank. Equip tyras helm", desc: "Quetzal to Aldarin run North to bank. Equip tyras helm", req: null, pts: null },
      { name: "Deposit all withdaw coins chisel", desc: "Deposit all withdaw coins chisel", req: null, pts: null },
      { name: "Run north to POH portal enter build mode", desc: "Run north to POH portal enter build mode", req: null, pts: null },
      { name: "Build cheapest room", desc: "Build cheapest room", req: null, pts: null },
      { name: "Cut rubies at Gem shop. Goal: 70 crafting (Can leave at 60 but extra gp buys you runes in a few steps) (~400k gp profit)", desc: "Cut rubies at Gem shop. Goal: 70 crafting (Can leave at 60 but extra gp buys you runes in a few steps) (~400k gp profit)", req: null, pts: null },
      { name: "Take boat to Sunset coast", desc: "Take boat to Sunset coast", req: null, pts: null },
      { name: "Run north to helmet shop buy bronze and addy full helms.", desc: "Run north to helmet shop buy bronze and addy full helms.", req: null, pts: null },
      { name: "Run southeast to fishing shop", desc: "Run southeast to fishing shop", req: null, pts: null },
      { name: "Buy raw fish to complete cooking tasks: 50 tuna 100 swordfish", desc: "Buy raw fish to complete cooking tasks: 50 tuna 100 swordfish", req: null, pts: null },
      { name: "Run north to Cam Torum", desc: "Run north to Cam Torum", req: null, pts: null },
      { name: "Buy 1 vial of water pack pestle and mortar 1 eye of newt pack at herb shop", desc: "Buy 1 vial of water pack pestle and mortar 1 eye of newt pack at herb shop", req: null, pts: null },
      { name: "Buy Steel mith adamant rune pickaxe from mining shop (buy steel/rune if barbarian probably need to equip for task - no idea how this will work)", desc: "Buy Steel mith adamant rune pickaxe from mining shop (buy steel/rune if barbarian probably need to equip for task - no idea how this will work)", req: null, pts: null },
      { name: "Get haircut in building to the east. There's no Pink Skirt type thing hidden in this guide instead model yourself after Faux (Samurai Maroon color haircut)", desc: "Get haircut in building to the east. There's no Pink Skirt type thing hidden in this guide instead model yourself after Faux (Samurai Maroon color haircut)", req: null, pts: null },
      { name: "Trim beard (clean shaven)", desc: "Trim beard (clean shaven)", req: null, pts: null },
      { name: "Run to rune shop buy 50 law runes 500 natures 100 death runes (more if you made extra money from crafting) extra elemental runes if needed", desc: "Run to rune shop buy 50 law runes 500 natures 100 death runes (more if you made extra money from crafting) extra elemental runes if needed", req: null, pts: null },
      { name: "Low alch runes or junk while completing tasks for mage xp", desc: "Low alch runes or junk while completing tasks for mage xp", req: null, pts: null },
      { name: "Run east to bank deposit herblore supplies (keep an offensive mage spells keep bronze steel mith addy rune pickaxe)", desc: "Run east to bank deposit herblore supplies (keep an offensive mage spells keep bronze steel mith addy rune pickaxe)", req: null, pts: null },
      { name: "Withdraw big net", desc: "Withdraw big net", req: null, pts: null },
      { name: "Run to pub buy 5 Jug of wine", desc: "Run to pub buy 5 Jug of wine", req: null, pts: null },
      { name: "League menu tele to Varlamore", desc: "League menu tele to Varlamore", req: null, pts: null },
      { name: "Run west to blacksmith buy addy platebody/legs bronze platebody/legs mithril spear steel platebody iron dagger", desc: "Run west to blacksmith buy addy platebody/legs bronze platebody/legs mithril spear steel platebody iron dagger", req: null, pts: null },
      { name: "Equip steel platebody full bronze iron dagger mith spear.", desc: "Equip steel platebody full bronze iron dagger mith spear.", req: null, pts: null },
      { name: "Low alch steel platebody", desc: "Low alch steel platebody", req: null, pts: null },
      { name: "Run south to bank deposit addy bronze steel platebody iron dagger. Withdraw 15 pineapples bucket chaos runes -(Wind Bolt is fine) big net (fill rest of inventory with jugs of wine may only be ~3). Equip mith spear and keep it with you.", desc: "Run south to bank deposit addy bronze steel platebody iron dagger. Withdraw 15 pineapples bucket chaos runes -(Wind Bolt is fine) big net (fill rest of inventory with jugs of wine may only be ~3). Equip mith spear and keep it with you.", req: null, pts: null },
      { name: "Run northwest to nearby dungeon icon go downstairs and kill Guard", desc: "Run northwest to nearby dungeon icon go downstairs and kill Guard", req: null, pts: null },
      { name: "Go upstairs run to western Civitas wall then north to other dungeon icon", desc: "Go upstairs run to western Civitas wall then north to other dungeon icon", req: null, pts: null },
      { name: "Go down ladder run northwest up ladder", desc: "Go down ladder run northwest up ladder", req: null, pts: null },
      { name: "Kill thief", desc: "Kill thief", req: null, pts: null },
      { name: "Run south milk buffalo", desc: "Run south milk buffalo", req: null, pts: null },
      { name: "Run south kill buffalo", desc: "Run south kill buffalo", req: null, pts: null },
      { name: "Go into house east of allotments churn butter", desc: "Go into house east of allotments churn butter", req: null, pts: null },
      { name: "Pick up potato to the southwest bake in previous house add butter", desc: "Pick up potato to the southwest bake in previous house add butter", req: null, pts: null },
      { name: "Put 15 pineapples in compost bin close lid", desc: "Put 15 pineapples in compost bin close lid", req: null, pts: null },
      { name: "Pickpocket farmer until 3 potato seeds", desc: "Pickpocket farmer until 3 potato seeds", req: null, pts: null },
      { name: "Buy rake from Harminia", desc: "Buy rake from Harminia", req: null, pts: null },
      { name: "rake allotment patch plant potatoes buy 2 compost from farmer protect potato patch", desc: "rake allotment patch plant potatoes buy 2 compost from farmer protect potato patch", req: null, pts: null },
      { name: "Run west safespot dire wolf over plants", desc: "Run west safespot dire wolf over plants", req: null, pts: null },
      { name: "Run southwest kill scorpion with mith spear", desc: "Run southwest kill scorpion with mith spear", req: null, pts: null },
      { name: "Mine 6+ tin ore 1+ copper ore (stay until 15 mining)", desc: "Mine 6+ tin ore 1+ copper ore (stay until 15 mining)", req: null, pts: null },
      { name: "Run southeast to Jaguars (east of Sunset coast) defeat without taking damage", desc: "Run southeast to Jaguars (east of Sunset coast) defeat without taking damage", req: null, pts: null },
      { name: "Run southeast kill a hill giant (Demonic pact point)", desc: "Run southeast kill a hill giant (Demonic pact point)", req: null, pts: null },
      { name: "Run far east to Stonecutter outpost", desc: "Run far east to Stonecutter outpost", req: null, pts: null },
      { name: "Mine 1 clay 50 iron 20 silver 2 coal 3 gold 50 mithril ore. Mine extra iron to get to level 55 for mithril", desc: "Mine 1 clay 50 iron 20 silver 2 coal 3 gold 50 mithril ore. Mine extra iron to get to level 55 for mithril", req: null, pts: null },
      { name: "Run east to coast big net fish for 20 Mackerel 10 Cod", desc: "Run east to coast big net fish for 20 Mackerel 10 Cod", req: null, pts: null },
      { name: "Run northwest to Oryx (northwest of hunter icon). Kill with melee (melee probably only needs to be killing blow -try maging until last hit to speed it up)", desc: "Run northwest to Oryx (northwest of hunter icon). Kill with melee (melee probably only needs to be killing blow -try maging until last hit to speed it up)", req: null, pts: null },
      { name: "Run north to Civitas crafting shop buy tiara mould ring mould amulet mould.", desc: "Run north to Civitas crafting shop buy tiara mould ring mould amulet mould.", req: null, pts: null },
      { name: "Go upstairs check for soft clay (1 min respawn on table). Take if there otherwise can take bucket of water and withdraw clay from bank.", desc: "Go upstairs check for soft clay (1 min respawn on table). Take if there otherwise can take bucket of water and withdraw clay from bank.", req: null, pts: null },
      { name: "Go downstairs make anything on potters wheel then fire at pottery oven", desc: "Go downstairs make anything on potters wheel then fire at pottery oven", req: null, pts: null },
      { name: "Withdraw 150 arrow shafts 150 feathers. make 150 headless arrows (unless you made earlier)", desc: "Withdraw 150 arrow shafts 150 feathers. make 150 headless arrows (unless you made earlier)", req: null, pts: null },
      { name: "Make at the furnace to the north: 1 Bronze bar 15 Iron bars", desc: "Make at the furnace to the north: 1 Bronze bar 15 Iron bars", req: null, pts: null },
      { name: "Run northwest to anvil smith 150 iron arrowtips", desc: "Run northwest to anvil smith 150 iron arrowtips", req: null, pts: null },
      { name: "Run back to furnace make 150 iron arrows on the way", desc: "Run back to furnace make 150 iron arrows on the way", req: null, pts: null },
      { name: "Smelt 20 silver bars make 20 silver tiaras", desc: "Smelt 20 silver bars make 20 silver tiaras", req: null, pts: null },
      { name: "Deposit all withdraw coins dramen staff jugs of wine. Buy extra wine at bar for thieving training", desc: "Deposit all withdraw coins dramen staff jugs of wine. Buy extra wine at bar for thieving training", req: null, pts: null },
      { name: "Pickpocket Farmer south of varlamore to 36 thieving", desc: "Pickpocket Farmer south of varlamore to 36 thieving", req: null, pts: null },
      { name: "Run southwest to fairy ring tele to Zanaris", desc: "Run southwest to fairy ring tele to Zanaris", req: null, pts: null },
      { name: "Buy Slayer staff (for Death's coffers task) anti dragon shield. Wear shield.", desc: "Buy Slayer staff (for Death's coffers task) anti dragon shield. Wear shield.", req: null, pts: null },
      { name: "Enter Puro Puro in wheat field (skip if you didn't get 17+ hunter earlier come back whenever you feel like it's not a quick task if you're not woodsman)", desc: "Enter Puro Puro in wheat field (skip if you didn't get 17+ hunter earlier come back whenever you feel like it's not a quick task if you're not woodsman)", req: null, pts: null },
      { name: "Claim butterfly net from Elnock Inquisitor (can drop jugs of wine)", desc: "Claim butterfly net from Elnock Inquisitor (can drop jugs of wine)", req: null, pts: null },
      { name: "Catch 50 implings in puro puro (spawn camp 1 baby or young impling spawn)", desc: "Catch 50 implings in puro puro (spawn camp 1 baby or young impling spawn)", req: null, pts: null },
      { name: "Teleport to Aldarin (CKQ)", desc: "Teleport to Aldarin (CKQ)", req: null, pts: null },
      { name: "Run to Ruby harvests to the west catch 1", desc: "Run to Ruby harvests to the west catch 1", req: null, pts: null },
      { name: "Go upstairs in house northeast of ruby harvests", desc: "Go upstairs in house northeast of ruby harvests", req: null, pts: null },
      { name: "ockpick chests until 2 gold bars and 40+ thieving. Run southwest to house if teleported outside. Keep uncut diamonds gold bars blessed bone shards desirable seeds. Can drop anything else.", desc: "ockpick chests until 2 gold bars and 40+ thieving. Run southwest to house if teleported outside. Keep uncut diamonds gold bars blessed bone shards desirable seeds. Can drop anything else.", req: null, pts: null },
      { name: "After 40 thieving/2 gold bars league menu tele to Varlamore", desc: "After 40 thieving/2 gold bars league menu tele to Varlamore", req: null, pts: null },
      { name: "Run southeast to bank withdraw amulet mould ring mould cut sapphire cut emerald.", desc: "Run southeast to bank withdraw amulet mould ring mould cut sapphire cut emerald.", req: null, pts: null },
      { name: "Make Sapphire amulet emerald ring at furnace", desc: "Make Sapphire amulet emerald ring at furnace", req: null, pts: null },
      { name: "Pickpocket Guards until 28 coin pouches (don't open until you get all)", desc: "Pickpocket Guards until 28 coin pouches (don't open until you get all)", req: null, pts: null },
      { name: "Open 28 coin pouches at once", desc: "Open 28 coin pouches at once", req: null, pts: null },
      { name: "Run to southern varlamore gate", desc: "Run to southern varlamore gate", req: null, pts: null },
      { name: "Pickpocket master farmer south of Varlamore", desc: "Pickpocket master farmer south of Varlamore", req: null, pts: null },
      { name: "Run east defeat 3 chickens in 6 seconds (melee). Don't miss ticks. You can mage the 3rd for a better chance at a high hit if you're low str. You can cheese this by getting several to low hp and running away then engaging when all 3 are prepped.", desc: "Run east defeat 3 chickens in 6 seconds (melee). Don't miss ticks. You can mage the 3rd for a better chance at a high hit if you're low str. You can cheese this by getting several to low hp and running away then engaging when all 3 are prepped.", req: null, pts: null },
      { name: "f you have the first magic pact you can boost your level for the following 2 tasks by casting combat spells on any npcs. If you weren't planning on going magic early DO NOT TAKE THIS PACT JUST FOR THIS PERK. You only get 3 pact tree resets and you need to kill your first Echo boss to earn your first reset. Be smart about what you choose.", desc: "f you have the first magic pact you can boost your level for the following 2 tasks by casting combat spells on any npcs. If you weren't planning on going magic early DO NOT TAKE THIS PACT JUST FOR THIS PERK. You only get 3 pact tree resets and you need to kill your first Echo boss to earn your first reset. Be smart about what you choose.", req: null, pts: null },
      { name: "Run to bank withdraw death rune cast earth blast if 53 magic", desc: "Run to bank withdraw death rune cast earth blast if 53 magic", req: null, pts: null },
      { name: "Cast Civitas tele if 54 magic", desc: "Cast Civitas tele if 54 magic", req: null, pts: null },
      { name: "Unlock Karamja if you haven't already", desc: "Unlock Karamja if you haven't already", req: null, pts: null },
      { name: "Open league menu teleport to Karamja", desc: "Open league menu teleport to Karamja", req: null, pts: null },
      { name: "Run to brimhaven agil arena. Complete 10 tickets", desc: "Run to brimhaven agil arena. Complete 10 tickets", req: null, pts: null },
      { name: "Leave arena buy snapdragon from Jackie", desc: "Leave arena buy snapdragon from Jackie", req: null, pts: null },
      { name: "Run to Karamja volcano go to Tzhaar area", desc: "Run to Karamja volcano go to Tzhaar area", req: null, pts: null },
      { name: "Safespot any Tzhaar (water spells)", desc: "Safespot any Tzhaar (water spells)", req: null, pts: null },
      { name: "Go upstairs run to musa point", desc: "Go upstairs run to musa point", req: null, pts: null },
      { name: "Pick 10 bananas", desc: "Pick 10 bananas", req: null, pts: null },
      { name: "Ask luthas for a job", desc: "Ask luthas for a job", req: null, pts: null },
      { name: "Fill crate with bananas", desc: "Fill crate with bananas", req: null, pts: null },
      { name: "League menu tele to Karamja or charter back to brimhaven", desc: "League menu tele to Karamja or charter back to brimhaven", req: null, pts: null },
      { name: "Take cart to shilo", desc: "Take cart to shilo", req: null, pts: null },
      { name: "Run north across bridge go upstairs to the east", desc: "Run north across bridge go upstairs to the east", req: null, pts: null },
      { name: "Pay barkeep to sleep in Paramaya inn (may need to go upstairs to trigger task)", desc: "Pay barkeep to sleep in Paramaya inn (may need to go upstairs to trigger task)", req: null, pts: null },
      { name: "Take shortcut across river", desc: "Take shortcut across river", req: null, pts: null },
      { name: "Withdraw fly fishing rod feathers", desc: "Withdraw fly fishing rod feathers", req: null, pts: null },
      { name: "Fish 75 trout 1+ salmon", desc: "Fish 75 trout 1+ salmon", req: null, pts: null },
      { name: "Withdraw food axe small net coins slayer staff", desc: "Withdraw food axe small net coins slayer staff", req: null, pts: null },
      { name: "Take cart to brimhaven", desc: "Take cart to brimhaven", req: null, pts: null },
      { name: "Kill snake near Fruit tree patch", desc: "Kill snake near Fruit tree patch", req: null, pts: null },
      { name: "Run south to brimhaven dungeon", desc: "Run south to brimhaven dungeon", req: null, pts: null },
      { name: "Enter brimhaven dungeon", desc: "Enter brimhaven dungeon", req: null, pts: null },
      { name: "Kill black demon in Brimhaven dungeon (safespot)", desc: "Kill black demon in Brimhaven dungeon (safespot)", req: null, pts: null },
      { name: "Karamja tele on league menu", desc: "Karamja tele on league menu", req: null, pts: null },
      { name: "Run south to Tai bwo wannai", desc: "Run south to Tai bwo wannai", req: null, pts: null },
      { name: "Buy machete from General store", desc: "Buy machete from General store", req: null, pts: null },
      { name: "Speak to Murcaily to begin tai bwo wannai cleanup (near hardwood grove)", desc: "Speak to Murcaily to begin tai bwo wannai cleanup (near hardwood grove)", req: null, pts: null },
      { name: "Cut dense jungle until fully depleted", desc: "Cut dense jungle until fully depleted", req: null, pts: null },
      { name: "Run south catch a karambwanji", desc: "Run south catch a karambwanji", req: null, pts: null },
      { name: "Teleport to Varlamore with the league menu", desc: "Teleport to Varlamore with the league menu", req: null, pts: null },
      { name: "Run west to death's office sacrifice Slayer staff to death", desc: "Run west to death's office sacrifice Slayer staff to death", req: null, pts: null },
      { name: "Buy buckets at general store fill up supercompost at farming patch to the west", desc: "Buy buckets at general store fill up supercompost at farming patch to the west", req: null, pts: null }
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
      <button class="export-phase-btn" title="Export phase as JSON">↓ Export</button>
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

function exportPhaseJSON(phaseId) {
  const phase = PHASES.find(p => p.id === phaseId);
  if (!phase) return;
  const data = { id: phase.id, num: phase.num, title: phase.title, tag: phase.tag, tasks: phase.tasks };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  const safeName = phase.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  a.download = 'phase-' + safeName + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
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
