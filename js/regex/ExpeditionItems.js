function showGwennenLeagueItems(leagueName, cointainer) {
    const items = showHightValue();
    if (leagueName === 'leaguehc') {
        items.sort((a, b) => (b.chaosValueHCLeague - a.chaosValueHCLeague));
    } else if (leagueName === 'standard') {
        items.sort((a, b) => (b.chaosValueStandard - a.chaosValueStandard));
    } else {
        items.sort((a, b) => (b.chaosValueLeague - a.chaosValueLeague));
    }

    const regexTab = [];
    
    for (const i of items) {
        if (i.alreadyShown === true) {
            continue;
        }
        let allStrings = 0;
        for (const i of regexTab) {
            allStrings += i.length;
        }
        if (2 + regexTab.length + allStrings + i.regex.length < 50) {
            regexTab.push(i.regex);
        } else {
            break;
        }

        const sameBases = [];
        items.forEach(others => {
            if (others.baseType === i.baseType && others.alreadyShown === false) {
                others.alreadyShown = true;
                i.alreadyShown = true;

                const div = document.createElement('div');
                div.title = others.name + ' (' + others.baseType + ')';
                div.className = 'regex-gwennen-item';
                if (leagueName === 'leaguehc') {
                    div.innerHTML = `<image style="max-width: 100px; max-height: 100px" src="${others.image}">
                                <span class="chaos-value">${chaosValueParser(others.chaosValueHCLeague)}</span>`;
                } else if (leagueName === 'standard') {
                    div.innerHTML = `<image style="max-width: 100px; max-height: 100px" src="${others.image}">
                                <span class="chaos-value">${chaosValueParser(others.chaosValueStandard)}</span>`;
                } else {
                    div.innerHTML = `<image style="max-width: 100px; max-height: 100px" src="${others.image}">
                                <span class="chaos-value">${chaosValueParser(others.chaosValueLeague)}</span>`;
                }
                sameBases.push(div);
            }
        });
        if (sameBases.length > 1) {
            const con = document.createElement('div');
            con.className = 'regex-gwennen-same-base';
            sameBases.forEach(i => {
                con.appendChild(i);
                cointainer.appendChild(con);
            });
        } else if (sameBases.length === 1) {
            cointainer.appendChild(sameBases[0]);
        }
    }
    //console.log(regexTab);
    return regexTab;
}



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
        for (const all of uniqueItemArray2) {
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
