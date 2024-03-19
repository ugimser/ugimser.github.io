const testRegex = document.getElementById('testRegex');
const content = document.getElementById('textRegex');


testRegex.addEventListener('click', () => {
    const removeFromAll = 'map tier item quantity rarity monster pack size travel to this map by using it in a personal map device ' +
        'maps can only be used once' +
        'increased amount of rewards drops by of its value' +
        'shaper elder conqueror drox veritania al-hezmin baran enslaver eradicator purifier constrictor' +
                       'chimera hydra phoenix minotaur';

    let namesMap = new Map();
    for (const [name, set] of mapsNames.entries()) {
        let uniqueShort = new Set([...new Set(generatePermutations(set.name.toLowerCase())),
        ...new Set(generatePermutations(removeFromAll))]);
        namesMap.set(name, uniqueShort);
    }
    for (const [key1, set1] of namesMap.entries()) {
        for (const [key2, set2] of namesMap.entries()) {
            if (key1 !== key2) {
                const intersection = new Set([...set1].filter(x => set2.has(x)));

                // Remove duplicates from both sets
                for (const element of set1) {
                    if (intersection.has(element)) {
                        set1.delete(element);
                        set2.delete(element);
                    }
                }

            }
        }
    }

    

    //console.log(mapNamesSet.entries());

    //const removeMapsNamesSet = new Set(generatePermutations(removeMapsNames.join("").toLowerCase() + removeFromAll));
    let m = new Map();
    for (const [nameLong, set] of mapData.entries()) {
        let noBracketDigital = nameLong.replace(/([()]*[0-9][0-9]-[0-9][0-9]*[()]*)/, "");
        let uniqueShort = new Set([...new Set(generatePermutations(noBracketDigital.toLowerCase())),
        //...new Set(generatePermutations(set.nameMod.toLowerCase())),
        ...new Set(generatePermutations(removeFromAll))
     //       ...removeMapsNamesSet
        ]);
        
        m.set(nameLong, uniqueShort);
    }
    //console.log(mapNamesString);
    for (const [key1, set1] of m.entries()) {
        for (const [key2, set2] of m.entries()) {
            if (key1 !== key2) { 
                const intersection = new Set([...set1].filter(x => set2.has(x)));

                // Remove duplicates from both sets
                for (const element of set1) {
                    if (intersection.has(element)) {
                        set1.delete(element);
                        set2.delete(element);
                    }
                }
                
            }
        }        
    }

    // remove maps names similarities
    for (const [key1, set1] of m.entries()) {
        for (const [key2, set2] of namesMap.entries()) {
            //if (key1 !== key2) {
                const intersection = new Set([...set1].filter(x => set2.has(x)));

                // Remove duplicates from both sets
                for (const element of set1) {
                    if (intersection.has(element)) {
                        set1.delete(element);
                        //set2.delete(element);
                    }
                }

            //}
        }
    }

    var modsLists = document.getElementsByClassName('allModsList');

    let mapDataCode = 'const mapData = new Map ([\n';

    for (const [nameLong, set] of m.entries()) {
        let shortNames = '';
        let minLength = 6;
        let lastShort;
        for (const s of set) {
            let howManyTimes = 0;
            for (const [nameLongInner, data] of mapData.entries()) { // Iteruj po kluczach i wartoœciach Mapy
                if (data.nameLong.indexOf(s) !== -1 && nameLong !== nameLongInner) { // U¿yj 'data.nameLong'
                    howManyTimes++;
                }
            }
            if (s.length <= minLength & s.length > 1 & howManyTimes < 2) {
                minLength = s.length;
                shortNames += '*' + s + '*';
                lastShort = s;
            }
        }
        if (shortNames) {
            let p = document.createElement('p');
            p.innerHTML = nameLong + '<br>' + shortNames + '<br>';
            modsLists[0].appendChild(p);
        }
        mapDataCode += '\t["' + nameLong.replaceAll('\n', '|') + '", {\n' +
            '\t\t"nameLong": "' + nameLong.replaceAll('\n', '|') + '",\n' +
            '\t\t"nameShort": "' + lastShort + '",\n' +
            '\t\t"nameMod": "' + mapData.get(nameLong).nameMod + '",\n' +
            '\t\t"packSize": ' + mapData.get(nameLong).packSize + ',\n' +
            '\t\t"quantity": ' + mapData.get(nameLong).quantity + ',\n' +
            '\t\t"rarity": ' + mapData.get(nameLong).rarity + ',\n' +
            '\t\t"parent": "' + mapData.get(nameLong).parent + '",\n' +
            '\t\t"danger": ' + mapData.get(nameLong).danger + ',\n' +
            '\t\t"popularity": ' + mapData.get(nameLong).popularity + '\n' +
            '\t}],\n';
    };
    mapDataCode += ']);';
    //content.innerHTML = mapDataCode;

    let mapsNamesCode = 'const mapsNames = new Map ([\n';

    for (const [name, set] of namesMap.entries()) {
        let shortNames = '';
        let minLength = 6;
        let lastShort;
        for (const s of set) {
            if (s.length <= minLength & s.length > 1) {
                minLength = s.length;
                shortNames += '*' + s + '*';
                lastShort = s;
            }
        }
        if (shortNames) {
            let p = document.createElement('p');
            p.innerHTML = name + '<br>' + shortNames + '<br>';
            modsLists[1].appendChild(p);
        }
        mapsNamesCode += '\t["' + name.replaceAll('\n', '|') + '", {\n' +
            '\t\t"name": "' + name.replaceAll('\n', '|') + '",\n' +
            '\t\t"nameShort": "' + lastShort + '",\n' +
            '\t}],\n';
    };
    mapsNamesCode += ']);';
    content.innerHTML = mapsNamesCode;
});



function generatePermutations(string) {
    const permutations = new Set();
    for (let i = 0; i < string.length; i++) {
        for (let j = 2; j < 6; j++) {
            permutations.add(string.substring(i, i+j).trim());
        }
    }
    return permutations;
}
;
