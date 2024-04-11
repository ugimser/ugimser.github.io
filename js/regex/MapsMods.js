const mapModsShadowShaping = [
	{
		nameLong: "Area contains The Sacred Grove",
		nameShort: "sac",
		popularity: 0,
	},
	{
		nameLong: "Area contains an additional Legion Encounter",
		nameShort: "leg",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains an additional Expedition Encounter",
		nameShort: "xpe",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains an additional Smuggler's Cache",
		nameShort: "r'",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains an additional Ultimatum Encounter",
		nameShort: "ltim",
		popularity: 0,
	}, 
	{
		nameLong: "Areas contain Ritual Altars",
		nameShort: "ritu",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains 2 additional Abysses",
		nameShort: "yss",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains 3 additional Breaches",
		nameShort: "reac",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains 3 additional Harbingers",
		nameShort: "rbi",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains 3 additional Essences",
		nameShort: "senc",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains 4 additional Strongboxes",
		nameShort: "gb",
		popularity: 0,
	}, 
	{
		nameLong: "Area is inhabited by 5 additional Tormented Spirits",
		nameShort: "irit",
		popularity: 0,
	}, 
	{
		nameLong: "Area contains 5 additional Shrines",
		nameShort: "hrin",
		popularity: 0,
	}, 
	{
		nameLong: "Area is inhabited by 10 additional Rogue Exiles",
		nameShort: "xil",
		popularity: 0,
	},
];

const mapModsCorrupted = [
	{
		nameLong: "+(10-20)% Item Quantity",
		nameShort: "%.{6}q",
		popularity: 0,
	},
	{
		nameLong: "+(8-12)% Item Rarity",
		nameShort: "rar",
		popularity: 0,
	},
	{
		nameLong: "+(5-10)% Pack Size",
		nameShort: "%.pa",
		popularity: 0,
	},
	{
		nameLong: "(10-20)% increased Explicit Modifier magnitudes",
		nameShort: "xpl",
		popularity: 0,
	},
	{
		nameLong: "Contains a Vaal Side Area",
		nameShort: "a.va",
		popularity: 0,
	},
	{
		nameLong: "Area contains an additional guarded Exquisite Vaal Vessel",
		nameShort: "xqu",
		popularity: 0,
	},
	{
		nameLong: "Unique Monsters drop Corrupted Items",
		nameShort: "rru",
		popularity: 0,
	},
	{
		nameLong: "Players' Vaal Skills do not apply Soul Gain Prevention",
		nameShort: "s'",
		popularity: 0,
	},
	{
		nameLong: "Map Crafting options for this Map have no cost",
		nameShort: "ft",
		popularity: 0,
	},
	{
		nameLong: "Atlas Passives have (10-15)% increased Effect on Area",
		nameShort: "n.ar",
		popularity: 0,
	},
	{
		nameLong: "Quality applies to Pack Size instead of Item Quantity",
		nameShort: "lie",
		popularity: 0,
	},
	{
		nameLong: "Area has an additional random Scarab effect",
		nameShort: "sca",
		popularity: 0,
	},
	{
		nameLong: "Area is affected by (5-15) additional random Unallocated Notable Atlas Passives",
		nameShort: "llo",
		popularity: 0,
	},
];

