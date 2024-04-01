//const modsLists = document.getElementsByClassName('allModsList');
const resultsText = document.getElementById('resultsText');
const resultsLength = document.getElementById('resultsLength');
const inputElement = document.getElementById('mods-search');

//let regexActual = "!(";

//makeModList();
function makeModList() {
    for (const divContener of modsLists) {
        const tableHead = document.createElement('h3');
        tableHead.innerHTML = 'Base'
        divContener.appendChild(tableHead);

        for (const [nameLong] of mapData.entries()) {
            const par = document.createElement('div');
            par.innerHTML = nameLong.replaceAll('|', '<br>');

            let isClicked = false;
            par.addEventListener('click', () => {
                const shortName = mapData.get(nameLong).nameShort;
                if (!isClicked) {
                    isClicked = true;
                    par.classList.add('selected');
                    changeRegex(true, shortName);
                } else {
                    isClicked = false;
                    par.classList.remove('selected');
                    changeRegex(false, shortName);
                }
                //console.log(shortName);
            });

            divContener.appendChild(par);
        }
    }
}

function changeRegex(add = true, shortString) {
    if (add === true) {
        if (regexActual.length < 4) {
            regexActual = shortString;
        } else {
            regexActual.substring(-2);
        }
    } else {
        regexActual = regexActual.replace(shortString, "");
        console.log(regexActual);

    }

    resultsText.innerHTML = regexActual;
    resultsLength.innerHTML = 'Length: ' + regexActual.length + ' / 50';
}


