let blightOilsPanelsTab = [];
let chosenOils = [];
/**
 * Blight Extractor
 * 
 */
function panelBlightRegex(panel) {
    const goldenBox = panel.querySelector('#panel-blight-extractor-cointainer');
    const loadMore = panel.querySelector('#blight-extractor-add-more');

    blightOilsPanelsTab = [];

    loadMore.addEventListener('click', event => {
        for (const d of blightOilsPanelsTab) {
            if (d.className === 'hidden') {
                d.className = 'shown';
                return;
            }
        }
        event.target.innerText = 'No more.';
    });

    const golden = getOilsTheBestOnes();
    let goldenRegex = ``;
    let oneMod = '';

    golden.forEach(obj => {
        if (obj.nameShort !== 'empty1234') {
            let oil3 = '';
            if (obj.oil3 !== 'empty' && obj.oil3) {
                oil3 = `<img src=${getOilUrl(obj.oil3)} />`;
            }
            oneMod += `<div style="display: flex; align-items: center"><img src=${getOilUrl(obj.oil1)}/><img src=${getOilUrl(obj.oil2)}/>${oil3} <p style="max-width: 500px" title="${obj.name}">${obj.name}</p></div>`;

            if (goldenRegex.length + obj.nameShort.length + 9 > 50) {
                goldenRegex = goldenRegex.substring(0, goldenRegex.length - 1);
                const div = document.createElement('div');
                div.style.backgroundColor = '#444';
                div.className = blightOilsPanelsTab.length > 0 ? 'hidden' : 'shown';

                const d = document.createElement('div');
                d.className = 'hidden';
                d.innerHTML = `<div class="blight-extractor-regex-oils"">${oneMod}</div>`;

                div.innerHTML = `
                <div class="regex-input-window" id="blight-extractor-window-${blightOilsPanelsTab.length}" readonly>"(${goldenRegex.toLowerCase()}).*ant"</div>
			    <p id="blight-extractor-counter">${goldenRegex.length + 9} / 50</p>
            `;
                div.appendChild(d);

                const regexWindow = div.querySelector(`#blight-extractor-window-${blightOilsPanelsTab.length}`);
                regexWindow.addEventListener('click', (event) => {
                    copyToClipboard(event.target.innerText);
                });

                const btn = document.createElement('button');
                btn.innerText = 'Show Oils and Skils';
                btn.addEventListener('click', () => {
                    if (d.className === 'hidden') {
                        d.className = 'shown';
                        btn.innerText = 'Hide Oils and Skils';
                    } else {
                        d.className = 'hidden';
                        btn.innerText = 'Show Oils and Skils';
                    }
                });
                div.appendChild(btn);

                goldenBox.appendChild(div);
                blightOilsPanelsTab.push(div);
                oneMod = '';
                goldenRegex = ``;
            } else {
                goldenRegex += obj.nameShort + '|';
            }
        }
    });
}

function getOilsTheBestOnes() {
    const golden = [];
    oilsPassiveSkills.forEach(obj => {
        if (obj.oil1 === 'Golden Oil' || obj.oil2 === 'Golden Oil' || obj.oil3 === 'Golden Oil') {
            golden.push(obj);
        } else if (obj.oil1 === 'Silver Oil' || obj.oil2 === 'Silver Oil' || obj.oil3 === 'Silver Oil') {
            golden.push(obj);
        }
    });

    oilsAnointmentsRings.forEach(obj => {
        if (obj.oil1 === 'Golden Oil' || obj.oil2 === 'Golden Oil') {
            golden.push(obj);
        } else if (obj.oil1 === 'Silver Oil' || obj.oil2 === 'Silver Oil') {
            golden.push(obj);
        }
    });

    return golden.sort((a, b) => {
        const oilOrder = (oil) => {
            if (oil) {
                return oilsBases[oilsBases.findIndex(o => o.name === oil)].price;
            } else {
                return 20;
            }
        };

        const aPriceSum = oilOrder(a.oil1) + oilOrder(a.oil2) + oilOrder(a.oil3);
        const bPriceSum = oilOrder(b.oil1) + oilOrder(b.oil2) + oilOrder(b.oil3);

        return bPriceSum - aPriceSum;
    });
}

