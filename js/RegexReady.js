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


function changeRegexEvent(pID, mapRegexWindow, lengthEle, quantityEle, packsizeEle, badModsTab, goodModsTab, implicitModsTab, uberModsTab) {
    const objToChange = panelRegexes.find(obj => obj.panelID === pID);

    // length
    lengthEle.innerHTML = mapRegexWindow.value.length + ' / 50';
    
    // quantity
    if (objToChange.regexQuantity) {
        const qreg = objToChange.regexQuantity.slice(2, objToChange.regexQuantity.length);
        try {
            quantityEle.value = extractNumbers(qreg);
        }
        catch (err) {
            console.log('extractNumbers(qreg)' + err);
        }
    }

    // pack size
    if (objToChange.regexPackSize) {
        const qreg = objToChange.regexPackSize.slice(2, objToChange.regexPackSize.length);
        try {
            packsizeEle.value = extractNumbers(qreg);
        }
        catch (err) {
            console.log('extractNumbers(qreg)' + err);
        }
    }

    // mods
    if (objToChange.regexBad.length > 0) {
        //findDontWantedMods(objToChange, objToChange.regexBad.join('|'), badModsTab);
        badModsTab.forEach(obj => {
            objToChange.regexBad.forEach(reg => {
                if (obj.title === reg) {
                    obj.classList.add('map-mod-selected');
                }
            });
        });
    }
    if (objToChange.regexGood.length > 0) {
        //findWantedMods(objToChange, objToChange.regexGood.join(' '), goodModsTab);
        goodModsTab.forEach(obj => {
            objToChange.regexGood.forEach(reg => {
                const title = obj.title.includes(' ') ? '"' + obj.title + '"' : obj.title;
                if (title === reg) {
                    obj.classList.add('map-mod-selected');
                }
            });
        });
    }
    if (objToChange.regexKirac.length > 0) {
        //findWantedMods(objToChange, objToChange.regexGood.join(' '), goodModsTab);
        implicitModsTab.forEach(obj => {
            objToChange.regexKirac.forEach(reg => {
                if (obj.title === reg) {
                    obj.classList.add('map-mod-selected');
                }
            });
        });
    }
    if (objToChange.regexT17.length > 0) {
        //findWantedMods(objToChange, objToChange.regexGood.join(' '), goodModsTab);
        uberModsTab.forEach(obj => {
            objToChange.regexT17.forEach(reg => {
                if (obj.title === reg) {
                    obj.classList.add('map-mod-selected');
                }
            });
        });
        console.log('t17');
    }

    showMapRegex(mapRegexWindow, objToChange.panelID)
}

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
        inputValue = inputValue.replace(betweenQuote + '', "").trim();
        for (const quote of betweenQuote) {
            inputValue = inputValue.replace(quote + ' ', "").trim();
            //console.log(inputValue);
            //console.log(betweenQuote);
        }
        let spacebetween = '';
        betweenQuote.forEach(s => {
            spacebetween += '|' + s.substring(1, s.length - 1);
        });

        sanitized = inputValue
            .split(" ")
            .join("|")
            .replace(/\\"(?:m q|ze).*%/, "")
            .replaceAll("\"", "")
            .replaceAll("!", "")
            .trim() + spacebetween;
        //console.log('if ' + sanitized);
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
        if (obj.textContent.toLowerCase().match(sanitized) && sanitized.length > 1) {
            //console.log(sanitized);
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

let panelRegexes = [{
    panelID: '',
    regexBad: [],
    regexGood: [],
    regexKirac: [],
    regexT17: [],
    regexQuantity: '',
    regexPackSize: '',
}];

function clearMapRegex(pID) {
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            obj.regexBad = [];
            obj.regexGood = [];
            obj.regexKirac = [];
            obj.regexT17 = [];
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

function addMapRegexT17(shortName, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            obj.regexT17.push(shortName);
            return;
        }
    });

    showMapRegex(mapModWindow, pID);
}

function removeMapRegexT17(shortName, mapModWindow) {
    const pID = mapModWindow.parentElement.parentElement.id;
    panelRegexes.forEach(obj => {
        if (obj.panelID === pID) {
            var index = obj.regexT17.indexOf(shortName);
            if (index !== -1) {
                obj.regexT17.splice(index, 1);
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

    if (objToChange.regexBad.length > 0 || objToChange.regexT17.length > 0) {
        if (objToChange.regexT17.length > 0) {
            regAll = '"!' + objToChange.regexBad.join('|') + '|' + objToChange.regexT17.join('|') + '"';
        } else {
            regAll = '"!' + objToChange.regexBad.join('|') + '"';
        }
    }


    if (objToChange.regexGood.length > 0) {
        if (objToChange.regexBad.length > 0 || objToChange.regexT17.length > 0) {
            regAll += ' ' + objToChange.regexGood.join(' ');
        } else {
            regAll = objToChange.regexGood.join(' ');
        }
    } 

    if (objToChange.regexKirac.length > 0) {
        if (objToChange.regexBad.length > 0 || objToChange.regexGood.length > 0 || objToChange.regexT17.length > 0) {
            regAll += ' "(' + objToChange.regexKirac.join('|') + ').*lic"';
        } else {
            regAll += '"(' + objToChange.regexKirac.join('|') + ').*lic"';
        }
    }

    if (objToChange.regexQuantity.length > 0) {
        if (objToChange.regexBad.length > 0 || objToChange.regexGood.length > 0 || objToChange.regexKirac.length > 0 || objToChange.regexT17.length > 0) {
            regAll += ' "m q' + objToChange.regexQuantity + '%"';
        } else {
            regAll += '"m q' + objToChange.regexQuantity + '%"';
        }
    }

    if (objToChange.regexPackSize.length > 0) {
        if (objToChange.regexBad.length > 0 || objToChange.regexGood.length > 0 || objToChange.regexKirac.length > 0 || objToChange.regexQuantity.length > 0 || objToChange.regexT17.length > 0) {
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
    console.log('here');
    localStorage.setItem('dataPanelsMapMod', JSON.stringify(panelRegexes));
}