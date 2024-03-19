const mapsNames = new Map([
	["Academy Map", {
		"name": "Academy Map",
		"nameShort": "my",
	}],
	["Acid Caverns Map", {
		"name": "Acid Caverns Map",
		"nameShort": "rn",
	}],
	["Acton's Nightmare", {
		"name": "Acton's Nightmare",
		"nameShort": "tm",
	}],
	["Altered Distant Memory", {
		"name": "Altered Distant Memory",
		"nameShort": "red",
	}],
	["Alleyways Map", {
		"name": "Alleyways Map",
		"nameShort": "yw",
	}],
	["Ancient City Map", {
		"name": "Ancient City Map",
		"nameShort": "t c",
	}],
	["Arachnid Nest Map", {
		"name": "Arachnid Nest Map",
		"nameShort": "d n",
	}],
	["Arachnid Tomb Map", {
		"name": "Arachnid Tomb Map",
		"nameShort": "b m",
	}],
	["Arcade Map", {
		"name": "Arcade Map",
		"nameShort": "rcad",
	}],
	["Arena Map", {
		"name": "Arena Map",
		"nameShort": "ren",
	}],
	["Arid Lake Map", {
		"name": "Arid Lake Map",
		"nameShort": "d l",
	}],
	["Armoury Map", {
		"name": "Armoury Map",
		"nameShort": "ury",
	}],
	["Arsenal Map", {
		"name": "Arsenal Map",
		"nameShort": "sen",
	}],
	["Ashen Wood Map", {
		"name": "Ashen Wood Map",
		"nameShort": "hen",
	}],
	["Atoll Map", {
		"name": "Atoll Map",
		"nameShort": "tol",
	}],
	["Augmented Distant Memory", {
		"name": "Augmented Distant Memory",
		"nameShort": "gm",
	}],
	["Barrows Map", {
		"name": "Barrows Map",
		"nameShort": "ws",
	}],
	["Basilica Map", {
		"name": "Basilica Map",
		"nameShort": "asi",
	}],
	["Bazaar Map", {
		"name": "Bazaar Map",
		"nameShort": "aar",
	}],
	["Beach Map", {
		"name": "Beach Map",
		"nameShort": "ch m",
	}],
	["Belfry Map", {
		"name": "Belfry Map",
		"nameShort": "fry",
	}],
	["Bog Map", {
		"name": "Bog Map",
		"nameShort": "og",
	}],
	["Bone Crypt Map", {
		"name": "Bone Crypt Map",
		"nameShort": "one",
	}],
	["Bramble Valley Map", {
		"name": "Bramble Valley Map",
		"nameShort": "br",
	}],
	["Burial Chambers Map", {
		"name": "Burial Chambers Map",
		"nameShort": "bu",
	}],
	["Caer Blaidd, Wolfpack's Den", {
		"name": "Caer Blaidd, Wolfpack's Den",
		"nameShort": "k'",
	}],
	["Cage Map", {
		"name": "Cage Map",
		"nameShort": "age",
	}],
	["Caldera Map", {
		"name": "Caldera Map",
		"nameShort": "ald",
	}],
	["Canyon Map", {
		"name": "Canyon Map",
		"nameShort": "yo",
	}],
	["Carcass Map", {
		"name": "Carcass Map",
		"nameShort": "ass",
	}],
	["Castle Ruins Map", {
		"name": "Castle Ruins Map",
		"nameShort": "tl",
	}],
	["Cells Map", {
		"name": "Cells Map",
		"nameShort": "lls",
	}],
	["Cemetery Map", {
		"name": "Cemetery Map",
		"nameShort": "ery",
	}],
	["Channel Map", {
		"name": "Channel Map",
		"nameShort": "nel",
	}],
	["Chateau Map", {
		"name": "Chateau Map",
		"nameShort": "hat",
	}],
	["City Square Map", {
		"name": "City Square Map",
		"nameShort": "y sq",
	}],
	["Cold River Map", {
		"name": "Cold River Map",
		"nameShort": "old",
	}],
	["Colonnade Map", {
		"name": "Colonnade Map",
		"nameShort": "nna",
	}],
	["Colosseum Map", {
		"name": "Colosseum Map",
		"nameShort": "sse",
	}],
	["Conservatory Map", {
		"name": "Conservatory Map",
		"nameShort": "rv",
	}],
	["Coral Ruins Map", {
		"name": "Coral Ruins Map",
		"nameShort": "l r",
	}],
	["Core Map", {
		"name": "Core Map",
		"nameShort": "core",
	}],
	["Cortex", {
		"name": "Cortex",
		"nameShort": "undefined",
	}],
	["Courthouse Map", {
		"name": "Courthouse Map",
		"nameShort": "rth",
	}],
	["Courtyard Map", {
		"name": "Courtyard Map",
		"nameShort": "tya",
	}],
	["Coves Map", {
		"name": "Coves Map",
		"nameShort": "ves",
	}],
	["Crater Map", {
		"name": "Crater Map",
		"nameShort": "cra",
	}],
	["Crimson Temple Map", {
		"name": "Crimson Temple Map",
		"nameShort": "undefined",
	}],
	["Crimson Township Map", {
		"name": "Crimson Township Map",
		"nameShort": "p m",
	}],
	["Crystal Ore Map", {
		"name": "Crystal Ore Map",
		"nameShort": "tal",
	}],
	["Cursed Crypt Map", {
		"name": "Cursed Crypt Map",
		"nameShort": "cry",
	}],
	["Dark Forest Map", {
		"name": "Dark Forest Map",
		"nameShort": "da",
	}],
	["Death and Taxes", {
		"name": "Death and Taxes",
		"nameShort": "xe",
	}],
	["Defiled Cathedral Map", {
		"name": "Defiled Cathedral Map",
		"nameShort": "edr",
	}],
	["Desert Map", {
		"name": "Desert Map",
		"nameShort": "ert m",
	}],
	["Desert Spring Map", {
		"name": "Desert Spring Map",
		"nameShort": "spr",
	}],
	["Dig Map", {
		"name": "Dig Map",
		"nameShort": "dig",
	}],
	["Doryani's Machinarium", {
		"name": "Doryani's Machinarium",
		"nameShort": "i'",
	}],
	["Dry Sea Map", {
		"name": "Dry Sea Map",
		"nameShort": "y se",
	}],
	["Dunes Map", {
		"name": "Dunes Map",
		"nameShort": "une",
	}],
	["Dungeon Map", {
		"name": "Dungeon Map",
		"nameShort": "eon",
	}],
	["Estuary Map", {
		"name": "Estuary Map",
		"nameShort": "ary",
	}],
	["Excavation Map", {
		"name": "Excavation Map",
		"nameShort": "xc",
	}],
	["Factory Map", {
		"name": "Factory Map",
		"nameShort": "fa",
	}],
	["Fields Map", {
		"name": "Fields Map",
		"nameShort": "lds",
	}],
	["Flooded Mine Map", {
		"name": "Flooded Mine Map",
		"nameShort": "fl",
	}],
	["Forbidden Woods Map", {
		"name": "Forbidden Woods Map",
		"nameShort": "wo",
	}],
	["Forge of the Phoenix Map", {
		"name": "Forge of the Phoenix Map",
		"nameShort": "rge",
	}],
	["Forking River Map", {
		"name": "Forking River Map",
		"nameShort": "ki",
	}],
	["Foundry Map", {
		"name": "Foundry Map",
		"nameShort": "ndr",
	}],
	["Frozen Cabins Map", {
		"name": "Frozen Cabins Map",
		"nameShort": "oz",
	}],
	["Fungal Hollow Map", {
		"name": "Fungal Hollow Map",
		"nameShort": "w m",
	}],
	["Gardens Map", {
		"name": "Gardens Map",
		"nameShort": "rde",
	}],
	["Geode Map", {
		"name": "Geode Map",
		"nameShort": "eod",
	}],
	["Ghetto Map", {
		"name": "Ghetto Map",
		"nameShort": "ett",
	}],
	["Glacier Map", {
		"name": "Glacier Map",
		"nameShort": "gla",
	}],
	["Grave Trough Map", {
		"name": "Grave Trough Map",
		"nameShort": "ugh",
	}],
	["Graveyard Map", {
		"name": "Graveyard Map",
		"nameShort": "eya",
	}],
	["Grotto Map", {
		"name": "Grotto Map",
		"nameShort": "ott",
	}],
	["Hall of Grandmasters", {
		"name": "Hall of Grandmasters",
		"nameShort": "dm",
	}],
	["Hallowed Ground", {
		"name": "Hallowed Ground",
		"nameShort": "wed",
	}],
	["Haunted Mansion Map", {
		"name": "Haunted Mansion Map",
		"nameShort": "sio",
	}],
	["Iceberg Map", {
		"name": "Iceberg Map",
		"nameShort": "eb",
	}],
	["Infested Valley Map", {
		"name": "Infested Valley Map",
		"nameShort": "fe",
	}],
	["Infused Beachhead", {
		"name": "Infused Beachhead",
		"nameShort": "d b",
	}],
	["Ivory Temple Map", {
		"name": "Ivory Temple Map",
		"nameShort": "y t",
	}],
	["Jungle Valley Map", {
		"name": "Jungle Valley Map",
		"nameShort": "ju",
	}],
	["Laboratory Map", {
		"name": "Laboratory Map",
		"nameShort": "bo",
	}],
	["Lair Map", {
		"name": "Lair Map",
		"nameShort": "undefined",
	}],
	["Lair of the Hydra Map", {
		"name": "Lair of the Hydra Map",
		"nameShort": "e h",
	}],
	["Lava Chamber Map", {
		"name": "Lava Chamber Map",
		"nameShort": "a ch",
	}],
	["Lava Lake Map", {
		"name": "Lava Lake Map",
		"nameShort": "a l",
	}],
	["Leyline Map", {
		"name": "Leyline Map",
		"nameShort": "lin",
	}],
	["Lighthouse Map", {
		"name": "Lighthouse Map",
		"nameShort": "hth",
	}],
	["Lookout Map", {
		"name": "Lookout Map",
		"nameShort": "ko",
	}],
	["Maelstr�m of Chaos", {
		"name": "Maelstr�m of Chaos",
		"nameShort": "�m",
	}],
	["Malformation Map", {
		"name": "Malformation Map",
		"nameShort": "lf",
	}],
	["Mao Kun", {
		"name": "Mao Kun",
		"nameShort": "ku",
	}],
	["Marshes Map", {
		"name": "Marshes Map",
		"nameShort": "hes",
	}],
	["Mausoleum Map", {
		"name": "Mausoleum Map",
		"nameShort": "leu",
	}],
	["Maze Map", {
		"name": "Maze Map",
		"nameShort": "ze m",
	}],
	["Maze of the Minotaur Map", {
		"name": "Maze of the Minotaur Map",
		"nameShort": "ur m",
	}],
	["Mesa Map", {
		"name": "Mesa Map",
		"nameShort": "esa",
	}],
	["Mineral Pools Map", {
		"name": "Mineral Pools Map",
		"nameShort": "ls",
	}],
	["Moon Temple Map", {
		"name": "Moon Temple Map",
		"nameShort": "n t",
	}],
	["Mud Geyser Map", {
		"name": "Mud Geyser Map",
		"nameShort": "ey",
	}],
	["Museum Map", {
		"name": "Museum Map",
		"nameShort": "eu",
	}],
	["Necropolis Map", {
		"name": "Necropolis Map",
		"nameShort": "lis",
	}],
	["Oba's Cursed Trove", {
		"name": "Oba's Cursed Trove",
		"nameShort": "a'",
	}],
	["Olmec's Sanctum", {
		"name": "Olmec's Sanctum",
		"nameShort": "c'",
	}],
	["Orchard Map", {
		"name": "Orchard Map",
		"nameShort": "hard",
	}],
	["Overgrown Ruin Map", {
		"name": "Overgrown Ruin Map",
		"nameShort": "ui",
	}],
	["Overgrown Shrine Map", {
		"name": "Overgrown Shrine Map",
		"nameShort": "wn",
	}],
	["Palace Map", {
		"name": "Palace Map",
		"nameShort": "ala",
	}],
	["Park Map", {
		"name": "Park Map",
		"nameShort": "rk",
	}],
	["Pen Map", {
		"name": "Pen Map",
		"nameShort": "en m",
	}],
	["Peninsula Map", {
		"name": "Peninsula Map",
		"nameShort": "ula",
	}],
	["Phantasmagoria Map", {
		"name": "Phantasmagoria Map",
		"nameShort": "go",
	}],
	["Pier Map", {
		"name": "Pier Map",
		"nameShort": "pie",
	}],
	["Pillars of Arun", {
		"name": "Pillars of Arun",
		"nameShort": "undefined",
	}],
	["Pit Map", {
		"name": "Pit Map",
		"nameShort": "pit m",
	}],
	["Pit of the Chimera Map", {
		"name": "Pit of the Chimera Map",
		"nameShort": "ra m",
	}],
	["Plateau Map", {
		"name": "Plateau Map",
		"nameShort": "lat",
	}],
	["Plaza Map", {
		"name": "Plaza Map",
		"nameShort": "laz",
	}],
	["Poorjoy's Asylum", {
		"name": "Poorjoy's Asylum",
		"nameShort": "undefined",
	}],
	["Port Map", {
		"name": "Port Map",
		"nameShort": "por",
	}],
	["Precinct Map", {
		"name": "Precinct Map",
		"nameShort": "cin",
	}],
	["Primordial Blocks Map", {
		"name": "Primordial Blocks Map",
		"nameShort": "ks",
	}],
	["Primordial Pool Map", {
		"name": "Primordial Pool Map",
		"nameShort": "pri",
	}],
	["Promenade Map", {
		"name": "Promenade Map",
		"nameShort": "pr",
	}],
	["Racecourse Map", {
		"name": "Racecourse Map",
		"nameShort": "urs",
	}],
	["Ramparts Map", {
		"name": "Ramparts Map",
		"nameShort": "rts",
	}],
	["Reef Map", {
		"name": "Reef Map",
		"nameShort": "ee",
	}],
	["Relic Chambers Map", {
		"name": "Relic Chambers Map",
		"nameShort": "mb",
	}],
	["Replica Cortex", {
		"name": "Replica Cortex",
		"nameShort": "ex",
	}],
	["Replica Pillars of Arun", {
		"name": "Replica Pillars of Arun",
		"nameShort": "a pi",
	}],
	["Replica Poorjoy's Asylum", {
		"name": "Replica Poorjoy's Asylum",
		"nameShort": "yl",
	}],
	["Residence Map", {
		"name": "Residence Map",
		"nameShort": "enc",
	}],
	["Rewritten Distant Memory", {
		"name": "Rewritten Distant Memory",
		"nameShort": "tt",
	}],
	["Scriptorium Map", {
		"name": "Scriptorium Map",
		"nameShort": "pt",
	}],
	["Sepulchre Map", {
		"name": "Sepulchre Map",
		"nameShort": "hre",
	}],
	["Shipyard Map", {
		"name": "Shipyard Map",
		"nameShort": "ip",
	}],
	["Shore Map", {
		"name": "Shore Map",
		"nameShort": "hor",
	}],
	["Shrine Map", {
		"name": "Shrine Map",
		"nameShort": "hr",
	}],
	["Siege Map", {
		"name": "Siege Map",
		"nameShort": "eg",
	}],
	["Silo Map", {
		"name": "Silo Map",
		"nameShort": "ilo",
	}],
	["Spider Forest Map", {
		"name": "Spider Forest Map",
		"nameShort": "fo",
	}],
	["Spider Lair Map", {
		"name": "Spider Lair Map",
		"nameShort": "sp",
	}],
	["Stagnation Map", {
		"name": "Stagnation Map",
		"nameShort": "gn",
	}],
	["Strand Map", {
		"name": "Strand Map",
		"nameShort": "tran",
	}],
	["Sulphur Vents Map", {
		"name": "Sulphur Vents Map",
		"nameShort": "lp",
	}],
	["Summit Map", {
		"name": "Summit Map",
		"nameShort": "mm",
	}],
	["Sunken City Map", {
		"name": "Sunken City Map",
		"nameShort": "cit",
	}],
	["Temple Map", {
		"name": "Temple Map",
		"nameShort": "undefined",
	}],
	["Terrace Map", {
		"name": "Terrace Map",
		"nameShort": "ace",
	}],
	["The Beachhead", {
		"name": "The Beachhead",
		"nameShort": "eac",
	}],
	["The Coward's Trial", {
		"name": "The Coward's Trial",
		"nameShort": "d'",
	}],
	["The Putrid Cloister", {
		"name": "The Putrid Cloister",
		"nameShort": "oi",
	}],
	["The Twilight Temple", {
		"name": "The Twilight Temple",
		"nameShort": "ht",
	}],
	["The Vinktar Square", {
		"name": "The Vinktar Square",
		"nameShort": "kt",
	}],
	["Thicket Map", {
		"name": "Thicket Map",
		"nameShort": "et",
	}],
	["Tower Map", {
		"name": "Tower Map",
		"nameShort": "ower",
	}],
	["Toxic Sewer Map", {
		"name": "Toxic Sewer Map",
		"nameShort": "we",
	}],
	["Tropical Island Map", {
		"name": "Tropical Island Map",
		"nameShort": "isl",
	}],
	["Twisted Distant Memory", {
		"name": "Twisted Distant Memory",
		"nameShort": "ory",
	}],
	["Underground River Map", {
		"name": "Underground River Map",
		"nameShort": "ive",
	}],
	["Underground Sea Map", {
		"name": "Underground Sea Map",
		"nameShort": "gr",
	}],
	["Vaal Pyramid Map", {
		"name": "Vaal Pyramid Map",
		"nameShort": "id",
	}],
	["Vaal Temple Map", {
		"name": "Vaal Temple Map",
		"nameShort": "pl",
	}],
	["Vault Map", {
		"name": "Vault Map",
		"nameShort": "t m",
	}],
	["Vaults of Atziri", {
		"name": "Vaults of Atziri",
		"nameShort": "zi",
	}],
	["Villa Map", {
		"name": "Villa Map",
		"nameShort": "il",
	}],
	["Volcano Map", {
		"name": "Volcano Map",
		"nameShort": "ano",
	}],
	["Waste Pool Map", {
		"name": "Waste Pool Map",
		"nameShort": "ol",
	}],
	["Wasteland Map", {
		"name": "Wasteland Map",
		"nameShort": "nd",
	}],
	["Waterways Map", {
		"name": "Waterways Map",
		"nameShort": "rw",
	}],
	["Whakawairua Tuahu", {
		"name": "Whakawairua Tuahu",
		"nameShort": "ah",
	}],
	["Wharf Map", {
		"name": "Wharf Map",
		"nameShort": "rf",
	}],
]);