function getOilUrl(oilName) {
    const oilObject = oilsBases.find(oil => oil.name === oilName);
    return oilObject.url;
}

/**
 * Blight Anoitment
 * 
 */
function panelBlightAnoitment(panel) {
    const modsCointainer = panel.querySelector('#panel-blight-anoitment-mods');
    const modsInput = panel.querySelector('#panel-blight-anoitment-search');
    const chosedOil1 = panel.querySelector('#blight-anoitment-oil1');
    const chosedOil2 = panel.querySelector('#blight-anoitment-oil2');
    const chosedOil3 = panel.querySelector('#blight-anoitment-oil3');
    const modWindow = panel.querySelector('#blight-anoitment-mod-name');
    const btnOilClear = panel.querySelector('#blight-anoitment-clear');
    const btnOilSepia = panel.querySelector('#blight-anoitment-sepia');
    const btnOilAmber = panel.querySelector('#blight-anoitment-amber');
    const btnOilVeridant = panel.querySelector('#blight-anoitment-veridant');
    const btnOilTeal = panel.querySelector('#blight-anoitment-teal');
    const btnOilAzure = panel.querySelector('#blight-anoitment-azure');
    const btnOilIndigo = panel.querySelector('#blight-anoitment-indigo');
    const btnOilViolet = panel.querySelector('#blight-anoitment-violet');
    const btnOilCrimson = panel.querySelector('#blight-anoitment-crimson');
    const btnOilBlack = panel.querySelector('#blight-anoitment-black');
    const btnOilOpalescent = panel.querySelector('#blight-anoitment-opalescent');
    const btnOilSilver = panel.querySelector('#blight-anoitment-silver');
    const btnOilGolden = panel.querySelector('#blight-anoitment-golden');

    const btnTab = [btnOilClear, btnOilSepia, btnOilAmber, btnOilVeridant, btnOilTeal, btnOilAzure, btnOilIndigo, btnOilViolet, btnOilCrimson, btnOilBlack, btnOilOpalescent, btnOilSilver, btnOilGolden];

    chosedOil1.innerHTML = '';
    chosedOil2.innerHTML = '';
    chosedOil3.innerHTML = '';
    modWindow.innerHTML = 'Select oils bellow';

    btnTab.forEach(btn => {
        btn.addEventListener('click', () => {
            chosenOils.length < 3 ? chosenOils.push(btn.title) : chosenOils[2] = btn.title;
            showChosenOils(btn.title, chosedOil1, chosedOil2, chosedOil3, modWindow);
        });
    });

    chosedOil1.addEventListener('click', () => {
        chosedOil1.innerHTML = '';
        chosenOils.splice(0, 1);
        chosenOils.forEach(o => showChosenOils(o, chosedOil1, chosedOil2, chosedOil3, modWindow));
    });

    chosedOil2.addEventListener('click', () => {
        chosedOil2.innerHTML = '';
        chosenOils.splice(1, 1);
        chosenOils.forEach(o => showChosenOils(o, chosedOil1, chosedOil2, chosedOil3, modWindow));
    });

    chosedOil3.addEventListener('click', () => {
        chosedOil3.innerHTML = '';
        chosenOils.splice(2, 1);
        chosenOils.forEach(o => showChosenOils(o, chosedOil1, chosedOil2, chosedOil3, modWindow));
    });

    const modsAll = oilsAnointmentsRings.concat(oilsPassiveSkills);
    modsCointainer.innerHTML = '';
    modsAll.forEach(obj => {
        createBlightAnoitmentLine(modsCointainer, obj)
    });

    modsInput.addEventListener('input', function () {
        const text = this.value.toLowerCase();
        modsCointainer.innerHTML = '';
        modsAll.forEach(obj => {
            if (obj.name.toLocaleLowerCase().includes(text)) {
                createBlightAnoitmentLine(modsCointainer, obj)
            }
        });
    });

}

