const oilsBases = [
    {
        name: "Clear Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9DbGVhck9pbCIsInNjYWxlIjoxfV0/0a7f30cc3b/ClearOil.png",
        nameShort: "",
        price: 0,
	},
    {
        name: "Sepia Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9TZXBpYU9pbCIsInNjYWxlIjoxfV0/9114927bcc/SepiaOil.png",
        nameShort: "",
        price: 0,
	},
    {
        name: "Amber Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9BbWJlck9pbCIsInNjYWxlIjoxfV0/bd5ce1adfa/AmberOil.png",
        nameShort: "",
        price: 1,
	},
    {
        name: "Verdant Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9WZXJkYW50T2lsIiwic2NhbGUiOjF9XQ/efeac217c1/VerdantOil.png",
        nameShort: "",
        price: 1,
	},
    {
        name: "Teal Oil",
        price: 2,
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9UZWFsT2lsIiwic2NhbGUiOjF9XQ/d90d65a90b/TealOil.png",
    	nameShort: "",
	},
    {
        name: "Azure Oil",
        price: 2,
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9BenVyZU9pbCIsInNjYWxlIjoxfV0/a68235e8e8/AzureOil.png",
    	nameShort: "",
	},
    {
        name: "Indigo Oil",
        price: 2,
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9JbmRpZ29PaWwiLCJzY2FsZSI6MX1d/d11c298ca8/IndigoOil.png",
    	nameShort: "",
	},
    {
        name: "Violet Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9WaW9sZXRPaWwiLCJzY2FsZSI6MX1d/76c3dc06f8/VioletOil.png",
        nameShort: "",
        price: 3,
	},
    {
        name: "Crimson Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9Dcmltc29uT2lsIiwic2NhbGUiOjF9XQ/5e5f62ac0e/CrimsonOil.png",
        nameShort: "",
        price: 4,
	},
    {
        name: "Black Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9CbGFja09pbCIsInNjYWxlIjoxfV0/ce6830b309/BlackOil.png",
        nameShort: "",
        price: 6,
	},
    {
        name: "Opalescent Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9PcGFsZXNjZW50T2lsIiwic2NhbGUiOjF9XQ/abd419a154/OpalescentOil.png",
        nameShort: "",
        price: 15,
	},
    {
        name: "Silver Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9TaWx2ZXJPaWwiLCJzY2FsZSI6MX1d/d6ad829c2f/SilverOil.png",
        nameShort: "",
        price: 30,
	},
    {
        name: "Golden Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9Hb2xkZW5PaWwiLCJzY2FsZSI6MX1d/263a5d73da/GoldenOil.png",
        nameShort: "",
        price: 100,
	},
    {
        name: "Tainted Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9WYWFsT2lsIiwic2NhbGUiOjF9XQ/ac4ceb0430/VaalOil.png",
        nameShort: "",
        price: 1000,
	},
    {
        name: "Reflective Oil",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9NaXJyb3JPaWwiLCJzY2FsZSI6MX1d/eca4a49588/MirrorOil.png",
        nameShort: "",
        price: 1,
	},
    {
        name: "Oil Extractor",
        url: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9JY2hvckV4dHJhY3RvciIsInNjYWxlIjoxfV0/e020224caf/IchorExtractor.png",
        nameShort: "",
        price: 25,
	},
];

const oilsAnointmentsRings = [
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "",
        name: "Your Chilling Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "ling T"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Violet Oil",
        oil3: "",
        name: "Your Meteor Towers create Burning Ground for 3 seconds on Hit",
        nameDetailed: "Bur",
        nameShort: "3 se"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "",
        name: "Your Meteor Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "rea"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Stone Gaze Towers have 20% increased Cooldown Recovery Rate",
        nameDetailed: "",
        nameShort: "Rat"
    },
    {
        oil1: "Clear Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Arc Towers repeats 1 additional Times",
        nameDetailed: "",
        nameShort: "s 1"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "",
        name: "Your Lightning Storm Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "l 25%"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Your Meteor Towers always Stun",
        nameDetailed: "",
        nameShort: "ys"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "",
        name: "Minions summoned by Your Summoning Towers have 25% increased Damage",
        nameDetailed: "",
        nameShort: "ning T"
    },
    {
        oil1: "Amber Oil",
        oil2: "Indigo Oil",
        oil3: "",
        name: "Your Arc Towers have 20% chance to inflict Sap",
        nameDetailed: "",
        nameShort: "Sa"
    },
    {
        oil1: "Golden Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "All Towers in range of your Empowering Towers have 50% chance to deal Double Damage",
        nameDetailed: "",
        nameShort: "Do"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Your Fireball Towers fire an additional 2 Projectiles",
        nameDetailed: "",
        nameShort: "2 P"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Lightning Storm Towers create Storms centred on Enemies",
        nameDetailed: "",
        nameShort: "e S"
    },
    {
        oil1: "Violet Oil",
        oil2: "Violet Oil",
        oil3: "",
        name: "Your Chilling Towers have 25% increased effect of Chill",
        nameDetailed: "",
        nameShort: "f Ch"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Chilling Towers freeze enemies for 0.2 seconds while they are affected by chilling beams",
        nameDetailed: "",
        nameShort: "fr"
    },
    {
        oil1: "Azure Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Smothering Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "herin"
    },
    {
        oil1: "Violet Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Empowering Towers also grant 20% increased Cast Speed",
        nameDetailed: "",
        nameShort: "t 20%"
    },
    {
        oil1: "Clear Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Seismic Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "c Towe"
    },
    {
        oil1: "Teal Oil",
        oil2: "Violet Oil",
        oil3: "",
        name: "Your Scout Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "ut Tow"
    },
    {
        oil1: "Amber Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Your Flamethrower Towers have 15% increased Cast Speed",
        nameDetailed: "",
        nameShort: "15% in"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Indigo Oil",
        oil3: "",
        name: "Your Freezebolt Towers have 20% chance to inflict Brittle",
        nameDetailed: "",
        nameShort: "Br"
    },
    {
        oil1: "Amber Oil",
        oil2: "Violet Oil",
        oil3: "",
        name: "Your Flamethrower Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "r Towe"
    },
    {
        oil1: "Black Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Minions summoned by Your Sentinel Towers have 50% increased Life",
        nameDetailed: "",
        nameShort: "d Lif"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Indigo Oil",
        oil3: "",
        name: "Minions summoned by Your Sentinel Towers Leech 2% of Damage as Life",
        nameDetailed: "",
        nameShort: "Le"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "",
        name: "Your Fireball Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "l 25%"
    },
    {
        oil1: "Azure Oil",
        oil2: "Azure Oil",
        oil3: "",
        name: "Your Summoning Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "ning T"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Minions summoned by Your Scout Towers inflict Malediction on Hit",
        nameDetailed: "",
        nameShort: "Ma"
    },
    {
        oil1: "Amber Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Temporal Towers effects decay 25% slower",
        nameDetailed: "",
        nameShort: "sl"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Your Lightning Storm Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "m Towe"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Your Freezebolt Tower deal full damage to Cold Enemies",
        nameDetailed: "",
        nameShort: "ld"
    },
    {
        oil1: "Black Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Shock Nova Towers have 30% increased area of effect per repeat. Your Shock Nova Towers repeats 2 additional Times",
        nameDetailed: "",
        nameShort: "30"
    },
    {
        oil1: "Teal Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Minions summoned by Your Summoning Towers have 25% increased Movement Speed",
        nameDetailed: "",
        nameShort: "ning T"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Towers deal 10% increased Damage per Type of Tower Active",
        nameDetailed: "",
        nameShort: "Ty"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "",
        name: "Your Stone Gaze Towers have 25% increased Duration",
        nameDetailed: "",
        nameShort: "ratio"
    },
    {
        oil1: "Violet Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Minions summoned by Your Sentinel Towers have 25% increased Movement Speed",
        nameDetailed: "",
        nameShort: "ove"
    },
    {
        oil1: "Azure Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Scout Towers summon an additional minion",
        nameDetailed: "",
        nameShort: "mi"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Imbuing Towers also grant 50% increased Critical Strike Chance",
        nameDetailed: "",
        nameShort: "Cr"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Cages created by Your Glacial Cage Towers are 20% larger",
        nameDetailed: "",
        nameShort: "cr"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Enemies Petrified by Your Stone Gaze Towers take 10% increased Damage",
        nameDetailed: "",
        nameShort: "fie"
    },
    {
        oil1: "Azure Oil",
        oil2: "Indigo Oil",
        oil3: "",
        name: "Your Imbuing Towers also grant Onslaught",
        nameDetailed: "",
        nameShort: "On"
    },
    {
        oil1: "Teal Oil",
        oil2: "Indigo Oil",
        oil3: "",
        name: "Your Temporal Towers also grant Stun Immunity",
        nameDetailed: "",
        nameShort: "ty"
    },
    {
        oil1: "Azure Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Your Fireball Towers have 15% increased Cast Speed",
        nameDetailed: "",
        nameShort: "st"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Indigo Oil",
        oil3: "",
        name: "Your Flamethrower Towers have 20% chance to inflict Scorch",
        nameDetailed: "",
        nameShort: "o i"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Temporal Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "al Tow"
    },
    {
        oil1: "Violet Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Your Flamethrower Towers deal full damage to Fire Enemies",
        nameDetailed: "",
        nameShort: "o F"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Azure Oil",
        oil3: "",
        name: "Your Chilling Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "ling T"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Your Shock Nova Towers deal full damage to Lightning Enemies",
        nameDetailed: "",
        nameShort: "fu"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Empowering Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "werin"
    },
    {
        oil1: "Clear Oil",
        oil2: "Indigo Oil",
        oil3: "",
        name: "Your Smothering Towers also grant 10% chance to be Frozen, Shocked and Ignited",
        nameDetailed: "",
        nameShort: "ce"
    },
    {
        oil1: "Violet Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Imbuing Towers also grant 50% increased Damage",
        nameDetailed: "",
        nameShort: "uing T"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Fireball Towers fire an additional 8 Projectiles. \nYour Fireball Towers Projectiles fire in a circle",
        nameDetailed: "",
        nameShort: "s."
    },
    {
        oil1: "Silver Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Summoning Towers summon 2 additional Minions",
        nameDetailed: "",
        nameShort: "Mi"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Violet Oil",
        oil3: "",
        name: "Your Meteor Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "Ra"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Smothering Towers also grant 10% reduced Damage",
        nameDetailed: "",
        nameShort: "10% r"
    },
    {
        oil1: "Silver Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Seismic Towers have 100% increased length and range of Cascades",
        nameDetailed: "",
        nameShort: "le"
    },
    {
        oil1: "Black Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Lightning Storm Towers have 25% reduced Impact Delay",
        nameDetailed: "",
        nameShort: "Imp"
    },
    {
        oil1: "Black Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Empowering Towers also grant 25% increased Damage",
        nameDetailed: "",
        nameShort: "t 25"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Your Meteor Towers drop an additional Meteor",
        nameDetailed: "",
        nameShort: "Me"
    },
    {
        oil1: "Azure Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Stone Gaze Towers have 20% reduced Petrification Delay",
        nameDetailed: "",
        nameShort: "ay"
    },
    {
        oil1: "Teal Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Temporal Towers also grant you 20% increased action speed",
        nameDetailed: "",
        nameShort: "ou"
    },
    {
        oil1: "Clear Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Your Shock Nova Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "nge"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Seismic Towers have an additional Cascade",
        nameDetailed: "",
        nameShort: "an"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "",
        name: "Your Arc Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "l 25%"
    },
    {
        oil1: "Amber Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Arc Towers have 3 additional chains",
        nameDetailed: "",
        nameShort: "3 a"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Lightning Storm Towers have 25% increased explosion Area of Effect",
        nameDetailed: "",
        nameShort: "rm"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "",
        name: "Minions summoned by Your Sentinel Towers have 25% increased Damage",
        nameDetailed: "",
        nameShort: "el Towe"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "",
        name: "Minions summoned by Your Scout Towers have 25% increased Damage",
        nameDetailed: "",
        nameShort: "ut Tow"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Azure Oil",
        oil3: "",
        name: "Your Empowering Towers have 25% increased Effect",
        nameDetailed: "",
        nameShort: "Em"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "",
        name: "Your Seismic Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "c Towe"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "",
        name: "Your Freezebolt Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "t Towe"
    },
    {
        oil1: "Clear Oil",
        oil2: "Golden Oil",
        oil3: "",
        name: "Your Shock Nova Towers have 25% increased effect of Shock",
        nameDetailed: "",
        nameShort: "d e"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "",
        name: "Your Flamethrower Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "Fl"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Your Smothering Towers also grant 20% reduced Movement Speed",
        nameDetailed: "",
        nameShort: "t 2"
    },
    {
        oil1: "Violet Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Chilling Towers have 25% increased Duration",
        nameDetailed: "",
        nameShort: "r C"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "",
        name: "Your Shock Nova Towers deal 25% increased Damage",
        nameDetailed: "",
        nameShort: "ck"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Your Seismic Towers have 25% increased Stun Duration",
        nameDetailed: "",
        nameShort: "ic"
    },
    {
        oil1: "Teal Oil",
        oil2: "Azure Oil",
        oil3: "",
        name: "Your Glacial Cage Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "l C"
    },
    {
        oil1: "Clear Oil",
        oil2: "Violet Oil",
        oil3: "",
        name: "Your Freezebolt Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "t Towe"
    },
    {
        oil1: "Amber Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Stone Gaze Cage Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "ne"
    },
    {
        oil1: "Teal Oil",
        oil2: "Silver Oil",
        oil3: "",
        name: "Minions summoned by Your Summoning Towers have 50% increased Life",
        nameDetailed: "",
        nameShort: "Su"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Freezebolt Towers fire 2 additional Projectiles",
        nameDetailed: "",
        nameShort: "lt"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "",
        name: "Your Glacial Cage Towers have 25% increased Duration",
        nameDetailed: "",
        nameShort: "ati"
    },
    {
        oil1: "Azure Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Minions summoned by Your Scout Towers have 25% increased Movement Speed",
        nameDetailed: "",
        nameShort: "by"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Violet Oil",
        oil3: "",
        name: "Your Fireball Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "r F"
    },
    {
        oil1: "Teal Oil",
        oil2: "Black Oil",
        oil3: "",
        name: "Your Imbuing Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "uing T"
    },
    {
        oil1: "Amber Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Your Arc Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "rc"
    },
    {
        oil1: "Clear Oil",
        oil2: "Azure Oil",
        oil3: "",
        name: "Your Temporal Towers have 25% increased Effect",
        nameDetailed: "",
        nameShort: "Te"
    },
    {
        oil1: "Azure Oil",
        oil2: "Violet Oil",
        oil3: "",
        name: "Your Sentinel Towers have 25% increased Range",
        nameDetailed: "",
        nameShort: "el"
    },
    {
        oil1: "Clear Oil",
        oil2: "Opalescent Oil",
        oil3: "",
        name: "Enemies inside Glacial Cage take 10% increased Damage",
        nameDetailed: "",
        nameShort: "de"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "",
        name: "Your Smothering Towers have 25% increased Effect",
        nameDetailed: "",
        nameShort: "Sm"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Crimson Oil",
        oil3: "",
        name: "Your Glacial Cage Towers have 20% increased Cooldown Recovery Rate",
        nameDetailed: "",
        nameShort: "Gl"
    },
    {
        oil1: "Amber Oil",
        oil2: "Azure Oil",
        oil3: "",
        name: "Your Imbuing Towers have 25% increased Effect",
        nameDetailed: "",
        nameShort: "Im"
    }
];