function changeRegexEvent(pID, inputValue, lengthEle, quantityEle, packsizeEle, badModsTab, goodModsTab, implicitModsTab) {
    const objToChange = panelRegexes.find(obj => obj.panelID === pID);

    // length
    lengthEle.innerHTML = inputValue.length + ' / 50';
    
    // quantity
    if (inputValue.includes('"m q.')) {
        const start = inputValue.indexOf('"m q.');
        const end = inputValue.indexOf('%"');
        const qreg = inputValue.slice(start + 6, end);
        inputValue = inputValue.substring(0, start) + inputValue.substring(end + 2);
        try {
            objToChange.regexQuantity = '.*' + qreg;
            quantityEle.value = extractNumbers(qreg);
        }
        catch (err) {
            console.log('extractNumbers(qreg)' + err);
        }
    }

    // pack size
    if (inputValue.includes('"ze.*')) {
        const start = inputValue.indexOf('"ze.*');
        const end = inputValue.indexOf('%"');
        const qreg = inputValue.slice(start + 5, end);
        inputValue = inputValue.substring(0, start) + inputValue.substring(end + 2);
        try {
            objToChange.regexPackSize = '.*' + qreg;
            packsizeEle.value = extractNumbers(qreg);
        }
        catch (err) {
            console.log('extractNumbers(qreg)' + err);
        }
    }

    // implicits
    if (inputValue.includes('.*lic"')) {
        const start = inputValue.indexOf('"(');
        const end = inputValue.indexOf('.*lic"');
        const qreg = inputValue.slice(start + 2, end - 1);
        inputValue = inputValue.substring(0, start) + inputValue.substring(end + 6);
        //console.log(inputValue);
        //console.log(qreg);
        try {
            findWantedMods(objToChange, qreg, implicitModsTab, true);
        }
        catch (err) {
            console.log('extractNumbers(qreg)' + err);
        }
    }

    // mods
    if (inputValue.length > 2 && (inputValue[0] === '!' || inputValue[1] === '!')) {
        const splited = [
            inputValue.slice(1, inputValue.indexOf('" ') + 1).trim(),
            inputValue.slice(inputValue.indexOf('" ') + 1).trim()
        ];
        //console.log(splited[0]);
        //console.log(splited[1]);
        //return;
        if (splited.length > 1) {
            findDontWantedMods(objToChange, splited[0].length < 1 ? splited[1] : splited[0], badModsTab);
            if (splited[1].length > 1 && splited[0].length > 1 && (splited[1].length !== splited[0].length + 2)) {
                findWantedMods(objToChange, splited[1], goodModsTab);
                //console.log('here');
            }
        } else {
            findDontWantedMods(objToChange, inputValue, badModsTab);
        }
    } else if (inputValue.length > 1) {
        findWantedMods(objToChange, inputValue, goodModsTab);
    }
}
/*
inputElement.addEventListener('input', function (event) {
    let inputValue = event.target.value.toLowerCase();

    // quantity
    if (inputValue.includes('"m q.')) {
        const start = inputValue.indexOf('"m q.');
        const end = inputValue.indexOf('%"');
        const qreg = inputValue.slice(start + 6, end);
        inputValue = inputValue.substring(0, start) + inputValue.substring(end + 2);
        //console.log(qreg);
        //console.log(extractNumbers (qreg));
    }

    // pack size
    if (inputValue.includes('"iz.*')) {
        const start = inputValue.indexOf('"iz.*');
        const end = inputValue.indexOf('%"');
        const qreg = inputValue.slice(start + 5, end);
        inputValue = inputValue.substring(0, start) + inputValue.substring(end + 2);
        //console.log(qreg);
        //console.log(extractNumbers(qreg));
    }

    //findDontWantedMods(inputValue);
    //findWantedMods(inputValue);
    //return;
    if (inputValue.length > 2 && inputValue[1] === '!') {
        const splited = [
            inputValue.slice(1, inputValue.indexOf('" ')),
            inputValue.slice(inputValue.indexOf('" ') + 1),
        ];
        console.log(splited[0]);
        console.log(splited[1]);
        //return;
        if (splited.length > 1) {
            findDontWantedMods(splited[0]);
            //console.log(splited[1]);
            findWantedMods(splited[1].trim());
        } else {
            findDontWantedMods(inputValue);
        }
    } else {
        findWantedMods(inputValue);
    }
});

*/
function findDontWantedMods(objToChange, inputValue, tab) {
    const sanitized = inputValue
        //.match(/"(.*?)"/g)
        .split("\" ")
        //.split(" ")
        .join("|")
        .replace(/\\"(?:m q|ze).*%/, "")
        .replaceAll("\"", "")
        .replaceAll("!", "")
        .trim();
        
    tab.forEach(obj => {
        try {
            if (obj.textContent.toLowerCase().match(sanitized)) {
                obj.classList.add('map-mod-selected');
                objToChange.regexBad.push(obj.title);
            }
        } catch (err) {
            console.log('findDontWantedMods ' + err);
        }
    });
}
function findWantedMods(objToChange, inputValue, tab, implicits = false) {
    let sanitized;
    inputValue = inputValue.trim();

    const betweenQuote = inputValue.match(/"(.*?)"/g);
    if (betweenQuote) {
        for (const quote of betweenQuote) {
            inputValue = inputValue.replace(quote + '', "").trim();
            //console.log(betweenQuote);
            //console.log(inputValue);
        }
        sanitized = inputValue
            .split(" ")
            .concat(betweenQuote)
            .join("|")
            .replace(/\\"(?:m q|ze).*%/, "")
            .replaceAll("\"", "")
            .replaceAll("!", "")
            .trim();
        //console.log('if');
    } else {
        sanitized = inputValue
            .split(" ")
            .join("|")
            .replace(/\\"(?:m q|ze).*%/, "")
            .replaceAll("\"", "")
            .replaceAll("!", "")
            .trim();
    }

    tab.forEach(obj => {
        if (obj.textContent.toLowerCase().match(sanitized)) {
            obj.classList.add('map-mod-selected');
            if (implicits) {
                objToChange.regexKirac.push(obj.title);
            } else {
                objToChange.regexGood.push(obj.title);
            }
        }
    });
}

function extractNumbers(regex) {
    // Utworzenie pustej tablicy na liczby
    //const numbers = [];
    let firstNumber = 0;

    // Utworzenie obiektu RegExp z wyra¿enia regularnego
    const re = new RegExp(regex);

    // Iteracja po wszystkich liczbach w zakresie 20-99
    for (let i = 20; i <= 99; i++) {
        // Konwersja liczby na string
        const numberString = i.toString();

        // Sprawdzenie, czy liczba pasuje do wyra¿enia regularnego
        if (re.test(numberString)) {
            // Dodanie liczby do tablicy
            // numbers.push(numberString);
            return numberString;
        }
    }

    // Iteracja po wszystkich liczbach trzycyfrowych zaczynaj¹cych siê od 1
    for (let i = 100; i <= 199; i++) {
        // Konwersja liczby na string
        const numberString = i.toString();

        // Sprawdzenie, czy liczba pasuje do wyra¿enia regularnego
        if (re.test(numberString)) {
            // Dodanie liczby do tablicy
            //numbers.push(numberString);
            return numberString;
        }
    }

    // Zwrócenie tablicy liczb
    return firstNumber;
}








function createMapModifierList(table, className, cointainer, regexWindow, removeFunction, addFunction) {
    modTab = [];
    table.forEach(mapMod => {
        const modLine = document.createElement('button');
        modLine.className = className;
        modLine.classList.add('shown');
        modLine.title = mapMod.nameShort;
        modLine.innerHTML = mapMod.nameLong.replaceAll('|', '<br>');;
        cointainer.appendChild(modLine);
        modTab.push(modLine);

        modLine.addEventListener('click', () => {
            if (modLine.classList.contains('map-mod-selected')) {
                modLine.classList.remove('map-mod-selected');
                removeFunction(mapMod.nameShort, regexWindow);
            } else {
                modLine.classList.add('map-mod-selected');
                addFunction(mapMod.nameShort, regexWindow);
            }
        });
    });
    return modTab;
}

const panelRegexes = [{
    panelID: '',
    regexBad: [],
    regexGood: [],
    regexKirac: [],
    regexQuantity: '',
    regexPackSize: '',
}];

function clearMapRegex(pID) {
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            obj.regexBad = [];
            obj.regexGood = [];
            obj.regexKirac = [];
            obj.regexQuantity = '';
            obj.regexPackSize = '';
            return;
        }
    });
}