function createBlightAnoitmentLine(cointainer, obj) {
    const div = document.createElement('div');
    div.className = 'blight-anoitment-line';
    let strOil3 = '';
    if (obj.oil3 !== '') {
        strOil3 = `<img src=${getOilUrl(obj.oil3)} />`;
    }
    div.innerHTML = `
        <img src=${getOilUrl(obj.oil1)} />
        <img src=${getOilUrl(obj.oil2)} />
        ${strOil3}
        <p style="margin-left: 5px">${obj.name}</p>
    `;
    cointainer.appendChild(div);
}

function showChosenOils(oilName, con1, con2, con3, conName) {
    if (chosenOils.length == 1) {
        con1.innerHTML = `<img src="${getOilUrl(chosenOils[0])}" />`;
        con2.innerHTML = '';
        con3.innerHTML = '';
        con1.title = oilName;
    } else if (chosenOils.length == 2) {
        con1.innerHTML = `<img src="${getOilUrl(chosenOils[0])}" />`;
        con2.innerHTML = `<img src="${getOilUrl(chosenOils[1])}" />`;
        con3.innerHTML = '';
        con2.title = oilName;
    } else if (chosenOils.length == 3) {
        con1.innerHTML = `<img src="${getOilUrl(chosenOils[0])}" />`;
        con2.innerHTML = `<img src="${getOilUrl(chosenOils[1])}" />`;
        con3.innerHTML = `<img src="${getOilUrl(chosenOils[2])}" />`;
        con3.title = oilName;
        chosenOils[2] = oilName;
    }
    
    if (chosenOils.length < 2) {
        conName.innerText = 'Select oils bellow';
    } else if (chosenOils.length == 2) {
        oilsAnointmentsRings.forEach(i => {
            if ((i.oil1 === chosenOils[0] & i.oil2 === chosenOils[1]) || (i.oil1 === chosenOils[1] & i.oil2 === chosenOils[0])) {
                conName.innerText = i.name;
            }
        });
    } else if (chosenOils.length == 3) {
        let found = false;
        const permutations = permute(chosenOils);
        oilsPassiveSkills.forEach(i => {
            if (permutations.some(p =>
                (i.oil1 === p[0] && i.oil2 === p[1] && i.oil3 === p[2])
                || (i.oil1 === p[1] && i.oil2 === p[2] && i.oil3 === p[0])
                || (i.oil1 === p[2] && i.oil2 === p[0] && i.oil3 === p[1])
            )) {
                conName.innerText = i.name;
                found = true;
            }
        });
        if (!found) {
            conName.innerText = 'Reserved by for [hidden]';
        }
    }
}

const permute = (arr) => {
    const result = [];

    const helper = (current, remaining) => {
        if (current.length === arr.length) {
            result.push(current);
            return;
        }
        for (let i = 0; i < remaining.length; i++) {
            const next = current.concat(remaining[i]);
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
            helper(next, newRemaining);
        }
    };

    helper([], arr);
    return result;
};