const mapData = new Map([
	["Area contains many Totems", {
		"nameLong": "Area contains many Totems",
		"nameShort": "tot",
		"nameMod": "Ceremonial",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["(20-30)% increased number of Rare Monsters", {
		"nameLong": "(20-30)% increased number of Rare Monsters",
		"nameShort": "nu",
		"nameMod": "Antagonist's",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],/*
	["Area is inhabited by 2 additional Rogue Exiles", {
		"nameLong": "Area is inhabited by 2 additional Rogue Exiles",
		"nameShort": "gu",
		"nameMod": "Anarchic",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],*/
	["Area is inhabited by Skeletons", {
		"nameLong": "Area is inhabited by Skeletons",
		"nameShort": "eto",
		"nameMod": "Skeletal",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Goatmen", {
		"nameLong": "Area is inhabited by Goatmen",
		"nameShort": "oa",
		"nameMod": "Capricious",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Sea Witches and their Spawn", {
		"nameLong": "Area is inhabited by Sea Witches and their Spawn",
		"nameShort": "ei",
		"nameMod": "Slithering",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Undead", {
		"nameLong": "Area is inhabited by Undead",
		"nameShort": "by un",
		"nameMod": "Undead",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by ranged monsters", {
		"nameLong": "Area is inhabited by ranged monsters",
		"nameShort": "ged",
		"nameMod": "Emanant",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Animals", {
		"nameLong": "Area is inhabited by Animals",
		"nameShort": "nim",
		"nameMod": "Feral",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Demons", {
		"nameLong": "Area is inhabited by Demons",
		"nameShort": "emons",
		"nameMod": "Demonic",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Humanoids", {
		"nameLong": "Area is inhabited by Humanoids",
		"nameShort": "hum",
		"nameMod": "Bipedal",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Solaris fanatics", {
		"nameLong": "Area is inhabited by Solaris fanatics",
		"nameShort": "laris",
		"nameMod": "Solar",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Lunaris fanatics", {
		"nameLong": "Area is inhabited by Lunaris fanatics",
		"nameShort": "unar",
		"nameMod": "Lunar",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Ghosts", {
		"nameLong": "Area is inhabited by Ghosts",
		"nameShort": "osts",
		"nameMod": "Haunting",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Cultists of Kitava", {
		"nameLong": "Area is inhabited by Cultists of Kitava",
		"nameShort": "tav",
		"nameMod": "Feasting",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area has increased monster variety", {
		"nameLong": "Area has increased monster variety",
		"nameShort": "ety",
		"nameMod": "Multifarious",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Area is inhabited by Abominations", {
		"nameLong": "Area is inhabited by Abominations",
		"nameShort": "omi",
		"nameMod": "Abhorrent",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters' skills Chain 2 additional times", {
		"nameLong": "Monsters' skills Chain 2 additional times",
		"nameShort": "s' s",
		"nameMod": "Chaining",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters are Hexproof", {
		"nameLong": "Monsters are Hexproof",
		"nameShort": "oof",
		"nameMod": "Hexproof",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 800
	}],
	["Monsters have 60% less effect of Curses on Monsters", {
		"nameLong": "Monsters have 60% less effect of Curses on Monsters",
		"nameShort": "n m",
		"nameMod": "Hexwarded",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],/*
	["Slaying Enemies close together can attract monsters from Beyond this realm", {
		"nameLong": "Slaying Enemies close together can attract monsters from Beyond this realm",
		"nameShort": "yi",
		"nameMod": "Otherworldly",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],*/
	["Area contains two Unique Bosses", {
		"nameLong": "Area contains two Unique Bosses",
		"nameShort": "two",
		"nameMod": "Twinned",
		"packSize": 7,
		"quantity": 19,
		"rarity": 11,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have (25-30)% more Life Monsters cannot be Stunned", {
		"nameLong": "Monsters have (25-30)% more Life Monsters cannot be Stunned",
		"nameShort": "tun",
		"nameMod": "Unwavering",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters fire 2 additional Projectiles", {
		"nameLong": "Monsters fire 2 additional Projectiles",
		"nameShort": "je",
		"nameMod": "Splitting",
		"packSize": 7,
		"quantity": 19,
		"rarity": 11,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have +40% Physical Damage Reduction", {
		"nameLong": "Monsters have +40% Physical Damage Reduction",
		"nameShort": "uct",
		"nameMod": "Armoured",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have (40-49)% more Life", {
		"nameLong": "Monsters have (40-49)% more Life",
		"nameShort": "re li",
		"nameMod": "Fecund",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have (22-25)% increased Damage", {
		"nameLong": "Monsters have (22-25)% increased Damage",
		"nameShort": "rs.{8}2",
		"nameMod": "Savage",
		"packSize": 7,
		"quantity": 19,
		"rarity": 11,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters deal (90-110)% extra Physical Damage as Fire", {
		"nameLong": "Monsters deal (90-110)% extra Physical Damage as Fire",
		"nameShort": "as fi",
		"nameMod": "Burning",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters deal (90-110)% extra Physical Damage as Cold", {
		"nameLong": "Monsters deal (90-110)% extra Physical Damage as Cold",
		"nameShort": "s col",
		"nameMod": "Freezing",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters deal (90-110)% extra Physical Damage as Lightning", {
		"nameLong": "Monsters deal (90-110)% extra Physical Damage as Lightning",
		"nameShort": "tn",
		"nameMod": "Shocking",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters deal (31-35)% extra Physical Damage as Chaos |Monsters Inflict Withered for 2 seconds on Hit", {
		"nameLong": "Monsters deal (31-35)% extra Physical Damage as Chaos |Monsters Inflict Withered for 2 seconds on Hit",
		"nameShort": "nds",
		"nameMod": "Profane",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 800
	}],
	["Monsters have (25-30)% increased Movement Speed |Monsters have (35-45)% increased Attack Speed |Monsters have (25-30)% increased Cast Speed", {
		"nameLong": "Monsters have (25-30)% increased Movement Speed |Monsters have (35-45)% increased Attack Speed |Monsters have (25-30)% increased Cast Speed",
		"nameShort": "k sp",
		"nameMod": "Fleet",
		"packSize": 7,
		"quantity": 19,
		"rarity": 11,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters reflect 18% of Physical Damage", {
		"nameLong": "Monsters reflect 18% of Physical Damage",
		"nameShort": "f p",
		"nameMod": "Punishing",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 1000
	}],
	["Monsters reflect 18% of Elemental Damage", {
		"nameLong": "Monsters reflect 18% of Elemental Damage",
		"nameShort": "tal d",
		"nameMod": "Mirrored",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 1000
	}],
	["Unique Boss deals 25% increased Damage |Unique Boss has 30% increased Attack and Cast Speed", {
		"nameLong": "Unique Boss deals 25% increased Damage |Unique Boss has 30% increased Attack and Cast Speed",
		"nameShort": "k a",
		"nameMod": "Overlord's",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Unique Boss has 35% increased Life Unique |Boss has 70% increased Area of Effect", {
		"nameLong": "Unique Boss has 35% increased Life Unique |Boss has 70% increased Area of Effect",
		"nameShort": "d li",
		"nameMod": "Titan's",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have a 20% chance to cause Elemental Ailments on Hit", {
		"nameLong": "Monsters have a 20% chance to cause Elemental Ailments on Hit",
		"nameShort": "cau",
		"nameMod": "Empowered",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters cannot be Taunted |Monsters' Action Speed cannot be modified to below base value", {
		"nameLong": "Monsters cannot be Taunted |Monsters' Action Speed cannot be modified to below base value",
		"nameShort": "elo",
		"nameMod": "Unstoppable",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["All Monster Damage from Hits always Ignites", {
		"nameLong": "All Monster Damage from Hits always Ignites",
		"nameShort": "lw",
		"nameMod": "Conflagrating",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["+25% Monster Chaos Resistance |+40% Monster Elemental Resistances", {
		"nameLong": "+25% Monster Chaos Resistance |+40% Monster Elemental Resistances",
		"nameShort": "r el",
		"nameMod": "Resistant",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have a 50% chance to avoid Poison, Impale, and Bleeding", {
		"nameLong": "Monsters have a 50% chance to avoid Poison, Impale, and Bleeding",
		"nameShort": "n,",
		"nameMod": "Impervious",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have 60% chance to Impale with Attacks", {
		"nameLong": "Monsters have 60% chance to Impale with Attacks",
		"nameShort": "e w",
		"nameMod": "Impaling",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have +60% chance to Suppress Spell Damage", {
		"nameLong": "Monsters have +60% chance to Suppress Spell Damage",
		"nameShort": "o su",
		"nameMod": "Oppressive",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters gain (40-49)% of Maximum Life as Extra Maximum Energy Shield", {
		"nameLong": "Monsters gain (40-49)% of Maximum Life as Extra Maximum Energy Shield",
		"nameShort": "m li",
		"nameMod": "Buffered",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "prefix",
		"danger": 0,
		"popularity": 0
	}],
	["Unique Bosses are Possessed", {
		"nameLong": "Unique Bosses are Possessed",
		"nameShort": "sess",
		"nameMod": "Enthralled",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "prefix",
		"danger": 0,
		"popularity": 750
	}],
	["(20-30)% more Magic Monsters", {
		"nameLong": "(20-30)% more Magic Monsters",
		"nameShort": "gic",
		"nameMod": "of Bloodlines",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters Poison on Hit", {
		"nameLong": "Monsters Poison on Hit",
		"nameShort": "on o",
		"nameMod": "of Venom",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players cannot inflict Exposure", {
		"nameLong": "Players cannot inflict Exposure",
		"nameShort": "ure",
		"nameMod": "of Balance",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have 100% increased Area of Effect", {
		"nameLong": "Monsters have 100% increased Area of Effect",
		"nameShort": "e \d+%.{11}ar",
		"nameMod": "of Giants",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have (360-400)% increased Critical Strike Chance |+(41-45)% to Monster Critical Strike Multiplier", {
		"nameLong": "Monsters have (360-400)% increased Critical Strike Chance |+(41-45)% to Monster Critical Strike Multiplier",
		"nameShort": "tip",
		"nameMod": "of Deadliness",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players have 60% less Recovery Rate of Life and Energy Shield", {
		"nameLong": "Players have 60% less Recovery Rate of Life and Energy Shield",
		"nameShort": "f l",
		"nameMod": "of Smothering",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "suffix",
		"danger": 0,
		"popularity": 850
	}],
	["Players cannot Regenerate Life, Mana or Energy Shield", {
		"nameLong": "Players cannot Regenerate Life, Mana or Energy Shield",
		"nameShort": "gen",
		"nameMod": "of Stasis",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "suffix",
		"danger": 0,
		"popularity": 900
	}],
	["Area has patches of Burning Ground", {
		"nameLong": "Area has patches of Burning Ground",
		"nameShort": "g g",
		"nameMod": "of Flames",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Area has patches of Chilled Ground", {
		"nameLong": "Area has patches of Chilled Ground",
		"nameShort": "hil",
		"nameMod": "of Ice",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Area has patches of Shocked Ground which increase Damage taken by 50%", {
		"nameLong": "Area has patches of Shocked Ground which increase Damage taken by 50%",
		"nameShort": "wh",
		"nameMod": "of Lightning",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Area has patches of desecrated ground", {
		"nameLong": "Area has patches of desecrated ground",
		"nameShort": "ese",
		"nameMod": "of Desecration",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Area has patches of Consecrated Ground", {
		"nameLong": "Area has patches of Consecrated Ground",
		"nameShort": "nsecr",
		"nameMod": "of Consecration",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players are Cursed with Elemental Weakness", {
		"nameLong": "Players are Cursed with Elemental Weakness",
		"nameShort": "kn",
		"nameMod": "of Elemental Weakness",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players are Cursed with Vulnerability", {
		"nameLong": "Players are Cursed with Vulnerability",
		"nameShort": "ln",
		"nameMod": "of Vulnerability",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players are Cursed with Enfeeble", {
		"nameLong": "Players are Cursed with Enfeeble",
		"nameShort": "ebl",
		"nameMod": "of Enfeeblement",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players are Cursed with Temporal Chains", {
		"nameLong": "Players are Cursed with Temporal Chains",
		"nameShort": "ora",
		"nameMod": "of Temporal Chains",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 850
	}],
	["(-12--9)% maximum Player Resistances", {
		"nameLong": "(-12--9)% maximum Player Resistances",
		"nameShort": "% ma",
		"nameMod": "of Exposure",
		"packSize": 7,
		"quantity": 19,
		"rarity": 11,
		"parent": "suffix",
		"danger": 0,
		"popularity": 900
	}],
	["Cannot Leech from Monsters", {
		"nameLong": "Cannot Leech from Monsters",
		"nameShort": "m m",
		"nameMod": "of Congealment",
		"packSize": 6,
		"quantity": 16,
		"rarity": 9,
		"parent": "suffix",
		"danger": 0,
		"popularity": 900
	}],
	["Monsters have 70% chance to Avoid Elemental Ailments", {
		"nameLong": "Monsters have 70% chance to Avoid Elemental Ailments",
		"nameShort": "d el",
		"nameMod": "of Insulation",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters take (36-40)% reduced Extra Damage from Critical Strikes", {
		"nameLong": "Monsters take (36-40)% reduced Extra Damage from Critical Strikes",
		"nameShort": "kes",
		"nameMod": "of Toughness",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players gain 50% reduced Flask Charges", {
		"nameLong": "Players gain 50% reduced Flask Charges",
		"nameShort": "k c",
		"nameMod": "of Drought",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players have 30% less Armour |Players have 40% reduced Chance to Block", {
		"nameLong": "Players have 30% less Armour |Players have 40% reduced Chance to Block",
		"nameShort": "o bl",
		"nameMod": "of Rust",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters have 50% increased Accuracy Rating |Players have -20% to amount of Suppressed Spell Damage Prevented", {
		"nameLong": "Monsters have 50% increased Accuracy Rating |Players have -20% to amount of Suppressed Spell Damage Prevented",
		"nameShort": "rev",
		"nameMod": "of Miring",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players have 25% less Area of Effect", {
		"nameLong": "Players have 25% less Area of Effect",
		"nameShort": "ss are",
		"nameMod": "of Impotence",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters gain a Frenzy Charge on Hit", {
		"nameLong": "Monsters gain a Frenzy Charge on Hit",
		"nameShort": "a f",
		"nameMod": "of Frenzy",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters gain an Endurance Charge on Hit", {
		"nameLong": "Monsters gain an Endurance Charge on Hit",
		"nameShort": "an an",
		"nameMod": "of Endurance",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters gain a Power Charge on Hit", {
		"nameLong": "Monsters gain a Power Charge on Hit",
		"nameShort": "a pow",
		"nameMod": "of Power",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters Blind on Hit", {
		"nameLong": "Monsters Blind on Hit",
		"nameShort": "bli",
		"nameMod": "of Blinding",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters Maim on Hit with Attacks", {
		"nameLong": "Monsters Maim on Hit with Attacks",
		"nameShort": "aim",
		"nameMod": "of Carnage",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters Hinder on Hit with Spells", {
		"nameLong": "Monsters Hinder on Hit with Spells",
		"nameShort": "h s",
		"nameMod": "of Impedance",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Monsters steal Power, Frenzy and Endurance charges on Hit", {
		"nameLong": "Monsters steal Power, Frenzy and Endurance charges on Hit",
		"nameShort": "r,",
		"nameMod": "of Enervation",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players have 40% less Cooldown Recovery Rate", {
		"nameLong": "Players have 40% less Cooldown Recovery Rate",
		"nameShort": "dow",
		"nameMod": "of Fatigue",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Buffs on Players expire 70% faster", {
		"nameLong": "Buffs on Players expire 70% faster",
		"nameShort": "fs",
		"nameMod": "of Transience",
		"packSize": 4,
		"quantity": 10,
		"rarity": 6,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
	["Players have 60% reduced effect of Non-Curse Auras from Skills", {
		"nameLong": "Players have 60% reduced effect of Non-Curse Auras from Skills",
		"nameShort": "-c",
		"nameMod": "of Doubt",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 750
	}],
	["Players have 25% less Accuracy Rating", {
		"nameLong": "Players have 25% less Accuracy Rating",
		"nameShort": "s ac",
		"nameMod": "of Imprecision",
		"packSize": 5,
		"quantity": 13,
		"rarity": 8,
		"parent": "suffix",
		"danger": 0,
		"popularity": 0
	}],
]);

const mapDataT17 = [
	{
		"nameLong": "Monsters' skills Chain 3 additional times|Monsters' Projectiles can Chain when colliding with Terrain",
		"nameShort": "' p",
		"popularity": 0
	},
	{
		"nameLong": "All Magic and Normal Monsters in Area are in a Union of Souls",
		"nameShort": "sou",
		"popularity": 0
	},
	{
		"nameLong": "Monsters have +1 to Maximum Power Charges|Monsters gain a Power Charge on Hit",
		"nameShort": "m p",
		"popularity": 0
	},
	{
		"nameLong": "Monsters have +1 to Maximum Frenzy Charges|Monsters gain a Frenzy Charge on Hit",
		"nameShort": "m f",
		"popularity": 0
	},
	{
		"nameLong": "Monsters have +1 to Maximum Endurance Charges|Monsters gain an Endurance Charge when hit",
		"nameShort": "m end",
		"popularity": 0
	},
	{
		"nameLong": "Players have -20% to all maximum Resistances",
		"nameShort": "m r",
		"popularity": 0
	},
	{
		"nameLong": "Players and their Minions deal no damage for 4 out of every 10 seconds",
		"nameShort": "ir m",
		"popularity": 0
	},
	{
		"nameLong": "Monsters have 100% increased Area of Effect|Monsters fire 4 additional Projectiles",
		"nameShort": "l p",
		"popularity": 0
	},
	{
		"nameLong": "Monsters have (650-700)% increased Critical Strike Chance|+(70-75)% to Monster Critical Strike Multiplier",
		"nameShort": "ke m",
		"popularity": 0
	},
	{
		"nameLong": "Monsters Poison on Hit|All Damage from Monsters' Hits can Poison|Monsters have 100% increased Poison Duration",
		"nameShort": "n d",
		"popularity": 0
	},
	{
		"nameLong": "Monsters gain (70-80)% of Maximum Life as Extra Maximum Energy Shield",
		"nameShort": "m l",
		"popularity": 0
	},
	{
		"nameLong": "Unique Bosses are Possessed",
		"nameShort": "poss",
		"popularity": 0
	},
	{
		"nameLong": "Monsters have +100% chance to Suppress Spell Damage",
		"nameShort": "o s",
		"popularity": 0
	},
	{
		"nameLong": "Monsters have +50% Chance to Block Attack Damage",
		"nameShort": "k d",
		"popularity": 0
	},
	{
		"nameLong": "Monsters cannot be Leeched from",
		"nameShort": "leec",
		"popularity": 0
	},
	{
		"nameLong": "Monsters reflect 20% of Physical Damage|Monsters reflect 20% of Elemental Damage",
		"nameShort": "f p",
		"popularity": 0
	},
	{
		"nameLong": "Players are Cursed with Vulnerability|Players are Cursed with Temporal Chains|Players are Cursed with Elemental Weakness",
		"nameShort": "wea",
		"popularity": 0
	},
	{
		"nameLong": "Players have 50% less Area of Effect",
		"nameShort": "ss ar",
		"popularity": 0
	},
	{
		"nameLong": "Monsters take 100% reduced Extra Damage from Critical Strikes",
		"nameShort": "m c",
		"popularity": 0
	},
	{
		"nameLong": "(90-100)% more Monster Life",
		"nameShort": "r l",
		"popularity": 0
	},
	{
		"nameLong": "(35-45)% increased number of Rare Monsters|Rare Monsters each have 2 additional Modifiers",
		"nameShort": "f ra",
		"popularity": 0
	},
	{
		"nameLong": "Unique Monsters have a random Shrine Buff",
		"nameShort": "shr",
		"popularity": 0
	},
	{
		"nameLong": "Monsters inflict 2 Grasping Vines on Hit",
		"nameShort": "vin",
		"popularity": 0
	},
	{
		"nameLong": "Rare Monsters have Volatile Cores",
		"nameShort": "cor",
		"popularity": 0
	},
	{
		"nameLong": "Area contains Petrification Statues",
		"nameShort": "pet",
		"popularity": 0
	},
	{
		"nameLong": "Area contains (30-40) additional Clusters of Highly Volatile Barrels",
		"nameShort": "e b",
		"popularity": 0
	},
	{
		"nameLong": "Monsters gain (180-200)% of their Physical Damage as Extra Damage of a random Element",
		"nameShort": "m e",
		"popularity": 0
	},
	{
		"nameLong": "Monsters gain (80-100)% of their Physical Damage as Extra Chaos Damage",
		"nameShort": "s da",
		"popularity": 0
	},
	{
		"nameLong": "(25-30)% increased Monster Movement Speed|(35-45)% increased Monster Attack Speed|(35-45)% increased Monster Cast Speed",
		"nameShort": "r ca",
		"popularity": 0
	},
	{
		"nameLong": "Players cannot gain Endurance Charges|Players cannot gain Frenzy Charges|Players cannot gain Power Charges",
		"nameShort": "in p",
		"popularity": 0
	},
	{
		"nameLong": "Players are assaulted by Bloodstained Sawblades",
		"nameShort": "saw",
		"popularity": 0
	},
	{
		"nameLong": "Monsters cannot be Stunned|Monsters' Action Speed cannot be modified to below Base Value|Monsters' Movement Speed cannot be modified to below Base Value",
		"nameShort": "stu",
		"popularity": 0
	},
	{
		"nameLong": "Players are targeted by a Meteor when they use a Flask",
		"nameShort": "fla",
		"popularity": 0
	},
	{
		"nameLong": "Players have 50% less Defences",
		"nameShort": "def",
		"popularity": 0
	},
	{
		"nameLong": "Players cannot Recharge Energy Shield|Players cannot Regenerate Life, Mana or Energy Shield",
		"nameShort": ", m",
		"popularity": 0
	},
	{
		"nameLong": "Players cannot Block|Players cannot Suppress Spell Damage",
		"nameShort": "blo",
		"popularity": 0
	},
	{
		"nameLong": "100% reduced Effect of Curses on Monsters",
		"nameShort": "f c",
		"popularity": 0
	},
	{
		"nameLong": "Area contains Drowning Orbs",
		"nameShort": "orb",
		"popularity": 0
	},
	{
		"nameLong": "Players have 90% reduced effect of Non-Curse Auras from Skills",
		"nameShort": "-cu",
		"popularity": 0
	},
	{
		"nameLong": "+50% Monster Physical Damage Reduction|+35% Monster Chaos Resistance|+55% Monster Elemental Resistances",
		"nameShort": "os r",
		"popularity": 0
	},
	{
		"nameLong": "All Monster Damage can Ignite, Freeze and Shock|Monsters Ignite, Freeze and Shock on Hit",
		"nameShort": "sho",
		"popularity": 0
	},
	{
		"nameLong": "Players have 80% less Recovery Rate of Life and Energy Shield",
		"nameShort": "shi",
		"popularity": 0
	},
	{
		"nameLong": "Buffs on Players expire 100% faster",
		"nameShort": "n p",
		"popularity": 0
	},
	{
		"nameLong": "Monster Damage Penetrates 15% Elemental Resistances",
		"nameShort": "pen",
		"popularity": 0
	},
	{
		"nameLong": "Players have 4% reduced Action Speed for each time they've used a Skill Recently",
		"nameShort": "rec",
		"popularity": 0
	},
	{
		"nameLong": "Players are Marked for Death for 10 seconds after killing a Rare or Unique monster",
		"nameShort": "r u",
		"popularity": 0
	},
	{
		"nameLong": "Area contains Unstable Tentacle Fiends",
		"nameShort": "ten",
		"popularity": 0
	},
	{
		"nameLong": "Monsters' Attacks Impale on Hit|When a fifth Impale is inflicted on a Player, Impales are removed to Reflect their Physical Damage multiplied by their remaining Hits to that Player and their Allies within 1.8 metres",
		"nameShort": "t p",
		"popularity": 0
	},
	{
		"nameLong": "Area has patches of Awakeners' Desolation",
		"nameShort": "' d",
		"popularity": 0
	},/*
	{
		"nameLong": "Rare and Unique monsters spawn a Tormented Spirit on reaching Low Life",
		"nameShort": "w l",
		"popularity": 0
	},*/
	{
		"nameLong": "Rare monsters in area are Shaper-Touched",
		"nameShort": "tou",
		"popularity": 0
	},
	{
		"nameLong": "Players have -2 to maximum number of Summoned Totems",
		"nameShort": "f su",
		"popularity": 0
	},
	{
		"nameLong": "Player Skills which Throw Mines throw 1 fewer Mine|Player Skills which Throw Traps throw 1 fewer Trap",
		"nameShort": "r t",
		"popularity": 0
	},
	{
		"nameLong": "Players' Minions have 50% less Attack Speed|Players' Minions have 50% less Cast Speed|Players' Minions have 50% less Movement Speed",
		"nameShort": "nt s",
		"popularity": 0
	},
	{
		"nameLong": "15% of Damage Players' Totems take from Hits is taken from their Summoner's Life instead",
		"nameShort": "s l",
		"popularity": 0
	},
	{
		"nameLong": "Players in Area take 20% increased Damage per nearby Ally",
		"nameShort": "d d",
		"popularity": 0
	},
	{
		"nameLong": "Map Boss is accompanied by a Synthesis Boss",
		"nameShort": "syn",
		"popularity": 0
	},
	{
		"nameLong": "Debuffs on Monsters expire 100% faster",
		"nameShort": "deb",
		"popularity": 0
	},
	{
		"nameLong": "Area contains Runes of the Searing Exarch",
		"nameShort": "exa",
		"popularity": 0
	},
	{
		"nameLong": "The Maven interferes with Players",
		"nameShort": "h p",
		"popularity": 0
	}
];