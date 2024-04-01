function generatePermutations(string) {
    const permutations = new Set();
    for (let i = 0; i < string.length; i++) {
        for (let j = 2; j < 8; j++) {
            permutations.add(string.substring(i, i + j).trim());
        }
    }
    return permutations;
}

function chaosValueParser(val) {
    let k = 0;
    while (val > 1000) {
        k++;
        val -= 1000;
    }
    //const url = "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png";
    if (k > 0) {
        return k + 'k+';// <image style="width: 20px" src="' + url + '">';
    } else {
        return parseInt(val);// + 'k <image style="width: 20px" src="' + url + '">';
    }
}


function showHightValue() {
    let itemsArray = [];
    for (const showThis of uniqueToShow) {
        let line;
        for (const all of uniqueItemArray) {
            if (showThis === all.name) {
                line = {
                    baseType: all.baseType,
                    regex: all.shortName,
                    name: all.name,
                    image: all.image,
                    chaosValueLeague: all.chaosValueLeague,
                    chaosValueHCLeague: all.chaosValueHCLeague,
                    chaosValueStandard: all.chaosValueStandard,
                    alreadyShown: false
                };
            }
        }

        if (line) {
            //const div = document.createElement('div');
            //div.innerHTML = line;
            //textDiv.appendChild(div);
            itemsArray.push(line);
        }
    }
    return itemsArray;
}


function testfunction() {
    const textarea = document.createElement('textarea');

    const baseTypesTab = new Set();
    for (const item of uniqueItemsArray) {
        baseTypesTab.add(item.baseType);
    }

    let sets = new Map();
    for (const line of baseTypesTab) {
        let reg = generatePermutations(line);
        sets.set(line, reg);
    }

    for (const [key1, set1] of sets.entries()) {
        for (const [key2, set2] of sets.entries()) {
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

    for (const [baseType, type] of sets) {
        let reg = 'emptyyyyy';
        for (const s of type) {
            if (s.length < reg.length && s.length > 1) {
                reg = s;
            }
        }

        for (const item of uniqueItemsArray) {
            if (item.baseType === baseType) {
                item.shortName = reg;
            }
        }
    }

    let string = '';
    for (const item of uniqueItemsArray) {
        string += `{ id: ${item.id}, baseType: "${item.baseType}", shortName: "${item.shortName}", name: "${item.name}", image: "${item.image}", chaosValueLeague: ${item.chaosValueLeague}, chaosValueHCLeague: ${item.chaosValueHCLeague}, chaosValueStandard: ${item.chaosValueStandard} },\n`;
    }
    textarea.innerHTML = 'const uniqueItemsArray = [' + string + '];';
    textDiv.appendChild(textarea);
}