/** Only for start */
function parseOilsPassiveSkills() {
    const inputTest = document.getElementById('testID');

    let text = inputTest.value;

    text = text.replaceAll('\t', '');
    const tab = text.split('\n');

    let mod = { oil1: "", oil2: "", oil3: "", name: "", nameDetailed: "" };
    let modTab = [];
    let oilsCounter = 0;
    let name = 1;
    tab.forEach(line => {
        //console.log(line.substring(line.length - 4));
        if (line.substring(line.length - 4) === ' Oil') {
            oilsCounter++;
            if (oilsCounter == 1) {
                mod.nameDetailed = mod.nameDetailed.substring(0, mod.nameDetailed.length - 1);
                modTab.push(mod);
                mod = { oil1: "", oil2: "", oil3: "", name: "", nameDetailed: "" };

                mod.oil1 = line.trim();
            } else if (oilsCounter == 2) {
                mod.oil2 = line.trim();
            } else if (oilsCounter == 3) {
                mod.oil3 = line.trim();
                oilsCounter = 0;
                name = 0;
                return;
            }
        }
        if (oilsCounter === 0 && name === 0) {
            mod.name = line.trim();
            name = 1;
            return;
        }
        if (oilsCounter === 0 && name === 1) {
            mod.nameDetailed += line.trim() + '|';
        }
        
    });

    console.log(modTab);

    let str = '';
    modTab.forEach(obj => {
        str += `
    {
        oil1: "${obj.oil1}",
        oil2: "${obj.oil2}",
        oil3: "${obj.oil3}",
        name: "${obj.name}",
        nameDetailed: "${obj.nameDetailed}",
    },`;
    });

    inputTest.value = str;
}

function _generatePermutations(string) {
    const permutations = new Set();
    for (let i = 0; i < string.length; i++) {
        for (let j = 3; j < 8; j++) {
            if (string[i + j] !== '.') {
                permutations.add(string.substring(i, i + j).trim());
            }
        }
    }
    return permutations;
}

//generateBlightRegexes();
function generateBlightRegexes() {
    let sets = new Map();
    for (const obj of oilsAnointmentsRings) {
        let reg = _generatePermutations(obj.name.toLocaleLowerCase());
        sets.set(obj.name, reg);
    }

    for (const [key1, set1] of sets.entries()) {
        for (const [key2, set2] of sets.entries()) {
            if (key1 !== key2) {
                const intersection = new Set([...set1].filter(x => set2.has(x)));
                // Remove duplicates from both sets
                for (const element of set1) {
                    if (set1.size > 2 && set2.size > 2)
                    if (intersection.has(element)) {
                        set1.delete(element);
                        set2.delete(element);
                    }
                }
            }
        }
    }

    for (const [name, nameShort] of sets) {
        let reg = 'empty1234';
        for (const s of nameShort) {
            if (s.length <= reg.length && s.length > 1) {
                let howManyTimes = 0;
                oilsAnointmentsRings.concat(oilsPassiveSkills).forEach(n => {
                    if (n.name.toLowerCase().includes(s)) {
                        howManyTimes++;
                    }
                });
                if (howManyTimes < 2) {
                    reg = s;
                    console.log(s);
                }
            }
        }

        for (const item of oilsAnointmentsRings) {
            if (item.name === name) {
                item.nameShort = reg;
            }
        }
    }
    console.log(oilsAnointmentsRings);
}


//generateBlightSkillsRegexes();
function generateBlightSkillsRegexes() {
    let sets = new Map();
    for (const obj of oilsPassiveSkills) {
        let reg = _generatePermutations(obj.name.toLocaleLowerCase());
        sets.set(obj.name, reg);
    }

    for (const [key1, set1] of sets.entries()) {
        for (const [key2, set2] of sets.entries()) {
            if (key1 !== key2) {
                const intersection = new Set([...set1].filter(x => set2.has(x)));
                // Remove duplicates from both sets
                for (const element of set1) {
                    if (set1.size > 2 && set2.size > 2)
                        if (intersection.has(element)) {
                            set1.delete(element);
                            set2.delete(element);
                        }
                }
            }
        }
    }
    
    for (const [name, nameShort] of sets) {
        let reg = 'empty1234';
        for (const s of nameShort) {
            if (s.length <= reg.length && s.length > 1) {
                let howManyTimes = 0;
                oilsPassiveSkills.concat(oilsAnointmentsRings).forEach(n => {
                    if (n.name.toLowerCase().includes(s)) {
                        howManyTimes++;
                    }
                });
                if (howManyTimes < 2) {
                    reg = s;
                }
            }
        }

        for (const item of oilsPassiveSkills) {
            if (item.name === name) {
                item.nameShort = reg;
            }
        }
    }
    console.log(oilsPassiveSkills);
}