const oilsPassiveSkills = [
    {
        oil1: "Verdant Oil",
        oil2: "Indigo Oil",
        oil3: "Opalescent Oil",
        name: "Vengeant Cascade",
        nameDetailed: "Returning Projectiles have 150% increased Speed",
        nameShort: "gea",
    },
    {
        oil1: "Azure Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Tranquility",
        nameDetailed: "5% increased maximum Energy Shield|Transfiguration of Soul",
        nameShort: "uil"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Tenacity",
        nameDetailed: "5% increased maximum Life|Transfiguration of Body",
        nameShort: "Ten"
    },
    {
        oil1: "Clear Oil",
        oil2: "Azure Oil",
        oil3: "Golden Oil",
        name: "Cleansed Thoughts",
        nameDetailed: "Chaos Resistance is doubled",
        nameShort: "lean"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Violet Oil",
        name: "Hardened Scars",
        nameDetailed: "15% increased Life Recovery from Flasks|25% less Damage over Time taken during Effect of any Life Flask",
        nameShort: "Sc"
    },
    {
        oil1: "Black Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Way of the Warrior",
        nameDetailed: "+30 to Strength|16% increased Melee Damage|16% increased Armour|+16 to maximum Life",
        nameShort: "Way"
    },
    {
        oil1: "Amber Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Mystic Talents",
        nameDetailed: "+30 to Intelligence|16% increased Spell Damage|25% increased Mana Regeneration Rate|+14 to maximum Energy Shield",
        nameShort: "c T"
    },
    {
        oil1: "Black Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Crusader",
        nameDetailed: "8% increased maximum Mana|Transfiguration of Mind",
        nameShort: "usa"
    },
    {
        oil1: "Violet Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Aspect of Stone",
        nameDetailed: "20% chance to Avoid Physical Damage from Hits",
        nameShort: "Ston"
    },
    {
        oil1: "Clear Oil",
        oil2: "Violet Oil",
        oil3: "Golden Oil",
        name: "Persistence",
        nameDetailed: "-10 Physical Damage taken from Hits|-1 Physical Damage taken from Hits per Level",
        nameShort: "sis"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Deadly Inclinations",
        nameDetailed: "+30 to Dexterity|16% increased Projectile Damage|18% increased Evasion Rating|+12 to maximum Life",
        nameShort: "y I"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Indigo Oil",
        name: "Relentless",
        nameDetailed: "25% increased Physical Damage|Regenerate 1% of Life per second if you have Stunned an Enemy Recently",
        nameShort: "lentl"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Crimson Oil",
        oil3: "Silver Oil",
        name: "Lord of the Dead",
        nameDetailed: "+1 to Maximum number of Skeletons|+1 to Maximum number of Raised Zombies|Minions have 15% increased maximum Life|Minions deal 20% increased Damage",
        nameShort: "Lor"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Amber Oil",
        name: "Path of the Warrior",
        nameDetailed: "+20 to Strength|16% increased Physical Damage|+50 to Armour",
        nameShort: "e Warr"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Adder's Touch",
        nameDetailed: "Critical Strikes with Daggers Poison the Enemy|+25% to Damage over Time Multiplier for Poison from Critical Strikes",
        nameShort: "Add"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Indigo Oil",
        oil3: "Black Oil",
        name: "Mark the Prey",
        nameDetailed: "Marked Enemy takes 10% increased Damage|Marked Enemy has 10% reduced Accuracy Rating",
        nameShort: "ey"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Crimson Oil",
        name: "Successive Detonations",
        nameDetailed: "10% increased Critical Strike Chance for each Mine Detonated|Recently, up to 100%|+4% to Critical Strike Multiplier for each Mine Detonated|Recently, up to 40%",
        nameShort: "cc"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Violet Oil",
        name: "Razor's Edge",
        nameDetailed: "35% increased Physical Damage with Swords|Sword Attacks deal 35% increased Damage with Ailments|Overwhelm 20% Physical Damage Reduction",
        nameShort: "zo"
    },
    {
        oil1: "Clear Oil",
        oil2: "Violet Oil",
        oil3: "Black Oil",
        name: "Acuity",
        nameDetailed: "20% increased Global Accuracy Rating|6% increased Attack Speed|+100 to Accuracy Rating",
        nameShort: "Acu"
    },
    {
        oil1: "Teal Oil",
        oil2: "Azure Oil",
        oil3: "Violet Oil",
        name: "Sacrifice",
        nameDetailed: "Minions have 20% increased maximum Life|Minions Regenerate 1% of Life per second|Regenerate 1% of Life per second",
        nameShort: "Sac"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Crimson Oil",
        name: "Whirling Barrier",
        nameDetailed: "+6% Chance to Block Attack Damage while wielding a Staff|+6% Chance to Block Spell Damage while wielding a Staff|20% chance to gain a Power Charge when you Block",
        nameShort: "rl"
    },
    {
        oil1: "Clear Oil",
        oil2: "Indigo Oil",
        oil3: "Silver Oil",
        name: "Force Shaper",
        nameDetailed: "Gain 10% of Physical Damage as Extra Chaos Damage|4% increased Attack and Cast Speed",
        nameShort: "rce S"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "Teal Oil",
        name: "Mystic Bulwark",
        nameDetailed: "6% Chance to Block Spell Damage|1% increased Mana Regeneration Rate per 1% Chance to Block Spell Damage",
        nameShort: "c Bu"
    },
    {
        oil1: "Amber Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Command of Steel",
        nameDetailed: "+5% Chance to Block Attack Damage while holding a Shield|30% increased Attack Damage while holding a Shield",
        nameShort: "nd o"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Black Oil",
        name: "Combat Stamina",
        nameDetailed: "Regenerate 1% of Life per second|20% increased Armour|5% increased maximum Life",
        nameShort: "omb"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Careful Conservationist",
        nameDetailed: "Flasks applied to you have 5% increased Effect|10% reduced Flask Charges used|20% increased Flask Charges gained if you've dealt a Critical Strike Recently",
        nameShort: "ref"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Crimson Oil",
        name: "Primal Manifestation",
        nameDetailed: "30% increased Totem Damage|30% increased Totem Life|50% increased Totem Duration",
        nameShort: "l M"
    },
    {
        oil1: "Violet Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Arcane Capacitor",
        nameDetailed: "15% increased maximum Mana|10% chance to gain Arcane Surge when you Kill an Enemy|10% increased Effect of Arcane Surge on you per|200 Mana spent Recently, up to 50%",
        nameShort: "Cap"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Silver Oil",
        name: "Counterweight",
        nameDetailed: "60% increased Global Critical Strike Chance while wielding a Staff|+30% to Global Critical Strike Multiplier while wielding a Staff",
        nameShort: "rw"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Righteous Army",
        nameDetailed: "Minions deal 20% increased Damage|Minions Regenerate 1% of Life per second|Regenerate 1% of Life per second",
        nameShort: "s A"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Verdant Oil",
        name: "Fending",
        nameDetailed: "25% increased Knockback Distance|15% chance to Knock Enemies Back on hit",
        nameShort: "Fen"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Crimson Oil",
        name: "Toxic Strikes",
        nameDetailed: "15% chance to Poison on Hit|+15% to Damage over Time Multiplier for Poison",
        nameShort: "xic"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Resourcefulness",
        nameDetailed: "5% increased maximum Life|10% increased maximum Energy Shield|+8% chance to Suppress Spell Damage",
        nameShort: "Res"
    },
    {
        oil1: "Clear Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "Arcanist's Dominion",
        nameDetailed: "+20 to Intelligence|5% increased Cast Speed|20% increased Spell Damage",
        nameShort: "t'"
    },
    {
        oil1: "Teal Oil",
        oil2: "Azure Oil",
        oil3: "Azure Oil",
        name: "Cannibalistic Rite",
        nameDetailed: "30% increased Damage with Skills that Cost Life|Recover 2% of Life on Kill if you've Spent Life Recently|10% reduced Life Cost of Skills",
        nameShort: "Can"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Azure Oil",
        oil3: "Azure Oil",
        name: "Claws of the Magpie",
        nameDetailed: "Claw Attacks deal 25% increased Damage with Hits and Ailments|10% increased Attack Speed with Claws|25% chance to Steal Power, Frenzy, and Endurance Charges on Hit with Claws",
        nameShort: "gp"
    },
    {
        oil1: "Clear Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Retribution",
        nameDetailed: "+10 to Strength and Intelligence|15% increased Damage|5% increased Attack and Cast Speed|Minions deal 15% increased Damage",
        nameShort: "etr"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Golden Oil",
        name: "Spiritual Command",
        nameDetailed: "Minions have 8% increased Attack Speed|Increases and Reductions to Minion Attack Speed also affect you|Minions have 8% increased Cast Speed",
        nameShort: "ual C"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Coldhearted Calculation",
        nameDetailed: "20% increased Mana Regeneration Rate|+20 to Intelligence|12% increased Damage",
        nameShort: "dh"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Violet Oil",
        name: "Soul Siphon",
        nameDetailed: "18% increased maximum Mana|Gain 10 Mana per Enemy Killed|+20 to maximum Mana",
        nameShort: "l Si"
    },
    {
        oil1: "Teal Oil",
        oil2: "Violet Oil",
        oil3: "Black Oil",
        name: "Essence Sap",
        nameDetailed: "0.5% of Attack Damage Leeched as Mana|50% increased Maximum total Mana Recovery per second from Leech|100% increased total Recovery per second from Mana Leech",
        nameShort: "ce Sa"
    },
    {
        oil1: "Clear Oil",
        oil2: "Azure Oil",
        oil3: "Opalescent Oil",
        name: "Strong Arm",
        nameDetailed: "+20 to Strength|25% increased Physical Damage with One Handed Melee Weapons|5% increased Attack Speed with One Handed Melee Weapons|Attacks with One Handed Melee Weapons deal 25% increased Damage with Ailments",
        nameShort: "Stro"
    },
    {
        oil1: "Azure Oil",
        oil2: "Violet Oil",
        oil3: "Crimson Oil",
        name: "Light Eater",
        nameDetailed: "0.8% of Spell Damage Leeched as Energy Shield|30% increased Maximum total Energy Shield Recovery per second from Leech|24% increased Damage while on Full Energy Shield",
        nameShort: "Eat"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Retaliation",
        nameDetailed: "Attack Skills deal 20% increased Damage while holding a Shield|60% increased Defences from Equipped Shield|8% increased Attack Speed while holding a Shield",
        nameShort: "eta"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Violet Oil",
        oil3: "Black Oil",
        name: "Mental Rapidity",
        nameDetailed: "10% increased Cast Speed|30% increased Mana Regeneration Rate",
        nameShort: "Men"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Crimson Oil",
        oil3: "Golden Oil",
        name: "Arcane Expanse",
        nameDetailed: "Spell Skills have 20% increased Area of Effect",
        nameShort: "xpa"
    },
    {
        oil1: "Amber Oil",
        oil2: "Azure Oil",
        oil3: "Crimson Oil",
        name: "Utmost Might",
        nameDetailed: "+40 to Strength|8% increased Strength",
        nameShort: "st M"
    },
    {
        oil1: "Azure Oil",
        oil2: "Violet Oil",
        oil3: "Violet Oil",
        name: "Courage",
        nameDetailed: "30% increased Armour if you have been Hit Recently|30% increased Evasion Rating if you haven't been Hit Recently|+15% chance to Suppress Spell Damage if you've Hit an Enemy Recently",
        nameShort: "rag"
    },
    {
        oil1: "Amber Oil",
        oil2: "Violet Oil",
        oil3: "Crimson Oil",
        name: "Utmost Intellect",
        nameDetailed: "+40 to Intelligence|8% increased Intelligence",
        nameShort: "t I"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Crimson Oil",
        name: "Precision",
        nameDetailed: "+20 to Dexterity|10% increased Global Accuracy Rating|6% increased Attack and Cast Speed",
        nameShort: "eci"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Crimson Oil",
        name: "Hatchet Master",
        nameDetailed: "Axe Attacks deal 24% increased Damage with Hits and Ailments|10% increased Attack Speed with Axes|20% chance to gain Onslaught for 4 seconds on Kill",
        nameShort: "Hat"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "Golden Oil",
        name: "Quick Recovery",
        nameDetailed: "7% increased maximum Life|20% increased Mana Regeneration Rate|Regenerate 0.8% of Life per second",
        nameShort: "k R"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Indigo Oil",
        oil3: "Silver Oil",
        name: "Vanquisher",
        nameDetailed: "40% increased Physical Damage|Crush Enemies for 4 seconds when you Hit them while they are on Full Life",
        nameShort: "Van"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Teal Oil",
        name: "Thrill Killer",
        nameDetailed: "16% increased maximum Mana|Recover 2% of Mana on Kill",
        nameShort: "hri"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Violet Oil",
        name: "Silent Steps",
        nameDetailed: "20% increased Evasion Rating|40% increased Blind Effect",
        nameShort: "ps"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Black Oil",
        name: "Will of Blades",
        nameDetailed: "20% increased Physical Damage|40% increased Critical Strike Chance",
        nameShort: "ll o"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Violet Oil",
        name: "Totemic Zeal",
        nameDetailed: "30% increased Totem Placement speed|Spells Cast by Totems have 8% increased Cast Speed|Attacks used by Totems have 10% increased Attack Speed",
        nameShort: "Ze"
    },
    {
        oil1: "Clear Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Soul of Steel",
        nameDetailed: "30% increased Armour|+1% to all maximum Elemental Resistances|+150 to Armour",
        nameShort: "f S"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Infused",
        nameDetailed: "+1 to Maximum Power Charges",
        nameShort: "nfus"
    },
    {
        oil1: "Violet Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Disintegration",
        nameDetailed: "60% increased Critical Strike Chance with Wands|+30% to Critical Strike Multiplier with Wands|+20 to Intelligence",
        nameShort: "teg"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Violet Oil",
        name: "Freedom of Movement",
        nameDetailed: "10% increased Movement Speed while Phasing|40% increased Evasion Rating while Phasing|+20 to Dexterity",
        nameShort: "Mo"
    },
    {
        oil1: "Teal Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "True Strike",
        nameDetailed: "+15% to Critical Strike Multiplier|45% increased Critical Strike Chance",
        nameShort: "Tru"
    },
    {
        oil1: "Violet Oil",
        oil2: "Crimson Oil",
        oil3: "Silver Oil",
        name: "Indomitable Army",
        nameDetailed: "Minions have +15% to all Elemental Resistances|Minions have 15% additional Physical Damage Reduction|Moving while Bleeding doesn't cause Minions to take extra Damage",
        nameShort: "Ind"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Black Oil",
        name: "Trickery",
        nameDetailed: "20% increased Critical Strike Chance|20% increased Damage|+10 to Dexterity and Intelligence",
        nameShort: "cke"
    },
    {
        oil1: "Azure Oil",
        oil2: "Azure Oil",
        oil3: "Golden Oil",
        name: "Sanctum of Thought",
        nameDetailed: "You take 30% reduced Extra Damage from Critical Strikes|18% increased Armour|12% increased maximum Energy Shield",
        nameShort: "tum"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Silver Oil",
        name: "Life Raker",
        nameDetailed: "12% increased Attack Speed with Claws|12% increased Accuracy Rating with Claws|Gain 6 Life per Enemy Hit with Attacks",
        nameShort: "Rak"
    },
    {
        oil1: "Azure Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Serpent Stance",
        nameDetailed: "40% increased Global Critical Strike Chance while wielding a Staff|+30% to Global Critical Strike Multiplier while wielding a Staff|+5% Chance to Block Attack Damage if you've dealt a Critical Strike Recently",
        nameShort: "t St"
    },
    {
        oil1: "Clear Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Shaper",
        nameDetailed: "40% increased Mana Regeneration Rate|Regenerate 1% of Life per second",
        nameShort: "hape"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Opalescent Oil",
        name: "Diamond Skin",
        nameDetailed: "+15% to all Elemental Resistances",
        nameShort: "Dia"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Savagery",
        nameDetailed: "+1 to Maximum Frenzy Charges",
        nameShort: "ager"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Indigo Oil",
        oil3: "Crimson Oil",
        name: "Relentless Pursuit",
        nameDetailed: "10% increased Attack Speed if you've cast a Mark Spell Recently|10% increased Movement Speed if you've cast a Mark Spell Recently",
        nameShort: "urs"
    },
    {
        oil1: "Clear Oil",
        oil2: "Azure Oil",
        oil3: "Azure Oil",
        name: "Prodigal Perfection",
        nameDetailed: "20% increased maximum Mana|2% increased Spell Damage per 100 Maximum Mana, up to 40%",
        nameShort: "ga"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Violet Oil",
        oil3: "Crimson Oil",
        name: "Butchery",
        nameDetailed: "25% increased Physical Damage with Two Handed Melee Weapons|+20 to Strength|5% increased Attack Speed with Two Handed Melee Weapons|Attacks with Two Handed Melee Weapons deal 25% increased Damage with Ailments",
        nameShort: "But"
    },
    {
        oil1: "Amber Oil",
        oil2: "Azure Oil",
        oil3: "Violet Oil",
        name: "Kinetic Impacts",
        nameDetailed: "25% increased Physical Damage with Two Handed Melee Weapons|Attacks with Two Handed Melee Weapons deal 25% increased Damage with Ailments|5% chance to deal Double Damage|10% chance to double Stun Duration",
        nameShort: "Kine"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Azure Oil",
        name: "Martial Experience",
        nameDetailed: "30% increased Physical Damage with Two Handed Melee Weapons|Attacks with Two Handed Melee Weapons deal 30% increased Damage with Ailments|100% increased total Recovery per second from Life Leech|Overwhelm 12% Physical Damage Reduction",
        nameShort: "tia"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Multishot",
        nameDetailed: "Attacks fire an additional Projectile",
        nameShort: "Mul"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Teal Oil",
        name: "Ironwood",
        nameDetailed: "Totems gain +30% to all Elemental Resistances|+150 Armour per Summoned Totem|30% increased Totem Life",
        nameShort: "Ir"
    },
    {
        oil1: "Violet Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Dismembering",
        nameDetailed: "40% increased Melee Critical Strike Chance|+20% to Melee Critical Strike Multiplier|20% chance to Maim Enemies on Critical Strike with Attacks",
        nameShort: "be"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Azure Oil",
        name: "Sentinel",
        nameDetailed: "24% increased Evasion Rating and Armour|+10% to all Elemental Resistances",
        nameShort: "Sen"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Azure Oil",
        oil3: "Opalescent Oil",
        name: "Explosive Impact",
        nameDetailed: "30% increased Fire Damage|12% increased Area of Effect",
        nameShort: "e Im"
    },
    {
        oil1: "Black Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Crackling Speed",
        nameDetailed: "24% increased Lightning Damage|8% increased Cast Speed",
        nameShort: "kl"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Golden Oil",
        name: "Lava Lash",
        nameDetailed: "30% increased Fire Damage with Attack Skills|Damage with Weapons Penetrates 8% Fire Resistance",
        nameShort: "Lav"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Verdant Oil",
        name: "Spirit Void",
        nameDetailed: "60% increased total Recovery per second from Mana Leech|0.8% of Attack Damage Leeched as Mana|25% increased Maximum total Mana Recovery per second from Leech",
        nameShort: "it V"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Azure Oil",
        name: "Dreamer",
        nameDetailed: "30% increased Mana Regeneration Rate|10% reduced Mana Cost of Skills",
        nameShort: "Dre"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Amber Oil",
        name: "Might",
        nameDetailed: "+30 to Strength",
        nameShort: "ight"
    },
    {
        oil1: "Amber Oil",
        oil2: "Azure Oil",
        oil3: "Silver Oil",
        name: "Searing Heat",
        nameDetailed: "Ignites you inflict deal Damage 15% faster",
        nameShort: "g H"
    },
    {
        oil1: "Azure Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Reflexes",
        nameDetailed: "30% increased Evasion Rating|+100 to Evasion Rating|+10% chance to Suppress Spell Damage",
        nameShort: "Ref"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Ash, Frost and Storm",
        nameDetailed: "30% increased Elemental Damage|30% increased Effect of Non-Damaging Ailments|10% chance to Freeze, Shock and Ignite",
        nameShort: "h,"
    },
    {
        oil1: "Amber Oil",
        oil2: "Azure Oil",
        oil3: "Azure Oil",
        name: "Explosive Runes",
        nameDetailed: "30% increased Brand Attachment range|+30% to Brand Critical Strike Multiplier",
        nameShort: "ve R"
    },
    {
        oil1: "Amber Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Measured Fury",
        nameDetailed: "Warcries Exert 1 additional Attack",
        nameShort: "Mea"
    },
    {
        oil1: "Azure Oil",
        oil2: "Azure Oil",
        oil3: "Violet Oil",
        name: "Smashing Strikes",
        nameDetailed: "Staff Attacks deal 30% increased Damage with Hits and Ailments|10% chance to gain an Endurance Charge on Melee Critical Strike|30% increased Critical Strike Chance with Staves",
        nameShort: "Sm"
    },
    {
        oil1: "Clear Oil",
        oil2: "Violet Oil",
        oil3: "Crimson Oil",
        name: "Flaying",
        nameDetailed: "Dagger Attacks deal 24% increased Damage with Hits and Ailments|12% increased Attack Speed with Daggers|18% increased Accuracy Rating with Daggers",
        nameShort: "ayi"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Opalescent Oil",
        name: "Destroyer",
        nameDetailed: "25% increased Physical Damage with Two Handed Melee Weapons|5% increased Attack Speed with Two Handed Melee Weapons|Attacks with Two Handed Melee Weapons deal 25% increased Damage with Ailments|25% increased Stun Duration with Two Handed Melee Weapons on Enemies",
        nameShort: "oy"
    },
    {
        oil1: "Teal Oil",
        oil2: "Indigo Oil",
        oil3: "Indigo Oil",
        name: "Excess Sustenance",
        nameDetailed: "15% chance to gain 200 Life on Hit with Attacks",
        nameShort: "Sus"
    },
    {
        oil1: "Azure Oil",
        oil2: "Azure Oil",
        oil3: "Opalescent Oil",
        name: "Heart of Darkness",
        nameDetailed: "27% increased Chaos Damage|Damage Penetrates 7% Chaos Resistance",
        nameShort: "kn"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Unnatural Calm",
        nameDetailed: "18% increased maximum Energy Shield|+1% to maximum Lightning Resistance|15% increased Energy Shield Recharge Rate",
        nameShort: "lm"
    },
    {
        oil1: "Clear Oil",
        oil2: "Azure Oil",
        oil3: "Silver Oil",
        name: "Shaman's Dominion",
        nameDetailed: "+20% to Critical Strike Multiplier with Totem Skills|60% increased Critical Strike Chance with Totem Skills",
        nameShort: "n'"
    },
    {
        oil1: "Azure Oil",
        oil2: "Azure Oil",
        oil3: "Crimson Oil",
        name: "Holy Dominion",
        nameDetailed: "24% increased Elemental Damage|+12% to all Elemental Resistances|10% chance to Freeze, Shock and Ignite",
        nameShort: "Dom"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Amber Oil",
        name: "Wisdom of the Glade",
        nameDetailed: "+30 to Intelligence",
        nameShort: "m o"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Golden Oil",
        name: "Goliath",
        nameDetailed: "50% chance to double Stun Duration",
        nameShort: "oli"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Teal Oil",
        name: "Mind Drinker",
        nameDetailed: "20% increased maximum Mana|Recover 2% of Mana on Kill",
        nameShort: "Mind"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Azure Oil",
        oil3: "Violet Oil",
        name: "Entrench",
        nameDetailed: "+12% chance to Suppress Spell Damage|Life Flasks gain 3 Charges when you Suppress Spell Damage",
        nameShort: "tre"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Silver Oil",
        name: "High Explosives",
        nameDetailed: "60% increased Critical Strike Chance with Traps|+20% to Critical Strike Multiplier with Traps|15% chance to gain a Power Charge when your Trap is triggered by an Enemy",
        nameShort: "h E"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Verdant Oil",
        name: "Essence Infusion",
        nameDetailed: "30% increased Energy Shield Recharge Rate|15% faster start of Energy Shield Recharge",
        nameShort: "ce I"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Opalescent Oil",
        name: "Divine Wrath",
        nameDetailed: "Gain 5% of Physical Damage as Extra Lightning Damage|Damage Penetrates 5% Lightning Resistance",
        nameShort: "Wra"
    },
    {
        oil1: "Teal Oil",
        oil2: "Violet Oil",
        oil3: "Opalescent Oil",
        name: "Dark Arts",
        nameDetailed: "+5% Chance to Block Attack Damage while Dual Wielding|+5% Chance to Block Spell Damage while Dual Wielding|10% increased Attack Speed while Dual Wielding|10% increased Cast Speed while Dual Wielding",
        nameShort: "k A"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Wasting",
        nameDetailed: "+10% to Chaos Damage over Time Multiplier|+17% to Chaos Resistance",
        nameShort: "Was"
    },
    {
        oil1: "Teal Oil",
        oil2: "Violet Oil",
        oil3: "Violet Oil",
        name: "Unstable Munitions",
        nameDetailed: "30% increased Trap Damage|12% increased Area of Effect|50% increased Trap Trigger Area of Effect",
        nameShort: "Uns"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Crimson Oil",
        name: "Farsight",
        nameDetailed: "24% increased Damage with Bows|24% increased Damage Over Time with Bow Skills|16% increased Accuracy Rating with Bows|6% increased Attack Speed with Bows",
        nameShort: "Far"
    },
    {
        oil1: "Teal Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Ribcage Crusher",
        nameDetailed: "Mace or Sceptre Attacks deal 24% increased Damage with Hits and Ailments|6% increased Attack Speed with Maces or Sceptres|15% increased Area of Effect if you have Stunned an Enemy Recently",
        nameShort: "bc"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Black Oil",
        name: "Divine Judgement",
        nameDetailed: "50% increased Elemental Damage",
        nameShort: "e J"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Opalescent Oil",
        name: "Potency of Will",
        nameDetailed: "25% increased Skill Effect Duration",
        nameShort: "f W"
    },
    {
        oil1: "Clear Oil",
        oil2: "Crimson Oil",
        oil3: "Golden Oil",
        name: "Druidic Rite",
        nameDetailed: "20% increased maximum Mana|20% increased Flask Effect Duration",
        nameShort: "Dru"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Azure Oil",
        name: "Executioner",
        nameDetailed: "60% increased Damage with Hits against Enemies that are on Low Life|15% increased Area of Effect if you've Killed Recently",
        nameShort: "Exe"
    },
    {
        oil1: "Teal Oil",
        oil2: "Azure Oil",
        oil3: "Black Oil",
        name: "Finesse",
        nameDetailed: "+20 to Dexterity|8% increased Attack Speed|15% increased Global Accuracy Rating",
        nameShort: "Fine"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Crimson Oil",
        oil3: "Golden Oil",
        name: "Heart of Oak",
        nameDetailed: "20% chance to Avoid being Stunned|8% increased maximum Life|Regenerate 2% of Life per Second if you've used a Life Flask in the past 10 seconds",
        nameShort: "Oa"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Silver Oil",
        name: "Winter Spirit",
        nameDetailed: "Gain 10% of Physical Damage as Extra Cold Damage",
        nameShort: "r Sp"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Silver Oil",
        name: "Tempest Blast",
        nameDetailed: "Gain 20% of Wand Physical Damage as Extra Lightning Damage",
        nameShort: "Tem"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Indigo Oil",
        name: "Clever Thief",
        nameDetailed: "1% of Attack Damage Leeched as Mana|1% of Attack Damage Leeched as Life",
        nameShort: "er T"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Verdant Oil",
        name: "Path of the Hunter",
        nameDetailed: "+20 to Dexterity|16% increased Projectile Damage|+100 to Accuracy Rating",
        nameShort: "e Hun"
    },
    {
        oil1: "Amber Oil",
        oil2: "Indigo Oil",
        oil3: "Silver Oil",
        name: "Deflection",
        nameDetailed: "+5% Chance to Block Attack Damage while holding a Shield|25% chance to gain an Endurance Charge when you Block",
        nameShort: "Defl"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Defiled Forces",
        nameDetailed: "Remove Elemental Ailments when you Cast a Curse Spell|Refresh Duration of Ignite, Chill and Shock on Enemies you Curse",
        nameShort: "fil"
    },
    {
        oil1: "Azure Oil",
        oil2: "Violet Oil",
        oil3: "Black Oil",
        name: "Adamant",
        nameDetailed: "25% increased Armour|Remove Bleeding when you use a Guard Skill|Remove Corrupted Blood when you use a Guard Skill|Guard Skills have 25% increased Duration",
        nameShort: "Ada"
    },
    {
        oil1: "Clear Oil",
        oil2: "Indigo Oil",
        oil3: "Opalescent Oil",
        name: "Split Shot",
        nameDetailed: "Projectiles have 50% chance for an additional Projectile when Forking",
        nameShort: "Spl"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Natural Authority",
        nameDetailed: "20% increased Warcry Buff Effect|Enemies Taunted by your Warcries take 8% increased Damage",
        nameShort: "Au"
    },
    {
        oil1: "Azure Oil",
        oil2: "Azure Oil",
        oil3: "Black Oil",
        name: "Sanctity",
        nameDetailed: "+10 to Strength and Intelligence|20% increased Armour|10% increased maximum Energy Shield|Regenerate 1% of Life per second",
        nameShort: "ncti"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Violet Oil",
        oil3: "Opalescent Oil",
        name: "Serpentine Spellslinger",
        nameDetailed: "Spell Skills have +12% to Damage over Time Multiplier for Poison|Enemies Poisoned by you have -5% to Chaos Resistance",
        nameShort: "ls"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "Black Oil",
        name: "Warrior's Blood",
        nameDetailed: "Regenerate 1.8% of Life per second|+20 to Strength|20% increased Stun Threshold",
        nameShort: "ior'"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Crimson Oil",
        name: "Entropy",
        nameDetailed: "23% increased Damage over Time|10% increased Skill Effect Duration",
        nameShort: "py"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Verdant Oil",
        name: "Quickstep",
        nameDetailed: "6% increased Movement Speed|+10% chance to Suppress Spell Damage",
        nameShort: "icks"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Tolerance",
        nameDetailed: "30% chance to Avoid being Poisoned|30% chance to Avoid Bleeding|+19% to Chaos Resistance",
        nameShort: "Tol"
    },
    {
        oil1: "Azure Oil",
        oil2: "Violet Oil",
        oil3: "Opalescent Oil",
        name: "Ballistics",
        nameDetailed: "20% increased Projectile Damage|+20 to Dexterity|20% increased Projectile Speed",
        nameShort: "cs"
    },
    {
        oil1: "Silver Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Sovereignty",
        nameDetailed: "12% increased Mana Reservation Efficiency of Skills|10% increased effect of Non-Curse Auras from your Skills",
        nameShort: "ov"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Golden Oil",
        name: "Disciple of the Slaughter",
        nameDetailed: "+1 to Minimum Frenzy Charges|8% chance to gain a Frenzy Charge on Kill|8% increased Damage per Frenzy Charge",
        nameShort: "e Sl"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Barbarism",
        nameDetailed: "8% increased maximum Life|+1% to maximum Fire Resistance|+8% to Fire Resistance",
        nameShort: "arb"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Amber Oil",
        name: "Thief's Craft",
        nameDetailed: "+30 to Intelligence",
        nameShort: "f'"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Violet Oil",
        oil3: "Violet Oil",
        name: "Grave Intentions",
        nameDetailed: "Minions have +27% to Chaos Resistance|Minions gain 20% of Maximum Life as Extra Maximum Energy Shield",
        nameShort: "e I"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Indigo Oil",
        name: "Bastion Breaker",
        nameDetailed: "30% increased Attack Physical Damage|Overwhelm 20% Physical Damage Reduction",
        nameShort: "on B"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Azure Oil",
        oil3: "Golden Oil",
        name: "Breath of Flames",
        nameDetailed: "30% increased Fire Damage|+10% to Fire Damage over Time Multiplier",
        nameShort: "mes"
    },
    {
        oil1: "Black Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Inveterate",
        nameDetailed: "+15% chance to Suppress Spell Damage|Prevent +3% of Suppressed Spell Damage",
        nameShort: "nve"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Verdant Oil",
        name: "Ancestral Knowledge",
        nameDetailed: "+30 to Intelligence",
        nameShort: "wl"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Soul Thief",
        nameDetailed: "10% increased maximum Energy Shield|15% increased Evasion Rating|Recover 2% of Energy Shield on Kill",
        nameShort: "hie"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "Azure Oil",
        name: "Steelwood Stance",
        nameDetailed: "Staff Attacks deal 30% increased Damage with Hits and Ailments|+800 Armour if you've Blocked Recently|+8% Chance to Block Attack Damage while wielding a Staff",
        nameShort: "elw"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "One With Nature",
        nameDetailed: "24% increased Elemental Damage with Attack Skills|24% increased Critical Strike Chance for Attacks|+8% to all Elemental Resistances",
        nameShort: "Wit"
    },
    {
        oil1: "Teal Oil",
        oil2: "Crimson Oil",
        oil3: "Silver Oil",
        name: "Blunt Trauma",
        nameDetailed: "Knocks Back Enemies if you get a Critical Strike with a Staff|40% increased Critical Strike Chance with Staves|+20% to Critical Strike Multiplier with Staves",
        nameShort: "Blu"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Azure Oil",
        name: "Arsonist",
        nameDetailed: "Regenerate 1.2% of Life per second|+10% to Fire Damage over Time Multiplier",
        nameShort: "Ars"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Azure Oil",
        oil3: "Crimson Oil",
        name: "Flash Freeze",
        nameDetailed: "25% increased Cold Damage|30% increased Effect of Cold Ailments|15% chance to Freeze",
        nameShort: "ez"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Black Oil",
        name: "Divine Fury",
        nameDetailed: "Gain 5% of Physical Damage as Extra Fire Damage|Damage Penetrates 5% Fire Resistance",
        nameShort: "e Fu"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Opalescent Oil",
        name: "Berserking",
        nameDetailed: "6% increased Attack Speed|+10 to Maximum Rage",
        nameShort: "Ber"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Silver Oil",
        name: "Fangs of Frost",
        nameDetailed: "30% increased Cold Damage with Attack Skills|Damage with Weapons Penetrates 8% Cold Resistance",
        nameShort: "gs of F"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Crimson Oil",
        name: "Bladedancer",
        nameDetailed: "Sword Attacks deal 30% increased Damage with Hits and Ailments|+0.3 metres to Melee Strike Range with Swords",
        nameShort: "ded"
    },
    {
        oil1: "Teal Oil",
        oil2: "Indigo Oil",
        oil3: "Golden Oil",
        name: "Veteran Soldier",
        nameDetailed: "+15% to Physical Damage over Time Multiplier|+25 to maximum Life",
        nameShort: "Vet"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Teal Oil",
        name: "Robust",
        nameDetailed: "Regenerate 1.2% of Life per second|Regenerate 10 Life per second",
        nameShort: "ob"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Azure Oil",
        name: "Poisonous Fangs",
        nameDetailed: "+10% to Damage over Time Multiplier for Poison|Claw Attacks deal 25% increased Damage with Ailments|6% increased Attack Speed with Claws",
        nameShort: "Poi"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Crimson Oil",
        name: "Warrior Training",
        nameDetailed: "+0.2 metres to Melee Strike Range|Melee Skills have 12% increased Area of Effect",
        nameShort: "or T"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Verdant Oil",
        name: "Path of the Savant",
        nameDetailed: "+20 to Intelligence|+20 to maximum Mana|16% increased Spell Damage",
        nameShort: "Pat"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Opalescent Oil",
        name: "Juggernaut",
        nameDetailed: "8% increased maximum Life|24% increased Armour",
        nameShort: "Jug"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Violet Oil",
        oil3: "Black Oil",
        name: "Aggressive Bastion",
        nameDetailed: "30% increased Physical Attack Damage while holding a Shield|+5% Chance to Block Attack Damage while holding a Shield|Attack Skills deal 30% increased Damage with Ailments while holding a Shield|10% chance to gain an Endurance Charge on Kill while holding a Shield",
        nameShort: "Agg"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Verdant Oil",
        name: "Prowess",
        nameDetailed: "+30 to Strength",
        nameShort: "wes"
    },
    {
        oil1: "Amber Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Fatal Blade",
        nameDetailed: "+25% to Critical Strike Multiplier with Swords|50% increased Critical Strike Chance with Swords",
        nameShort: "atal B"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Art of the Gladiator",
        nameDetailed: "10% increased Attack Speed|+20 to Dexterity|Ignore all Movement Penalties from Armour|10% increased Global Accuracy Rating",
        nameShort: "Art o"
    },
    {
        oil1: "Golden Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Whispers of Doom",
        nameDetailed: "You can apply an additional Curse",
        nameShort: "his"
    },
    {
        oil1: "Silver Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Prismatic Skin",
        nameDetailed: "+2% to all maximum Elemental Resistances",
        nameShort: "smat"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Azure Oil",
        oil3: "Azure Oil",
        name: "Bone Breaker",
        nameDetailed: "30% increased Physical Damage with Maces or Sceptres|12% increased Area of Effect|Mace or Sceptre Attacks deal 30% increased Damage with Ailments",
        nameShort: "Bone"
    },
    {
        oil1: "Amber Oil",
        oil2: "Violet Oil",
        oil3: "Violet Oil",
        name: "Intuition",
        nameDetailed: "5% increased maximum Life|+8% chance to Suppress Spell Damage|15% increased Evasion Rating",
        nameShort: "ntu"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Steadfast",
        nameDetailed: "+3 to maximum Fortification|Regenerate 0.1% of Life per second per Fortification",
        nameShort: "df"
    },
    {
        oil1: "Clear Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Endurance",
        nameDetailed: "+1 to Maximum Endurance Charges",
        nameShort: "dura"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Violet Oil",
        name: "Deep Thoughts",
        nameDetailed: "20% increased maximum Mana|20% increased Mana Regeneration Rate|+20 to Intelligence",
        nameShort: "p T"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Tribal Fury",
        nameDetailed: "Melee Strike Skills deal Splash Damage to surrounding targets",
        nameShort: "Trib"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Violet Oil",
        name: "Heavy Draw",
        nameDetailed: "30% increased Physical Damage with Bows|30% increased Damage Over Time with Bow Skills|50% increased Stun Duration with Bows on Enemies",
        nameShort: "vy"
    },
    {
        oil1: "Black Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Revenge of the Hunted",
        nameDetailed: "18% increased Evasion Rating|10% increased maximum Life|+10% chance to Suppress Spell Damage while on Full Life",
        nameShort: "even"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Black Oil",
        name: "Annihilation",
        nameDetailed: "+15% to Critical Strike Multiplier for Spell Damage|50% increased Critical Strike Chance for Spells",
        nameShort: "ih"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Teal Oil",
        name: "Fury Bolts",
        nameDetailed: "20% increased Projectile Damage|+20 to Strength|20% increased Projectile Speed",
        nameShort: "y B"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Azure Oil",
        name: "Elemental Focus",
        nameDetailed: "20% increased Elemental Damage|20% increased Duration of Elemental Ailments on Enemies|20% increased Effect of Non-Damaging Ailments",
        nameShort: "menta"
    },
    {
        oil1: "Teal Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Golem's Blood",
        nameDetailed: "Regenerate 1.6% of Life per second|10% increased maximum Life",
        nameShort: "m'"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Azure Oil",
        oil3: "Crimson Oil",
        name: "Clever Construction",
        nameDetailed: "10% Chance for Traps to Trigger an additional time",
        nameShort: "er C"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Crystal Skin",
        nameDetailed: "20% chance to Avoid Elemental Ailments|+1% to all maximum Elemental Resistances",
        nameShort: "Cry"
    },
    {
        oil1: "Amber Oil",
        oil2: "Crimson Oil",
        oil3: "Silver Oil",
        name: "Explosive Elements",
        nameDetailed: "Mine Damage Penetrates 10% Elemental Resistances",
        nameShort: "ve E"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Anointed Flesh",
        nameDetailed: "+1% to all maximum Elemental Resistances|20% reduced Elemental Ailment Duration on you|20% reduced Effect of Chill and Shock on you",
        nameShort: "Ano"
    },
    {
        oil1: "Amber Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Panopticon",
        nameDetailed: "Attack Skills have +1 to maximum number of Summoned Ballista Totems|50% increased Effect of Buffs your Ancestor Totems grant while Active|30% increased Totem Damage",
        nameShort: "Pan"
    },
    {
        oil1: "Silver Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Spiritual Aid",
        nameDetailed: "Increases and Reductions to Minion Damage also affect you",
        nameShort: "Ai"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Black Oil",
        name: "Cleaving",
        nameDetailed: "30% increased Physical Damage with Axes|Axe Attacks deal 30% increased Damage with Ailments|15% chance to Intimidate Enemies for 4 seconds on Hit with Attacks",
        nameShort: "avi"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Black Oil",
        name: "Defiance",
        nameDetailed: "Attack Skills deal 24% increased Damage while holding a Shield|+3% Chance to Block Attack Damage while holding a Shield|60% increased Defences from Equipped Shield",
        nameShort: "fia"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Violet Oil",
        oil3: "Golden Oil",
        name: "Written in Blood",
        nameDetailed: "10% increased maximum Life|10% increased maximum Energy Shield|+10 to Strength",
        nameShort: "Wri"
    },
    {
        oil1: "Amber Oil",
        oil2: "Violet Oil",
        oil3: "Opalescent Oil",
        name: "Throatseeker",
        nameDetailed: "+30% to Critical Strike Multiplier",
        nameShort: "oa"
    },
    {
        oil1: "Clear Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Purity of Flesh",
        nameDetailed: "10% increased maximum Life|+8% to Chaos Resistance|8% increased maximum Energy Shield",
        nameShort: "y o"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Azure Oil",
        name: "Battle Rouse",
        nameDetailed: "10% of Damage taken Recouped as Mana|15% increased maximum Mana",
        nameShort: "Bat"
    },
    {
        oil1: "Amber Oil",
        oil2: "Azure Oil",
        oil3: "Black Oil",
        name: "Ambidexterity",
        nameDetailed: "60% increased Attack Damage with Main Hand while Dual Wielding|30% increased Attack Speed with Off Hand while Dual Wielding",
        nameShort: "Amb"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Tireless",
        nameDetailed: "10% increased maximum Life|6% reduced Cost of Skills",
        nameShort: "Tir"
    },
    {
        oil1: "Black Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Assassination",
        nameDetailed: "+25% to Critical Strike Multiplier|25% increased Critical Strike Chance",
        nameShort: "sas"
    },
    {
        oil1: "Black Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Discipline and Training",
        nameDetailed: "+30 to maximum Life|10% increased maximum Life",
        nameShort: "e a"
    },
    {
        oil1: "Clear Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Vitality Void",
        nameDetailed: "60% increased total Recovery per second from Life Leech|0.8% of Attack Damage Leeched as Life|15% increased Maximum total Life Recovery per second from Leech",
        nameShort: "Vit"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Violet Oil",
        oil3: "Violet Oil",
        name: "Spinecruncher",
        nameDetailed: "30% increased Physical Damage with Maces or Sceptres|Mace or Sceptre Attacks deal 30% increased Damage with Ailments|60% increased Stun Duration against Enemies that are on Full Life",
        nameShort: "pin"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Teal Oil",
        name: "Deep Wisdom",
        nameDetailed: "+20 to Intelligence|+20 to maximum Mana|+20 to maximum Energy Shield",
        nameShort: "p W"
    },
    {
        oil1: "Azure Oil",
        oil2: "Crimson Oil",
        oil3: "Golden Oil",
        name: "Survivalist",
        nameDetailed: "24% increased Evasion Rating|+8% to all Elemental Resistances|+1% to maximum Cold Resistance",
        nameShort: "viv"
    },
    {
        oil1: "Violet Oil",
        oil2: "Violet Oil",
        oil3: "Silver Oil",
        name: "Merciless Skewering",
        nameDetailed: "15% chance to Impale Enemies on Hit with Attacks|Impale Damage dealt to Enemies Impaled by you Overwhelms 15% Physical Damage Reduction|5% increased Impale Effect",
        nameShort: "Mer"
    },
    {
        oil1: "Teal Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Essence Surge",
        nameDetailed: "+30 to maximum Energy Shield|20% faster start of Energy Shield Recharge",
        nameShort: "ce S"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Ravenous Horde",
        nameDetailed: "Minions have 30% increased Movement Speed|Minions have 30% chance to gain Onslaught for 4 seconds on Kill",
        nameShort: "Rav"
    },
    {
        oil1: "Amber Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Ethereal Feast",
        nameDetailed: "1% of Spell Damage Leeched as Energy Shield|40% increased Maximum total Energy Shield Recovery per second from Leech",
        nameShort: "Et"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Opalescent Oil",
        name: "Wrecking Ball",
        nameDetailed: "Attacks with Two Handed Melee Weapons deal 25% increased Damage with Hits and Ailments|10% increased Attack Speed with Two Handed Melee Weapons|40% increased Stun Duration with Two Handed Melee Weapons on Enemies",
        nameShort: "Wr"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Blood Drinker",
        nameDetailed: "10% increased maximum Life|Recover 2% of Life on Kill",
        nameShort: "od D"
    },
    {
        oil1: "Violet Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "Fire Walker",
        nameDetailed: "25% increased Fire Damage|+15% to Fire Resistance|5% increased Cast Speed with Fire Skills",
        nameShort: "re W"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Azure Oil",
        name: "Discord Artisan",
        nameDetailed: "15% increased Damage for each Herald affecting you|20% increased Effect of Herald Buffs on you",
        nameShort: "sco"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Heart of Ice",
        nameDetailed: "30% increased Cold Damage|Damage Penetrates 6% Cold Resistance",
        nameShort: "t of I"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Instability",
        nameDetailed: "+1 to Maximum Power Charges",
        nameShort: "abi"
    },
    {
        oil1: "Black Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Piercing Shots",
        nameDetailed: "Projectiles Pierce 2 additional Targets",
        nameShort: "Pi"
    },
    {
        oil1: "Amber Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Nimbleness",
        nameDetailed: "8% increased Cast Speed|+15% to Critical Strike Multiplier for Spell Damage",
        nameShort: "Nim"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Arcane Focus",
        nameDetailed: "20% increased maximum Energy Shield|10% faster start of Energy Shield Recharge|+10 to Intelligence",
        nameShort: "ane F"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "Opalescent Oil",
        name: "Dazzling Strikes",
        nameDetailed: "20% chance to Blind Enemies on Hit with Attacks|20% increased Blind Effect|50% increased Critical Strike Chance against Blinded Enemies",
        nameShort: "zz"
    },
    {
        oil1: "Azure Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Master of Blades",
        nameDetailed: "30% increased Physical Damage|+30 to Strength|Overwhelm 10% Physical Damage Reduction",
        nameShort: "r of B"
    },
    {
        oil1: "Teal Oil",
        oil2: "Indigo Oil",
        oil3: "Crimson Oil",
        name: "Harpooner",
        nameDetailed: "30% increased Effect of Impales you inflict with Two Handed Weapons on Non-Impaled Enemies|20% chance to Impale Enemies on Hit with Two Handed Weapons|50% increased Impale Duration",
        nameShort: "arp"
    },
    {
        oil1: "Teal Oil",
        oil2: "Indigo Oil",
        oil3: "Violet Oil",
        name: "Burning Brutality",
        nameDetailed: "+12% to Fire Damage over Time Multiplier with Attack Skills|6% increased Attack Speed",
        nameShort: "Bur"
    },
    {
        oil1: "Azure Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Frenetic",
        nameDetailed: "+1 to Maximum Frenzy Charges",
        nameShort: "Fre"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Golden Oil",
        name: "Claws of the Falcon",
        nameDetailed: "+40% to Critical Strike Multiplier with Claws|15% increased Accuracy Rating with Claws",
        nameShort: "Fal"
    },
    {
        oil1: "Amber Oil",
        oil2: "Azure Oil",
        oil3: "Golden Oil",
        name: "Doom Cast",
        nameDetailed: "60% increased Critical Strike Chance for Spells|+15% to Critical Strike Multiplier for Spell Damage",
        nameShort: "Do"
    },
    {
        oil1: "Violet Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Leadership",
        nameDetailed: "30% increased Area of Effect of Aura Skills|6% increased effect of Non-Curse Auras from your Skills",
        nameShort: "Lea"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Indigo Oil",
        name: "Replenishing Remedies",
        nameDetailed: "Life Flasks gain 2 Charges every 3 seconds|Mana Flasks gain 2 Charges every 3 seconds|15% increased Flask Charges gained",
        nameShort: "Rep"
    },
    {
        oil1: "Teal Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Breath of Rime",
        nameDetailed: "30% increased Cold Damage|50% increased Duration of Cold Ailments",
        nameShort: "f R"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Teal Oil",
        name: "Weathered Hunter",
        nameDetailed: "20% increased Global Accuracy Rating|+10% to all Elemental Resistances|+100 to Accuracy Rating",
        nameShort: "d H"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Foresight",
        nameDetailed: "+20 to maximum Energy Shield|14% increased maximum Energy Shield|10% increased Energy Shield Recharge Rate",
        nameShort: "esi"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Watchtowers",
        nameDetailed: "24% increased Totem Damage|Attack Skills have +1 to maximum number of Summoned Ballista Totems|1% increased Movement Speed per Summoned Totem",
        nameShort: "Wat"
    },
    {
        oil1: "Amber Oil",
        oil2: "Indigo Oil",
        oil3: "Golden Oil",
        name: "Presage",
        nameDetailed: "Herald Skills have 25% increased Area of Effect|20% increased Mana Reservation Efficiency of Herald Skills",
        nameShort: "res"
    },
    {
        oil1: "Amber Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Dirty Techniques",
        nameDetailed: "Damaging Ailments deal damage 15% faster",
        nameShort: "hn"
    },
    {
        oil1: "Violet Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Thick Skin",
        nameDetailed: "10% increased maximum Life|8% chance to Avoid Elemental Ailments",
        nameShort: "hic"
    },
    {
        oil1: "Amber Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Arcane Chemistry",
        nameDetailed: "15% increased maximum Mana|30% increased Mana Recovery from Flasks|Mana Flasks gain 1 Charge every 3 seconds",
        nameShort: "cane Ch"
    },
    {
        oil1: "Amber Oil",
        oil2: "Indigo Oil",
        oil3: "Opalescent Oil",
        name: "Seasoned Swordplay",
        nameDetailed: "50% increased Mana Reservation Efficiency of Stance Skills",
        nameShort: "wo"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Silver Oil",
        name: "Hunter's Gambit",
        nameDetailed: "25% increased Damage Over Time with Bow Skills|10% increased Skill Effect Duration|+10% to Chaos Damage over Time Multiplier",
        nameShort: "s G"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Black Oil",
        name: "Testudo",
        nameDetailed: "+6% Chance to Block Attack Damage while holding a Shield|60% increased Block Recovery|Recover 30 Life when you Block",
        nameShort: "Tes"
    },
    {
        oil1: "Violet Oil",
        oil2: "Violet Oil",
        oil3: "Black Oil",
        name: "Graceful Assault",
        nameDetailed: "30% increased Armour and Evasion Rating during Onslaught|10% chance to gain Onslaught for 4 seconds on Kill|30% increased Effect of Onslaught on you",
        nameShort: "sau"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Violet Oil",
        oil3: "Silver Oil",
        name: "Lethality",
        nameDetailed: "Projectile Attack Skills have 50% increased Critical Strike Chance|Projectile Attack Skills have +30% to Critical Strike Multiplier",
        nameShort: "Let"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Opalescent Oil",
        name: "Sleight of Hand",
        nameDetailed: "20% increased Damage with One Handed Weapons|8% increased Attack Speed with One Handed Weapons|Attacks with One Handed Weapons deal 30% increased Damage with Ailments",
        nameShort: "Sle"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Crimson Oil",
        name: "Utmost Swiftness",
        nameDetailed: "+40 to Dexterity|8% increased Dexterity",
        nameShort: "Ut"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Opalescent Oil",
        name: "Eagle Eye",
        nameDetailed: "20% increased Global Accuracy Rating|20% increased Critical Strike Chance|+150 to Accuracy Rating",
        nameShort: "Ey"
    },
    {
        oil1: "Violet Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Claws of the Hawk",
        nameDetailed: "60% increased Critical Strike Chance with Claws|+20% to Critical Strike Multiplier with Claws",
        nameShort: "wk"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Opalescent Oil",
        name: "Blast Radius",
        nameDetailed: "10% increased Area of Effect|20% increased Area Damage",
        nameShort: "iu"
    },
    {
        oil1: "Azure Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Arcane Potency",
        nameDetailed: "+30% to Critical Strike Multiplier for Spell Damage|30% increased Critical Strike Chance for Spells",
        nameShort: "ne P"
    },
    {
        oil1: "Amber Oil",
        oil2: "Violet Oil",
        oil3: "Silver Oil",
        name: "Taste for Blood",
        nameDetailed: "0.6% of Attack Damage Leeched as Life|20% increased Maximum total Life Recovery per second from Leech",
        nameShort: "Tas"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Faith and Steel",
        nameDetailed: "15% increased Armour|10% increased maximum Energy Shield|+8% to all Elemental Resistances",
        nameShort: "ith a"
    },
    {
        oil1: "Azure Oil",
        oil2: "Azure Oil",
        oil3: "Azure Oil",
        name: "Slaughter",
        nameDetailed: "25% increased Physical Damage with Axes|Axe Attacks deal 25% increased Damage with Ailments|8% increased Attack Speed with Axes|+5 to Maximum Rage",
        nameShort: "Sl"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Natural Remedies",
        nameDetailed: "Flasks applied to you have 10% increased Effect|20% increased Flask Effect Duration|Remove Maim and Hinder when you use a Flask",
        nameShort: "ura"
    },
    {
        oil1: "Clear Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Avatar of the Hunt",
        nameDetailed: "30% increased Damage with Bows|6% increased Movement Speed|30% increased Damage Over Time with Bow Skills|+200 to Evasion Rating",
        nameShort: "Av"
    },
    {
        oil1: "Amber Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Feller of Foes",
        nameDetailed: "Axe Attacks deal 30% increased Damage with Hits and Ailments|+40% to Critical Strike Multiplier with Axes|+200 to Accuracy Rating with Axes",
        nameShort: "Fel"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Azure Oil",
        name: "Cloth and Chain",
        nameDetailed: "24% increased Evasion Rating and Armour|+12% to all Elemental Resistances",
        nameShort: "lot"
    },
    {
        oil1: "Violet Oil",
        oil2: "Crimson Oil",
        oil3: "Golden Oil",
        name: "Fingers of Frost",
        nameDetailed: "30% chance to Freeze Enemies which are Chilled|Enemies Become Chilled as they Unfreeze, causing 30% reduced Action Speed",
        nameShort: "Fing"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Master of the Arena",
        nameDetailed: "+20 to Strength|+0.3 metres to Melee Strike Range|10% increased Melee Physical Damage|Regenerate 1% of Life per second",
        nameShort: "Are"
    },
    {
        oil1: "Black Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Disciple of the Forbidden",
        nameDetailed: "+1 to Minimum Power Charges|8% chance to gain a Power Charge on Kill|8% increased Damage per Power Charge",
        nameShort: "orb"
    },
    {
        oil1: "Violet Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Hematophagy",
        nameDetailed: "100% increased total Recovery per second from Life Leech|40% increased Damage while Leeching|10% increased Maximum total Life Recovery per second from Leech",
        nameShort: "gy"
    },
    {
        oil1: "Clear Oil",
        oil2: "Azure Oil",
        oil3: "Crimson Oil",
        name: "From the Shadows",
        nameDetailed: "12% increased Attack Speed with Daggers|40% increased Elusive Effect",
        nameShort: "rom"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Amber Oil",
        name: "Hard Knocks",
        nameDetailed: "+30 to Intelligence",
        nameShort: "oc"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Overcharge",
        nameDetailed: "+1 to Maximum Power Charges",
        nameShort: "ercha"
    },
    {
        oil1: "Azure Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Golem Commander",
        nameDetailed: "+1 to maximum number of Summoned Golems|40% increased Effect of Buffs granted by your Golems",
        nameShort: "Go"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Violet Oil",
        name: "Practical Application",
        nameDetailed: "25% chance to Ignore Stuns while Casting|+20 to Strength and Dexterity|+10% to all Elemental Resistances",
        nameShort: "Pra"
    },
    {
        oil1: "Clear Oil",
        oil2: "Crimson Oil",
        oil3: "Silver Oil",
        name: "Death Attunement",
        nameDetailed: "+1 to Maximum number of Spectres|+1 to Maximum number of Raised Zombies|+1 to Maximum number of Skeletons",
        nameShort: "h A"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Azure Oil",
        oil3: "Golden Oil",
        name: "Heart of Thunder",
        nameDetailed: "30% increased Lightning Damage|Damage Penetrates 6% Lightning Resistance",
        nameShort: "hu"
    },
    {
        oil1: "Teal Oil",
        oil2: "Crimson Oil",
        oil3: "Golden Oil",
        name: "Champion of the Cause",
        nameDetailed: "6% increased effect of Non-Curse Auras from your Skills|8% increased Reservation Efficiency of Skills|12% increased Area of Effect of Aura Skills",
        nameShort: "pio"
    },
    {
        oil1: "Violet Oil",
        oil2: "Violet Oil",
        oil3: "Golden Oil",
        name: "Born to Fight",
        nameDetailed: "+20 to Strength|26% increased Physical Damage|4% increased Attack Speed",
        nameShort: "Bor"
    },
    {
        oil1: "Amber Oil",
        oil2: "Crimson Oil",
        oil3: "Golden Oil",
        name: "Bloodless",
        nameDetailed: "Enemies Cannot Leech Life From you|10% increased maximum Life",
        nameShort: "dles"
    },
    {
        oil1: "Clear Oil",
        oil2: "Indigo Oil",
        oil3: "Indigo Oil",
        name: "Empowered Bond",
        nameDetailed: "+2 to Level of all Link Skill Gems",
        nameShort: "Emp"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Indigo Oil",
        oil3: "Indigo Oil",
        name: "Powerful Bond",
        nameDetailed: "Curses are inflicted on you instead of Linked targets|20% increased Buff Effect of your Links for which 50% of Link Duration has Expired",
        nameShort: "rfu"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Violet Oil",
        oil3: "Crimson Oil",
        name: "Bannerman",
        nameDetailed: "15% increased Effect of Non-Curse Auras from your Skills on Enemies|Placed Banners also grant 30% increased Attack Damage to you and Allies",
        nameShort: "Ban"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Vigour",
        nameDetailed: "+1 to Maximum Endurance Charges",
        nameShort: "igou"
    },
    {
        oil1: "Violet Oil",
        oil2: "Violet Oil",
        oil3: "Crimson Oil",
        name: "Aspect of the Lynx",
        nameDetailed: "20% increased Attack Damage|5% increased Movement Speed|20% increased Critical Strike Chance for Attacks",
        nameShort: "Ly"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Azure Oil",
        oil3: "Black Oil",
        name: "Primal Spirit",
        nameDetailed: "+20 to Strength and Intelligence|20% increased maximum Mana|Gain 4 Mana per Enemy Hit with Attacks if you've used a Mana Flask in the past 10 seconds",
        nameShort: "l Sp"
    },
    {
        oil1: "Amber Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "Coordination",
        nameDetailed: "10% increased Attack Speed|8% increased Cast Speed|+10 to Dexterity and Intelligence",
        nameShort: "Coo"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Indigo Oil",
        oil3: "Opalescent Oil",
        name: "Surveillance",
        nameDetailed: "30% increased Totem Damage|Attacks used by Totems have 8% increased Attack Speed|Each Totem applies 1% increased Damage taken to Enemies near it",
        nameShort: "vei"
    },
    {
        oil1: "Amber Oil",
        oil2: "Violet Oil",
        oil3: "Black Oil",
        name: "Revelry",
        nameDetailed: "10% increased Effect of Non-Curse Auras from your Skills on Enemies|15% increased maximum Mana|+25 to maximum Mana",
        nameShort: "lr"
    },
    {
        oil1: "Azure Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Dire Torment",
        nameDetailed: "40% increased Critical Strike Chance|+25% to Damage over Time Multiplier for Ailments from Critical Strikes",
        nameShort: "e T"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Black Oil",
        name: "Rampart",
        nameDetailed: "30% increased Armour and Evasion Rating while Fortified|Fortifying Hits against Unique Enemies grant 100% increased Fortification",
        nameShort: "Ram"
    },
    {
        oil1: "Teal Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Savage Wounds",
        nameDetailed: "Bleeding you inflict deals Damage 15% faster",
        nameShort: "Wo"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Corruption",
        nameDetailed: "20% increased Effect of Withered",
        nameShort: "up"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Black Oil",
        name: "Enigmatic Reach",
        nameDetailed: "10% increased Attack Speed with Staves|10% increased Cast Speed while wielding a Staff|3% increased Area of Effect per Power Charge",
        nameShort: "c R"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Violet Oil",
        oil3: "Golden Oil",
        name: "Disemboweling",
        nameDetailed: "50% increased Melee Critical Strike Chance|+25% to Melee Critical Strike Multiplier",
        nameShort: "sem"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "Field Medicine",
        nameDetailed: "30% increased Life Recovery from Flasks|Life Flasks gain a Charge when you hit an Enemy, no more than once each second",
        nameShort: "Fie"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Indigo Oil",
        oil3: "Black Oil",
        name: "Conjured Barrier",
        nameDetailed: "30% chance to Ignore Stuns while Casting|50% increased Stun and Block Recovery|30% increased Mana Regeneration Rate while stationary",
        nameShort: "nj"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Blacksmith's Clout",
        nameDetailed: "35% increased Physical Damage with Maces or Sceptres|Mace or Sceptre Attacks deal 35% increased Damage with Ailments|+35% to Critical Strike Multiplier with Maces or Sceptres",
        nameShort: "h'"
    },
    {
        oil1: "Amber Oil",
        oil2: "Violet Oil",
        oil3: "Golden Oil",
        name: "Trick Shot",
        nameDetailed: "30% increased Chaining range",
        nameShort: "ick"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Void Barrier",
        nameDetailed: "12% increased maximum Energy Shield|18% increased Evasion Rating|+10% chance to Suppress Spell Damage while on Full Energy Shield",
        nameShort: "oi"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Skittering Runes",
        nameDetailed: "50% increased Area of Effect of Hex Skills|20% increased Mana Reservation Efficiency of Curse Aura Skills|20% reduced Mana Cost of Curse Skills",
        nameShort: "Ski"
    },
    {
        oil1: "Clear Oil",
        oil2: "Indigo Oil",
        oil3: "Crimson Oil",
        name: "Winter's Embrace",
        nameDetailed: "60% increased Freeze Duration on Enemies|30% increased Damage if you've Shattered an Enemy Recently",
        nameShort: "mb"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Indigo Oil",
        oil3: "Crimson Oil",
        name: "Unfaltering",
        nameDetailed: "50% increased Stun Threshold|10% of Damage taken from Stunning Hits is Recovered as Life",
        nameShort: "Unf"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Indigo Oil",
        name: "Invigorating Blaze",
        nameDetailed: "+10% to Fire Damage over Time Multiplier with Attack Skills|Recover 2% of Life when you Ignite a non-Ignited Enemy",
        nameShort: "az"
    },
    {
        oil1: "Amber Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Fervour",
        nameDetailed: "+1 to Maximum Frenzy Charges",
        nameShort: "vour"
    },
    {
        oil1: "Violet Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Bravery",
        nameDetailed: "24% increased Evasion Rating and Armour|8% increased maximum Life",
        nameShort: "ery"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Violet Oil",
        oil3: "Crimson Oil",
        name: "Redemption",
        nameDetailed: "Minions have 10% increased Attack Speed|Minions have 10% increased Cast Speed|Minions deal 20% increased Damage",
        nameShort: "Re"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Crimson Oil",
        name: "Galvanic Hammer",
        nameDetailed: "30% increased Elemental Damage with Maces or Sceptres|10% increased Accuracy Rating with Maces or Sceptres|Damage with Weapons Penetrates 5% Elemental Resistances",
        nameShort: "lv"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Crimson Oil",
        oil3: "Silver Oil",
        name: "Devotion",
        nameDetailed: "10% increased maximum Life|25% increased Effect of Consecrated Ground you create",
        nameShort: "evo"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "Silver Oil",
        name: "Devastating Devices",
        nameDetailed: "50% increased Critical Strike Chance with Mines|+25% to Critical Strike Multiplier with Mines|10% chance to gain a Power Charge when your Mine is Detonated targeting an Enemy",
        nameShort: "vas"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Azure Oil",
        oil3: "Violet Oil",
        name: "Forceful Skewering",
        nameDetailed: "10% chance to Impale Enemies on Hit with Attacks|10% increased Impale Effect|Impale Damage dealt to Enemies Impaled by you Overwhelms 25% Physical Damage Reduction",
        nameShort: "cef"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Golden Oil",
        name: "Influence",
        nameDetailed: "14% increased effect of Non-Curse Auras from your Skills",
        nameShort: "fl"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Black Oil",
        name: "Exceptional Performance",
        nameDetailed: "25% increased Skill Effect Duration",
        nameShort: "nal"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Golden Oil",
        name: "Snowforged",
        nameDetailed: "Enemies Ignited or Chilled by you have -5% to Elemental Resistances|25% increased Fire Damage|25% increased Cold Damage",
        nameShort: "Sn"
    },
    {
        oil1: "Clear Oil",
        oil2: "Indigo Oil",
        oil3: "Golden Oil",
        name: "Settling Ash",
        nameDetailed: "Nearby Enemies are Covered in Ash if you haven't moved in the past 2 seconds",
        nameShort: "Set"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Golden Oil",
        name: "Insightfulness",
        nameDetailed: "10% increased maximum Energy Shield|16% increased maximum Mana|10% reduced Mana Cost of Skills while on Full Energy Shield",
        nameShort: "nsi"
    },
    {
        oil1: "Azure Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Volatile Mines",
        nameDetailed: "Mines have 30% increased Detonation Speed|Can have up to 3 additional Remote Mines placed at a time|30% increased Mine Duration",
        nameShort: "ola"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Golden Oil",
        name: "Nightstalker",
        nameDetailed: "+30% to Critical Strike Multiplier with Daggers|0.6% of Attack Damage Leeched as Life|0.6% of Attack Damage Leeched as Mana",
        nameShort: "Nig"
    },
    {
        oil1: "Clear Oil",
        oil2: "Azure Oil",
        oil3: "Violet Oil",
        name: "Expeditious Munitions",
        nameDetailed: "12% increased Trap Throwing Speed|50% increased Trap Trigger Area of Effect",
        nameShort: "Mu"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "Crimson Oil",
        name: "Wandslinger",
        nameDetailed: "30% increased Damage while wielding a Wand|10% increased Attack Speed with Wands",
        nameShort: "Wan"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Indigo Oil",
        name: "Escalation",
        nameDetailed: "10% increased Melee Damage for each second you've been affected by a Warcry Buff, up to a maximum of 60%",
        nameShort: "Esc"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "Storm Weaver",
        nameDetailed: "Enemies Shocked or Frozen by you take 5% increased Elemental Damage|25% increased Cold Damage|25% increased Lightning Damage",
        nameShort: "Sto"
    },
    {
        oil1: "Teal Oil",
        oil2: "Azure Oil",
        oil3: "Golden Oil",
        name: "Heart of Flame",
        nameDetailed: "30% increased Fire Damage|Damage Penetrates 6% Fire Resistance",
        nameShort: "ame"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Window of Opportunity",
        nameDetailed: "15% reduced Skill Effect Duration|Debuffs on you expire 15% faster",
        nameShort: "do"
    },
    {
        oil1: "Teal Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Lust for Carnage",
        nameDetailed: "1.2% of Physical Attack Damage Leeched as Life|60% increased total Recovery per second from Life Leech|12% increased Attack Speed",
        nameShort: "Lu"
    },
    {
        oil1: "Violet Oil",
        oil2: "Violet Oil",
        oil3: "Opalescent Oil",
        name: "Hired Killer",
        nameDetailed: "7% increased maximum Life|Recover 2% of Life on Kill",
        nameShort: "Hir"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Golden Oil",
        name: "Brutal Blade",
        nameDetailed: "Sword Attacks deal 24% increased Damage with Hits and Ailments|+6% Chance to Block Attack Damage while Dual Wielding or holding a Shield|20% chance to gain a Frenzy Charge when you Block Attack Damage",
        nameShort: "l B"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Golden Oil",
        name: "Enduring Bond",
        nameDetailed: "20% increased Minion Duration|Minions deal 30% increased Damage if you've used a Minion Skill Recently|20% increased Skill Effect Duration",
        nameShort: "duri"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Violet Oil",
        oil3: "Black Oil",
        name: "Brand Equity",
        nameDetailed: "Brand Skills have 20% increased Duration|Brand Recall has 20% increased Cooldown Recovery Rate|You can Cast 2 additional Brands",
        nameShort: "Eq"
    },
    {
        oil1: "Violet Oil",
        oil2: "Violet Oil",
        oil3: "Violet Oil",
        name: "Enigmatic Defence",
        nameDetailed: "20% increased Spell Damage while wielding a Staff|+6% Chance to Block Attack Damage while wielding a Staff|+6% Chance to Block Spell Damage while wielding a Staff",
        nameShort: "c D"
    },
    {
        oil1: "Teal Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "One with the River",
        nameDetailed: "30% increased Elemental Damage with Staves|Damage with Weapons Penetrates 5% Elemental Resistances",
        nameShort: "e w"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Golden Oil",
        name: "Swift Venoms",
        nameDetailed: "10% increased Attack Speed|+14% to Damage over Time Multiplier for Poison",
        nameShort: "ft"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Golden Oil",
        name: "Atrophy",
        nameDetailed: "27% increased Chaos Damage|12% increased Skill Effect Duration",
        nameShort: "Atr"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Opalescent Oil",
        oil3: "Opalescent Oil",
        name: "Prism Weave",
        nameDetailed: "24% increased Elemental Damage with Wands|6% increased Attack Speed with Wands|Damage with Weapons Penetrates 5% Elemental Resistances",
        nameShort: "sm W"
    },
    {
        oil1: "Teal Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Herbalism",
        nameDetailed: "10% increased maximum Life|30% increased Flask Recovery rate",
        nameShort: "rb"
    },
    {
        oil1: "Azure Oil",
        oil2: "Crimson Oil",
        oil3: "Silver Oil",
        name: "Runesmith",
        nameDetailed: "12% increased Cast Speed with Brand Skills|Enemies take 5% increased Damage for each of your Brands Attached to them",
        nameShort: "Ru"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Crimson Oil",
        oil3: "Silver Oil",
        name: "Master Fletcher",
        nameDetailed: "Bow Attacks fire an additional Arrow",
        nameShort: "r F"
    },
    {
        oil1: "Azure Oil",
        oil2: "Violet Oil",
        oil3: "Silver Oil",
        name: "Primeval Force",
        nameDetailed: "25% increased Elemental Damage with Attack Skills|25% increased Elemental Damage during any Flask Effect",
        nameShort: "Pri"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Violet Oil",
        oil3: "Silver Oil",
        name: "Asylum",
        nameDetailed: "18% reduced Effect of Curses on you|+18% to Chaos Resistance",
        nameShort: "sy"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Indigo Oil",
        oil3: "Silver Oil",
        name: "Malicious Intent",
        nameDetailed: "+2 to Level of all Curse Skill Gems",
        nameShort: "Mal"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Silver Oil",
        name: "Arcing Blows",
        nameDetailed: "30% increased Lightning Damage with Attack Skills|Damage with Weapons Penetrates 8% Lightning Resistance",
        nameShort: "rci"
    },
    {
        oil1: "Teal Oil",
        oil2: "Violet Oil",
        oil3: "Silver Oil",
        name: "Swagger",
        nameDetailed: "25% chance to gain a Frenzy Charge when you Block|+5% Chance to Block Attack Damage while Dual Wielding",
        nameShort: "gg"
    },
    {
        oil1: "Amber Oil",
        oil2: "Indigo Oil",
        oil3: "Violet Oil",
        name: "Surge of Vigour",
        nameDetailed: "Every 4 seconds, Regenerate 15% of Life over one second",
        nameShort: "go"
    },
    {
        oil1: "Teal Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Master Sapper",
        nameDetailed: "30% increased Trap Damage|Can have up to 2 additional Traps placed at a time|15% chance to gain a Frenzy Charge when your Trap is triggered by an Enemy",
        nameShort: "app"
    },
    {
        oil1: "Teal Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Longshot",
        nameDetailed: "Projectiles gain Damage as they travel farther, dealing up|to 60% increased Damage with Hits to targets|30% increased Projectile Speed",
        nameShort: "Lon"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Amber Oil",
        name: "Proficiency",
        nameDetailed: "+30 to Dexterity",
        nameShort: "cy"
    },
    {
        oil1: "Azure Oil",
        oil2: "Azure Oil",
        oil3: "Silver Oil",
        name: "Bloodletting",
        nameDetailed: "40% increased Attack Damage against Bleeding Enemies|+15% to Damage over Time Multiplier for Bleeding",
        nameShort: "tti"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Violet Oil",
        oil3: "Silver Oil",
        name: "King of the Hill",
        nameDetailed: "100% increased Critical Strike Chance with Bows",
        nameShort: "g o"
    },
    {
        oil1: "Black Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Stamina",
        nameDetailed: "+1 to Maximum Endurance Charges",
        nameShort: "min"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Last Rites",
        nameDetailed: "Enemies Cursed by you have 50% reduced Life Regeneration Rate|Enemies you Curse cannot Recharge Energy Shield|Cursed Enemies you Kill are destroyed",
        nameShort: "Rit"
    },
    {
        oil1: "Teal Oil",
        oil2: "Azure Oil",
        oil3: "Silver Oil",
        name: "Gladiator's Perseverance",
        nameDetailed: "1% of Physical Attack Damage Leeched as Life|40% increased Attack Damage while Leeching|10% increased Attack Speed when on Full Life",
        nameShort: "'s"
    },
    {
        oil1: "Clear Oil",
        oil2: "Indigo Oil",
        oil3: "Black Oil",
        name: "Assured Strike",
        nameDetailed: "24% increased Melee Damage|+0.4 metres to Melee Strike Range while at least 5 Enemies are Nearby",
        nameShort: "su"
    },
    {
        oil1: "Teal Oil",
        oil2: "Indigo Oil",
        oil3: "Silver Oil",
        name: "Concussive Force",
        nameDetailed: "Ignites from Stunning Melee Hits deal 20% more Damage|Hits Stun as though dealing 50% more Melee Fire Damage",
        nameShort: "onc"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Azure Oil",
        name: "Instinct",
        nameDetailed: "+12% chance to Suppress Spell Damage|Recover 50 Energy Shield when you Suppress Spell Damage",
        nameShort: "tin"
    },
    {
        oil1: "Teal Oil",
        oil2: "Violet Oil",
        oil3: "Golden Oil",
        name: "Constitution",
        nameDetailed: "10% increased maximum Life|+20 to maximum Life",
        nameShort: "nst"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Azure Oil",
        oil3: "Silver Oil",
        name: "Forces of Nature",
        nameDetailed: "Attack Damage Penetrates 10% of Enemy Elemental Resistances",
        nameShort: "f N"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Azure Oil",
        oil3: "Silver Oil",
        name: "Blade of Cunning",
        nameDetailed: "45% increased Critical Strike Chance with Swords|+15% to Critical Strike Multiplier with Swords|15% increased Accuracy Rating with Swords",
        nameShort: "Cu"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Silver Oil",
        name: "Perfectionist",
        nameDetailed: "30% chance to Avoid being Stunned|50% increased Stun and Block Recovery|5% increased Movement Speed",
        nameShort: "Perf"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Indigo Oil",
        oil3: "Golden Oil",
        name: "Steeped in the Profane",
        nameDetailed: "10% increased Effect of your Curses|15% reduced Effect of Curses on you",
        nameShort: "Ste"
    },
    {
        oil1: "Azure Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "Dervish",
        nameDetailed: "+3% Chance to Block Attack Damage while Dual Wielding|Attack Skills deal 24% increased Damage while Dual Wielding|6% increased Attack Speed while Dual Wielding",
        nameShort: "Der"
    },
    {
        oil1: "Clear Oil",
        oil2: "Indigo Oil",
        oil3: "Violet Oil",
        name: "Circle of Life",
        nameDetailed: "12% of Damage taken Recouped as Life|Gain 10 Life per Enemy Hit with Attacks",
        nameShort: "Ci"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Silver Oil",
        name: "Backstabbing",
        nameDetailed: "30% increased Critical Strike Chance with Daggers|+30% to Critical Strike Multiplier with Daggers|100% increased Critical Strike Chance against Enemies on Full Life",
        nameShort: "bb"
    },
    {
        oil1: "Clear Oil",
        oil2: "Verdant Oil",
        oil3: "Crimson Oil",
        name: "Blast Waves",
        nameDetailed: "Skills used by Mines deal 30% increased Area Damage if you Detonated a Mine Recently|Skills used by Mines have 15% increased Area of Effect if you Detonated a Mine Recently",
        nameShort: "Wav"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Crimson Oil",
        oil3: "Black Oil",
        name: "Essence Extraction",
        nameDetailed: "15% increased Mana Recovery Rate during Effect of any Mana Flask|25% increased Flask Charges gained",
        nameShort: "Es"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Silver Oil",
        name: "Destructive Apparatus",
        nameDetailed: "12% increased Mine Throwing Speed|60% increased Mine Duration",
        nameShort: "tiv"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Indigo Oil",
        oil3: "Indigo Oil",
        name: "Trial of the Faith",
        nameDetailed: "50% increased Stun and Block Recovery|Regenerate 5% of Life over 1 second when Stunned|Regenerate 5% of Energy Shield over 1 second when Stunned",
        nameShort: "Tr"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Hearty",
        nameDetailed: "Regenerate 1.8% of Life per second|15% increased Life Regeneration rate",
        nameShort: "arty"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Teal Oil",
        name: "Saboteur",
        nameDetailed: "30% increased Trap Damage|30% increased Mine Damage|Can have up to 2 additional Traps placed at a time|Can have up to 2 additional Remote Mines placed at a time",
        nameShort: "eu"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Silver Oil",
        name: "Arcane Will",
        nameDetailed: "Regenerate 5 Mana per second|30% increased maximum Mana|+10 to Intelligence",
        nameShort: "Wi"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Violet Oil",
        oil3: "Opalescent Oil",
        name: "Melding",
        nameDetailed: "7% increased maximum Life|Gain 3% of Maximum Life as Extra Maximum Energy Shield",
        nameShort: "Me"
    },
    {
        oil1: "Clear Oil",
        oil2: "Opalescent Oil",
        oil3: "Golden Oil",
        name: "Mana Flows",
        nameDetailed: "16% increased maximum Mana|30% increased Mana Regeneration Rate|+20 to Intelligence",
        nameShort: "ana"
    },
    {
        oil1: "Amber Oil",
        oil2: "Indigo Oil",
        oil3: "Indigo Oil",
        name: "High Voltage",
        nameDetailed: "100% increased Critical Strike Chance against Shocked Enemies",
        nameShort: "Vo"
    },
    {
        oil1: "Clear Oil",
        oil2: "Violet Oil",
        oil3: "Violet Oil",
        name: "Pain Forger",
        nameDetailed: "10% chance to gain a Power Charge when you Stun with Melee Damage|60% increased Critical Strike Chance with Maces or Sceptres|10% reduced Enemy Stun Threshold with Maces or Sceptres",
        nameShort: "Pa"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Dance of Blades",
        nameDetailed: "You have Onslaught if you've changed Stance Recently",
        nameShort: "Dan"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Azure Oil",
        oil3: "Opalescent Oil",
        name: "Admonisher",
        nameDetailed: "50% increased Warcry Speed|15% increased Damage for each time you've Warcried Recently",
        nameShort: "dm"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Silver Oil",
        name: "Blade Master",
        nameDetailed: "20% increased Physical Damage with Swords|8% increased Attack Speed with Swords|+200 to Accuracy Rating with Swords|Sword Attacks deal 20% increased Damage with Ailments",
        nameShort: "de M"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Sepia Oil",
        name: "Expertise",
        nameDetailed: "+30 to Dexterity",
        nameShort: "erti"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Teal Oil",
        name: "Physique",
        nameDetailed: "+30 to Strength",
        nameShort: "Ph"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Clear Oil",
        name: "Alacrity",
        nameDetailed: "+30 to Dexterity",
        nameShort: "Al"
    },
    {
        oil1: "Azure Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Harrier",
        nameDetailed: "5% increased Movement Speed|8% increased Attack Speed|6% increased Cast Speed",
        nameShort: "Harr"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Teal Oil",
        oil3: "Violet Oil",
        name: "Efficient Explosives",
        nameDetailed: "30% increased Mana Reservation Efficiency of Skills that throw Mines|Mines have a 15% chance to be Detonated an Additional Time",
        nameShort: "Ef"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Violet Oil",
        name: "Vampirism",
        nameDetailed: "Recover 3% of Life on Kill|12% of Damage taken Recouped as Life",
        nameShort: "Vam"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Black Oil",
        name: "Lightning Walker",
        nameDetailed: "25% increased Lightning Damage|+15% to Lightning Resistance|5% increased Cast Speed with Lightning Skills",
        nameShort: "g W"
    },
    {
        oil1: "Violet Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Disciple of the Unyielding",
        nameDetailed: "+1 to Minimum Endurance Charges|8% chance to gain an Endurance Charge on Kill|8% increased Damage per Endurance Charge",
        nameShort: "sc"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Verdant Oil",
        name: "Aspect of the Eagle",
        nameDetailed: "20% increased Damage with Bows|20% increased Damage Over Time with Bow Skills|6% increased Attack Speed with Bows|10% increased Accuracy Rating with Bows",
        nameShort: "As"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Teal Oil",
        name: "Spiked Bulwark",
        nameDetailed: "28% increased Armour|Reflects 50 Physical Damage to Melee Attackers",
        nameShort: "lw"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Indigo Oil",
        oil3: "Silver Oil",
        name: "Marked for Death",
        nameDetailed: "Culling Strike against Marked Enemy",
        nameShort: "rk"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Expert Hunter",
        nameDetailed: "20% increased Effect of your Marks",
        nameShort: "un"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Black Oil",
        oil3: "Golden Oil",
        name: "Season of Ice",
        nameDetailed: "+12% to Cold Damage over Time Multiplier|20% increased Effect of Chill",
        nameShort: "Se"
    },
    {
        oil1: "Azure Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Gravepact",
        nameDetailed: "30% increased Minion Accuracy Rating|Minions have 6% chance to deal Double Damage",
        nameShort: "av"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Teal Oil",
        name: "Decay Ward",
        nameDetailed: "Minions have +18% Chance to Block Attack Damage|Minions have +18% Chance to Block Spell Damage|Minions Recover 2% of their Life when they Block",
        nameShort: "y W"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Crimson Oil",
        oil3: "Opalescent Oil",
        name: "Adjacent Animosity",
        nameDetailed: "10% reduced Projectile Speed|Projectiles deal 40% increased Damage with Hits to targets at the start|of their movement, reducing to 0% as they travel farther",
        nameShort: "dj"
    },
    {
        oil1: "Crimson Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Inexorable",
        nameDetailed: "25% chance to gain an Endurance Charge when you are Hit|50% increased Armour while stationary",
        nameShort: "ex"
    },
    {
        oil1: "Azure Oil",
        oil2: "Violet Oil",
        oil3: "Golden Oil",
        name: "Breath of Lightning",
        nameDetailed: "30% increased Lightning Damage|50% increased Effect of Lightning Ailments",
        nameShort: "tn"
    },
    {
        oil1: "Clear Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Overcharged",
        nameDetailed: "8% chance to gain a Power, Frenzy or Endurance Charge on Kill",
        nameShort: "ch"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Opalescent Oil",
        name: "Fleetfoot",
        nameDetailed: "30% increased Evasion Rating|30% increased Cooldown Recovery Rate of Movement Skills|5% increased Movement Speed",
        nameShort: "lee"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Indigo Oil",
        name: "Cauterisation",
        nameDetailed: "Ignited enemies cannot Ignite you|Bleeding enemies cannot inflict Bleeding on you",
        nameShort: "au"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Silver Oil",
        name: "Holy Fire",
        nameDetailed: "+12% to Fire Damage over Time Multiplier|+24% to Fire Resistance",
        nameShort: "Ho"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Teal Oil",
        name: "Righteous Decree",
        nameDetailed: "22% increased maximum Mana|6% reduced Mana Cost of Skills",
        nameShort: "s D"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Indigo Oil",
        oil3: "Indigo Oil",
        name: "Righteous Fury",
        nameDetailed: "40% increased Melee Damage with Hits at Close Range|10% chance to create Consecrated Ground on Melee Kill, lasting 4 seconds",
        nameShort: "Ri"
    },
    {
        oil1: "Amber Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Magmatic Strikes",
        nameDetailed: "Every 10 seconds, gain 30% of Physical Damage|as Extra Fire Damage for 4 seconds",
        nameShort: "gm"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Opalescent Oil",
        name: "Titanic Impacts",
        nameDetailed: "+45% to Critical Strike Multiplier with Two Handed Melee Weapons",
        nameShort: "Im"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Crimson Oil",
        name: "Deadly Draw",
        nameDetailed: "Damaging Ailments deal damage 10% faster|30% increased Damage Over Time with Bow Skills",
        nameShort: "aw"
    },
    {
        oil1: "Clear Oil",
        oil2: "Black Oil",
        oil3: "Black Oil",
        name: "Acrimony",
        nameDetailed: "+15% to Damage over Time Multiplier",
        nameShort: "cr"
    },
    {
        oil1: "Clear Oil",
        oil2: "Violet Oil",
        oil3: "Silver Oil",
        name: "Fatal Toxins",
        nameDetailed: "30% increased Damage with Poison|+10% to Chaos Resistance|+10% to Damage over Time Multiplier for Poison",
        nameShort: "ata"
    },
    {
        oil1: "Opalescent Oil",
        oil2: "Golden Oil",
        oil3: "Golden Oil",
        name: "Charisma",
        nameDetailed: "16% increased Mana Reservation Efficiency of Skills|6% increased effect of Non-Curse Auras from your Skills",
        nameShort: "Cha"
    },
    {
        oil1: "Teal Oil",
        oil2: "Azure Oil",
        oil3: "Crimson Oil",
        name: "Fearsome Force",
        nameDetailed: "Minions have 60% increased Critical Strike Chance|Minions have +20% to Critical Strike Multiplier",
        nameShort: "ars"
    },
    {
        oil1: "Teal Oil",
        oil2: "Azure Oil",
        oil3: "Opalescent Oil",
        name: "Mysticism",
        nameDetailed: "6% increased Cast Speed while Dual Wielding|40% increased Mana Regeneration if you've used a Movement Skill Recently|20% increased Spell Damage while Dual Wielding",
        nameShort: "My"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Violet Oil",
        name: "Weapon Artistry",
        nameDetailed: "+4% Chance to Block Attack Damage while Dual Wielding or holding a Shield|8% increased Attack Speed|+0.2 metres to Melee Strike Range",
        nameShort: "ap"
    },
    {
        oil1: "Violet Oil",
        oil2: "Silver Oil",
        oil3: "Golden Oil",
        name: "Heart of the Warrior",
        nameDetailed: "+10 to Strength|+20 to maximum Life|10% increased maximum Life",
        nameShort: "rio"
    },
    {
        oil1: "Clear Oil",
        oil2: "Clear Oil",
        oil3: "Sepia Oil",
        name: "Beef",
        nameDetailed: "+30 to Strength",
        nameShort: "ef"
    },
    {
        oil1: "Amber Oil",
        oil2: "Verdant Oil",
        oil3: "Teal Oil",
        name: "Depth Perception",
        nameDetailed: "20% increased Global Accuracy Rating|25% increased Critical Strike Chance|+100 to Accuracy Rating",
        nameShort: "pt"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Azure Oil",
        name: "Fangs of the Viper",
        nameDetailed: "+20 to Dexterity|5% increased Movement Speed|20% increased Physical Damage|20% increased Chaos Damage",
        nameShort: "Fa"
    },
    {
        oil1: "Teal Oil",
        oil2: "Indigo Oil",
        oil3: "Opalescent Oil",
        name: "Deep Breaths",
        nameDetailed: "30% increased Warcry Cooldown Recovery Rate|Warcry Skills have 30% increased Area of Effect|20% increased total Power counted by Warcries",
        nameShort: "hs"
    },
    {
        oil1: "Amber Oil",
        oil2: "Azure Oil",
        oil3: "Opalescent Oil",
        name: "Amplify",
        nameDetailed: "10% increased Area of Effect|20% increased Area Damage",
        nameShort: "if"
    },
    {
        oil1: "Teal Oil",
        oil2: "Teal Oil",
        oil3: "Violet Oil",
        name: "Elder Power",
        nameDetailed: "10% increased Wand Damage per Power Charge|10% chance to gain a Power Charge on Kill",
        nameShort: "El"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Indigo Oil",
        oil3: "Violet Oil",
        name: "Brink of Death",
        nameDetailed: "Regenerate 4% of Life per second while on Low Life",
        nameShort: "k o"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Crimson Oil",
        oil3: "Golden Oil",
        name: "Heart and Soul",
        nameDetailed: "8% increased maximum Life|12% increased maximum Mana",
        nameShort: "rt a"
    },
    {
        oil1: "Clear Oil",
        oil2: "Violet Oil",
        oil3: "Opalescent Oil",
        name: "Blade Barrier",
        nameDetailed: "+5% Chance to Block Attack Damage while Dual Wielding|Attack Skills deal 25% increased Damage while Dual Wielding|50% increased Block Recovery",
        nameShort: "e B"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Sepia Oil",
        name: "Agility",
        nameDetailed: "+30 to Dexterity",
        nameShort: "gi"
    },
    {
        oil1: "Azure Oil",
        oil2: "Opalescent Oil",
        oil3: "Silver Oil",
        name: "Blood Siphon",
        nameDetailed: "10% increased maximum Life|+20 to Strength|Gain 10 Life per Enemy Killed",
        nameShort: "oo"
    },
    {
        oil1: "Clear Oil",
        oil2: "Black Oil",
        oil3: "Opalescent Oil",
        name: "Skull Cracking",
        nameDetailed: "36% increased Physical Damage with Maces or Sceptres|12% reduced Enemy Stun Threshold with Maces or Sceptres|Mace or Sceptre Attacks deal 36% increased Damage with Ailments",
        nameShort: "ku"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Teal Oil",
        name: "Sanctuary",
        nameDetailed: "+4% Chance to Block Attack Damage while holding a Shield|+4% Chance to Block Spell Damage while holding a Shield|+12% Elemental Resistances while holding a Shield",
        nameShort: "anct"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Violet Oil",
        oil3: "Opalescent Oil",
        name: "Frost Walker",
        nameDetailed: "25% increased Cold Damage|+15% to Cold Resistance|5% increased Cast Speed with Cold Skills",
        nameShort: "os"
    },
    {
        oil1: "Teal Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Cruel Preparation",
        nameDetailed: "10% increased maximum Life|+5% to all Elemental Resistances",
        nameShort: "Cr"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Verdant Oil",
        oil3: "Opalescent Oil",
        name: "Versatility",
        nameDetailed: "15% increased Global Accuracy Rating|+20 to Dexterity and Intelligence|5% increased Movement Speed",
        nameShort: "sa"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Black Oil",
        oil3: "Silver Oil",
        name: "Profane Chemistry",
        nameDetailed: "7% increased maximum Life|30% increased Life Recovery from Flasks|Life Flasks gain 1 Charge every 3 seconds",
        nameShort: "Pr"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Opalescent Oil",
        name: "Brinkmanship",
        nameDetailed: "Melee Skills have 20% increased Area of Effect",
        nameShort: "km"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Amber Oil",
        oil3: "Violet Oil",
        name: "Shamanistic Fury",
        nameDetailed: "25% increased Totem Damage|25% increased Totem Placement speed",
        nameShort: "ma"
    },
    {
        oil1: "Amber Oil",
        oil2: "Indigo Oil",
        oil3: "Black Oil",
        name: "Infused Flesh",
        nameDetailed: "18% of Damage taken Recouped as Life",
        nameShort: "nf"
    },
    {
        oil1: "Amber Oil",
        oil2: "Amber Oil",
        oil3: "Azure Oil",
        name: "Overprepared",
        nameDetailed: "Skills which Throw Traps have +1 Cooldown Use",
        nameShort: "Ov"
    },
    {
        oil1: "Amber Oil",
        oil2: "Teal Oil",
        oil3: "Indigo Oil",
        name: "Inspiring Bond",
        nameDetailed: "Link Skills have 20% increased Buff Effect if you have Linked to a target Recently|10% chance for Energy Shield Recharge to start when you Link to a target",
        nameShort: "In"
    },
    {
        oil1: "Clear Oil",
        oil2: "Sepia Oil",
        oil3: "Azure Oil",
        name: "Dynamo",
        nameDetailed: "18% increased maximum Mana|Guard Skills have 40% increased Duration",
        nameShort: "Dy"
    },
    {
        oil1: "Violet Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Light of Divinity",
        nameDetailed: "20% increased Spell Damage|+10 to Strength and Intelligence|30% increased Critical Strike Chance for Spells|10% increased Light Radius",
        nameShort: "ig"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Verdant Oil",
        oil3: "Verdant Oil",
        name: "Fusillade",
        nameDetailed: "15% increased Attack Speed with Wands|30% increased Accuracy Rating with Wands",
        nameShort: "Fu"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Azure Oil",
        oil3: "Black Oil",
        name: "Safeguard",
        nameDetailed: "+6% chance to Block Spell Damage while holding a Staff or Shield|Recover 50 Energy Shield when you Block Spell Damage|+8% to all Elemental Resistances",
        nameShort: "fe"
    },
    {
        oil1: "Clear Oil",
        oil2: "Azure Oil",
        oil3: "Black Oil",
        name: "Twin Terrors",
        nameDetailed: "100% increased Attack Critical Strike Chance while Dual Wielding",
        nameShort: "Tw"
    },
    {
        oil1: "Teal Oil",
        oil2: "Indigo Oil",
        oil3: "Black Oil",
        name: "Forethought",
        nameDetailed: "30% increased maximum Mana|10% increased Mana Cost of Skills",
        nameShort: "re"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Golden Oil",
        name: "Growth and Decay",
        nameDetailed: "Regenerate 1% of Life per second|+12% to Damage over Time Multiplier",
        nameShort: "wt"
    },
    {
        oil1: "Clear Oil",
        oil2: "Teal Oil",
        oil3: "Black Oil",
        name: "Arcane Guarding",
        nameDetailed: "60% increased Energy Shield from Equipped Shield|+8% Chance to Block Spell Damage while holding a Shield",
        nameShort: "Gu"
    },
    {
        oil1: "Indigo Oil",
        oil2: "Indigo Oil",
        oil3: "Black Oil",
        name: "Undertaker",
        nameDetailed: "30% increased Damage if you have Consumed a corpse Recently|Regenerate 2% of Life per second if you've Consumed a corpse Recently|Desecrate and Unearth have +2 to Maximum number of corpses allowed",
        nameShort: "Un"
    },
    {
        oil1: "Clear Oil",
        oil2: "Silver Oil",
        oil3: "Silver Oil",
        name: "Arcane Sanctuary",
        nameDetailed: "30% increased Spell Damage while holding a Shield|30% reduced Elemental Ailment Duration on you while holding a Shield",
        nameShort: "Ar"
    },
    {
        oil1: "Teal Oil",
        oil2: "Violet Oil",
        oil3: "Crimson Oil",
        name: "Static Blows",
        nameDetailed: "30% increased Damage if you have Shocked an Enemy Recently|30% increased Effect of Lightning Ailments|50% increased Duration of Lightning Ailments",
        nameShort: "St"
    },
    {
        oil1: "Teal Oil",
        oil2: "Crimson Oil",
        oil3: "Crimson Oil",
        name: "Heartseeker",
        nameDetailed: "+30% to Critical Strike Multiplier",
        nameShort: "He"
    },
    {
        oil1: "Clear Oil",
        oil2: "Amber Oil",
        oil3: "Indigo Oil",
        name: "Harvester of Foes",
        nameDetailed: "30% increased Physical Damage with Axes|Axe Attacks deal 30% increased Damage with Ailments|12% increased Impale Effect",
        nameShort: "Ha"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Indigo Oil",
        oil3: "Crimson Oil",
        name: "Glacial Cage",
        nameDetailed: "Enemies permanently take 1% increased Damage for each second they've ever been Chilled by you, up to a maximum of 10%",
        nameShort: "la"
    },
    {
        oil1: "Sepia Oil",
        oil2: "Sepia Oil",
        oil3: "Violet Oil",
        name: "Potent Connections",
        nameDetailed: "10% increased Movement Speed while you have at least two Linked targets|25% increased Defences while you have at least four Linked targets",
        nameShort: "ot"
    },
    {
        oil1: "Verdant Oil",
        oil2: "Teal Oil",
        oil3: "Indigo Oil",
        name: "Divine Fervour",
        nameDetailed: "+10 to Strength and Intelligence|30% increased Melee Critical Strike Chance|20% increased Attack Damage",
        nameShort: "ne"
    }
];