function addMapRegexBad(shortName, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            obj.regexBad.push(shortName);
            return;
        }
    });
    
    showMapRegex(mapModWindow, pID);
}

function removeMapRegexBad(shortName, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            var index = obj.regexBad.indexOf(shortName);
            if (index !== -1) {
                obj.regexBad.splice(index, 1);
            }
            return;
        }
    });
    
    showMapRegex(mapModWindow, pID);
}

function addMapRegexGood(shortName, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            if (shortName.includes(' ')) {
                shortName = '"' + shortName + '"';
            }
            obj.regexGood.push(shortName);
            return;
        }
    });
    
    showMapRegex(mapModWindow, pID);
}

function removeMapRegexGood(shortName, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            if (shortName.includes(' ')) {
                shortName = '"' + shortName + '"';
            }
            var index = obj.regexGood.indexOf(shortName);
            if (index !== -1) {
                obj.regexGood.splice(index, 1);
            }
            return;
        }
    });

    showMapRegex(mapModWindow, pID);
}

function addMapRegexKirac(shortName, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            obj.regexKirac.push(shortName);
            return;
        }
    });

    showMapRegex(mapModWindow, pID);
}

function removeMapRegexKirac(shortName, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            var index = obj.regexKirac.indexOf(shortName);
            if (index !== -1) {
                obj.regexKirac.splice(index, 1);
            }
            return;
        }
    });

    showMapRegex(mapModWindow, pID);
}

function changeMapRegexQuantity(newValue, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            newValue = newValue.replace(/^0+/, '');
            if (newValue.length < 2) {
                obj.regexQuantity = '';
                showMapRegex(mapModWindow, pID);
                return;
            }
            if (newValue < 80) {
                obj.regexQuantity = ".*([" + newValue[0] + "-9].|1..)";
            } else if (newValue < 90) {
                obj.regexQuantity = ".*([" + newValue[0] + "9].|1..)";
            } else if (newValue < 100) {
                obj.regexQuantity = ".*(" + newValue[0] + ".|1..)";
            } else if (newValue < 200) {
                obj.regexQuantity = ".*1[" + newValue[1] + "-9].";
            } else {
                obj.regexQuantity = ".*2[" + newValue[1] + "-9].";
            }
            return;
        }
    });

    if (mapModWindow)
    showMapRegex(mapModWindow, pID);
}

function changeMapRegexPackSize(newValue, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            newValue = newValue.replace(/^0+/, '');
            if (newValue.length < 2) {
                obj.regexPackSize = '';
                showMapRegex(mapModWindow, pID);
                return;
            }
            if (newValue < 80) {
                obj.regexPackSize = ".*([" + newValue[0] + "-9].|1..)";
            } else if (newValue < 90) {
                obj.regexPackSize = ".*([" + newValue[0] + "9].|1..)";
            } else if (newValue < 100) {
                obj.regexPackSize = ".*(" + newValue[0] + ".|1..)";
            } else if (newValue < 200) {
                obj.regexPackSize = ".*1[" + newValue[1] + "-9].";
            } else {
                obj.regexPackSize = ".*2[" + newValue[1] + "-9].";
            }
            return;
        }
    });

    if (mapModWindow)
    showMapRegex(mapModWindow, pID);
}

function showMapRegex(mapModWindow, pID) {
    const objToChange = panelRegexes.find(obj => obj.panelID === pID);
    let regAll = '';

    if (objToChange.regexBad.length > 0) {
        regAll = '"!' + objToChange.regexBad.join('|') + '"';
    }

    if (objToChange.regexGood.length > 0) {
        if (objToChange.regexBad.length > 0) {
            regAll += ' ' + objToChange.regexGood.join(' ');
        } else {
            regAll = objToChange.regexGood.join(' ');
        }
    } 

    if (objToChange.regexKirac.length > 0) {
        if (objToChange.regexBad.length > 0 || objToChange.regexGood.length > 0) {
            regAll += ' "(' + objToChange.regexKirac.join('|') + ').*lic"';
        } else {
            regAll += '"(' + objToChange.regexKirac.join('|') + ').*lic"';
        }
    }

    if (objToChange.regexQuantity.length > 0) {
        if (objToChange.regexBad.length > 0 || objToChange.regexGood.length > 0 || objToChange.regexKirac.length > 0) {
            regAll += ' "m q' + objToChange.regexQuantity + '%"';
        } else {
            regAll += '"m q' + objToChange.regexQuantity + '%"';
        }
    }

    if (objToChange.regexPackSize.length > 0) {
        if (objToChange.regexBad.length > 0 || objToChange.regexGood.length > 0 || objToChange.regexKirac.length > 0 || objToChange.regexQuantity.length > 0) {
            regAll += ' "ze' + objToChange.regexPackSize + '%"';
        } else {
            regAll += '"ze' + objToChange.regexPackSize + '%"';
        }
    }

    mapModWindow.value = regAll;

    const lengthElement = mapModWindow.parentElement.querySelector('#map_mod_window_counter');
    if (lengthElement) {
        lengthElement.innerText = regAll.length + ' / 50';
    }
}