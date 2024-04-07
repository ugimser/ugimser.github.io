console.log('processFile.js 123');

const { uniqueItemArray } = require('./js/regex/UniqueItems.js');
const { coffinArray } = require('./js/regex/Coffin.js');

const uniqueArray = uniqueItemArray;
const coffinArrayTemp = coffinArray;
//console.log(uniqueItemArray.length);
changeArray ();


function changeArray () {
    const fs = require('fs');

    //std
    const stdA = fs.readFileSync('Ninja_json/Standard_UniqueJewel.json', 'utf8');
    const stdB = fs.readFileSync('Ninja_json/Standard_UniqueWeapon.json', 'utf8');
    const stdC = fs.readFileSync('Ninja_json/Standard_UniqueArmour.json', 'utf8');
    const stdD = fs.readFileSync('Ninja_json/Standard_UniqueAccessory.json', 'utf8');
    const stdTab = [stdA, stdB, stdC, stdD];
    console.log('stdTab done');
    try {
        changePrices (stdTab, 2);
    } catch (err) {
         console.log('changePrices (stdTab, 2)', err);
    }

     // league hc
    const lhcA = fs.readFileSync('Ninja_json/Hardcore_Necropolis_UniqueJewel.json', 'utf8');
    const lhcB = fs.readFileSync('Ninja_json/Hardcore_Necropolis_UniqueWeapon.json', 'utf8');
    const lhcC = fs.readFileSync('Ninja_json/Hardcore_Necropolis_UniqueArmour.json', 'utf8');
    const lhcD = fs.readFileSync('Ninja_json/Hardcore_Necropolis_UniqueAccessory.json', 'utf8');
    const lhcTab = [lhcA, lhcB, lhcC, lhcD];
    console.log('league hc done');
    try {
        changePrices (lhcTab, 1);
    } catch (err) {
         console.log('changePrices (lhcTab, 1)', err);
    }
    
     // league
    const lA = fs.readFileSync('Ninja_json/Necropolis_UniqueJewel.json', 'utf8');
    const lB = fs.readFileSync('Ninja_json/Necropolis_UniqueWeapon.json', 'utf8');
    const lC = fs.readFileSync('Ninja_json/Necropolis_UniqueArmour.json', 'utf8');
    const lD = fs.readFileSync('Ninja_json/Necropolis_UniqueAccessory.json', 'utf8');
    const lTab = [lA, lB, lC, lD];
    console.log('league done');
    try {
        changePrices (lTab, 0);
    } catch (err) {
         console.log('changePrices (lTab, 0)', err);
    }

    // save Unique list for Gewnnen
    let string = '';
    for (const item of uniqueArray) {
       string += `{ id: ${item.id}, baseType: "${item.baseType}", shortName: "${item.shortName}",  name: "${item.name}", image: "${item.image}", chaosValueLeague: ${item.chaosValueLeague}, chaosValueHCLeague: ${item.chaosValueHCLeague}, chaosValueStandard: ${item.chaosValueStandard} },\n`;
    }
    
    const strAll = `const uniqueItemArray2 = [\n ${string}];\n\n if (typeof module !== 'undefined' && module.exports) { module.exports = { uniqueItemArray2 }; }`;
 
    try {
        fs.writeFileSync('Ninja_json/GeneratedUniqueArray.js', strAll, 'utf8');
    } catch (err) {
        console.log('fs.writeFileSync ', err);
    }

    // Coffin
    // League
    // League HC
    const coffinA = fs.readFileSync('Ninja_json/Necropolis_Coffin.json', 'utf8');
    const coffinB = fs.readFileSync('Ninja_json/Hardcore_Necropolis_Coffin.json', 'utf8');
    const coffinTab = [coffinA, coffinB];
    console.log('coffinTab done');
    try {
        changePricesCoffin (coffinTab, 0);
    } catch (err) {
         console.log('changePrices (lTab, 0)', err);
    }

    // save Coffin list
    string = '';
    for (const item of coffinArrayTemp) {
        let reg = item.regex.replace(/\+/g, '\\\\\\+');
        //if (reg.lenght > 1) {
         //   reg = reg.replace(/\+/g, '\\\\+');
        //}
        string += `{ id: ${item.id}, name: "${item.name}", regex: "${reg}", image: "${item.image}", ilvl: "${item.ilvl}", chaosValueLeague: ${item.chaosValueLeague}, chaosValueHCLeague: ${item.chaosValueHCLeague}, chaosValueStandard: ${item.chaosValueStandard} },\n`;
    }
    
    const strAllC = `const coffinArray2 = [\n ${string}];\n\n if (typeof module !== 'undefined' && module.exports) { module.exports = { coffinArray2 }; }`;
 
    try {
        fs.writeFileSync('Ninja_json/GeneratedCoffinArray.js', strAllC, 'utf8');
        constole.log('processFile 95');
    } catch (err) {
        console.log('fs.writeFileSync ', err);
    }
    
}

function changePrices (tab, l) {
    tab.forEach(t => {
        let tab2 = JSON.parse(t);
        if (tab2) {
            tab2.lines.forEach(item => {
                const element = uniqueArray.find(i => i.id === item.id);
                if (element) {
                    if (l === 0) {
                        element.chaosValueLeague = item.chaosValue;
                    } else if (l === 1) {
                        element.chaosValueHCLeague = item.chaosValue;
                    } else if (l === 2) {
                        element.chaosValueStandard = item.chaosValue;
                    }
                }
            });
        }
    });
}

function changePricesCoffin (tab, l) {
    tab.forEach(t => {
        let tab2 = JSON.parse(t);
        if (tab2) {
            tab2.lines.forEach(item => {
                const element = coffinArrayTemp.find(i => i.id === item.id);
                if (element) {
                    if (l === 0) {
                        element.chaosValueLeague = item.chaosValue;
                    } else if (l === 1) {
                        element.chaosValueHCLeague = item.chaosValue;
                    } else if (l === 2) {
                        element.chaosValueStandard = item.chaosValue;
                    }
                }
            });
        }
    });
}

