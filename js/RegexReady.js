const modsLists = document.getElementsByClassName('allModsList');
const resultsText = document.getElementById('resultsText');
const resultsLength = document.getElementById('resultsLength');
const inputElement = document.getElementById('mods-search');

let regexActual = "!(";

makeModList();
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


function changeRegexEvent(inputValue, lengthEle, quantityEle, packsizeEle, badModsEle, goodModsEle) {
    // length
    lengthEle.innerHTML = inputValue.length + ' / 50';
    //console.log(inputValue.length);
    // quantity
    if (inputValue.includes('"m q.')) {
        const start = inputValue.indexOf('"m q.');
        const end = inputValue.indexOf('%"');
        const qreg = inputValue.slice(start + 6, end);
        inputValue = inputValue.substring(0, start) + inputValue.substring(end + 2);
        //console.log(qreg);
        //console.log(extractNumbers(qreg));
        quantityEle.style.display = 'block';
        try {
            quantityEle.innerHTML = 'Quantity, at least: ' + extractNumbers(qreg) + '%';
        }
        catch (err) {
            console.log('extractNumbers(qreg)' + err);
        }
    } else {
        quantityEle.style.display = 'none';
    }

    // pack size
    if (inputValue.includes('"iz.*')) {
        const start = inputValue.indexOf('"iz.*');
        const end = inputValue.indexOf('%"');
        const qreg = inputValue.slice(start + 5, end);
        inputValue = inputValue.substring(0, start) + inputValue.substring(end + 2);
        //console.log(qreg);
        //console.log(extractNumbers(qreg));
        packsizeEle.style.display = 'block';
        try {
            packsizeEle.innerHTML = 'Quantity, at least: ' + extractNumbers(qreg) + '%';
        }
        catch (err) {
            console.log('extractNumbers(qreg)' + err);
        }
    } else {
        packsizeEle.style.display = 'none';
    }

    badModsEle.style.display = 'none';
    goodModsEle.style.display = 'none';
    //findDontWantedMods(inputValue);
    //findWantedMods(inputValue);
    //return;
    if (inputValue.length > 2 && (inputValue[0] === '!' || inputValue[1] === '!')) {
        const splited = [
            inputValue.slice(1, inputValue.indexOf('" ') + 1).trim(),
            inputValue.slice(inputValue.indexOf('" ') + 1).trim()
        ];
        //console.log(splited[0]);
        //console.log(splited[1]);
        //return;
        if (splited.length > 1) {
            findDontWantedMods(splited[0].length < 1 ? splited[1] : splited[0], badModsEle);
            if (splited[1].length > 1 && splited[0].length > 1 && (splited[1].length !== splited[0].length + 2)) {
                findWantedMods(splited[1], goodModsEle);
                //console.log('here');
            }
        } else {
            findDontWantedMods(inputValue, badModsEle);
        }
    } else if (inputValue.length > 1) {
        findWantedMods(inputValue, goodModsEle);
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
function findDontWantedMods(inputValue, container) {
    const sanitized = inputValue
        //.match(/"(.*?)"/g)
        .split("\" ")
        //.split(" ")
        .join("|")
        .replace(/\\"(?:m q|iz).*%/, "")
        .replaceAll("\"", "")
        .replaceAll("!", "")
        .trim();

    //console.log('Nowa wartoœæ danych: ' + sanitized);
    let counter = 0;
    let text = '<div>I don\'t want these:</div>';
    for (const [longName] of mapData.entries()) {
        let isIn = "";
        try {
            isIn = longName.toLowerCase().match(sanitized);
        } catch (err) {
            console.log(err);
            return;
        }
        if (isIn) {
            //console.log(longName);
            counter++
            text += '<div>>' + longName.replaceAll('|', '<br>') + '</div>';
        }
    }
    //console.log("I don't want: " + counter);
    if (counter > 0) {
        container.innerHTML = text;
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}
function findWantedMods(inputValue, container) {
    let sanitized;

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
            .replace(/\\"(?:m q|iz).*%/, "")
            .replaceAll("\"", "")
            .replaceAll("!", "")
            .trim();
        //console.log('if');
    } else {
        sanitized = inputValue
            .split(" ")
            .join("|")
            .replace(/\\"(?:m q|iz).*%/, "")
            .replaceAll("\"", "")
            .replaceAll("!", "")
            .trim();
    }
    //console.log(sanitized);

    let counter = 0;
    let text = '<div>I want these:</div>';
    for (const [longName] of mapData.entries()) {
        let isIn = "";
        try {
           isIn = longName.toLowerCase().match(sanitized);
        } catch (err) {
            console.log(err);
            return;
        }
        if (isIn) {
            //console.log(longName);
            counter++
            text += '<div>>' + longName.replaceAll('|', '<br>') + '</div>';
        }
    }
    //console.log("I want: " + counter)
    if (counter > 0) {
        container.innerHTML = text;
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
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

