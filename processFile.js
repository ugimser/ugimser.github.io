console.log('processFile.js 123');

const { uniqueItemArray } = require('./js/regex/UniqueItems.js');

const uniqueArray = uniqueItemArray;
console.log(uniqueItemArray.length);
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
/*
     // league hc
    const lhcA = fs.readFileSync('Ninja_json/Hardcore_Necropolis_UniqueJewel.json', 'utf8');
    const lhcB = fs.readFileSync('Ninja_json/Hardcore_Necropolis_UniqueWeapon.json', 'utf8');
    const lhcC = fs.readFileSync('Ninja_json/Hardcore_Necropolis_UniqueArmour.json', 'utf8');
    const lhcD = fs.readFileSync('Ninja_json/Hardcore_Necropolis_UniqueAccessory.json', 'utf8');
    const lhcTab = [lhcA, lhcB, lhcC, lhcD];
    changePrices (lhcTab, 1);
    
     // league
    const lA = fs.readFileSync('Ninja_json/Necropolis_UniqueJewel.json', 'utf8');
    const lB = fs.readFileSync('Ninja_json/Necropolis_UniqueWeapon.json', 'utf8');
    const lC = fs.readFileSync('Ninja_json/Necropolis_UniqueArmour.json', 'utf8');
    const lD = fs.readFileSync('Ninja_json/Necropolis_UniqueAccessory.json', 'utf8');
    const lTab = [lA, lB, lC, lD];
    changePrices (lTab, 0);
*/
    let string = '';
    for (const item of uniqueArray) {
       string += `{ id: ${item.id}, 
            baseType: "${item.baseType}", 
            shortName: "${item.shortName}", 
            name: "${item.name}", 
            image: "${item.image}", 
            chaosValueLeague: ${item.chaosValueLeague}, 
            chaosValueHCLeague: ${item.chaosValueHCLeague}, 
            chaosValueStandard: ${item.chaosValueStandard} },\n`;
    }
    const strAll = 'const uniqueItemArray = [\n' + string + '];';

    try {
        fs.writeFileSync('Ninja_json/GeneratedUniqueArray.js', strAll, 'utf8');
    } catch (err) {
        console.log('fs.writeFileSync ', err);
    }
}

function changePrices (tab, l) {
    let tab2 = JSON.parse(tab);
    console.log(tab2);
    tab2.forEach(t => {
        if (t) {
            t.lines.forEach(item => {
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

