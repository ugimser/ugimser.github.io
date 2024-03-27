const app = document.getElementById('app');
const panels = document.getElementById('panels');
//const panelControlsEdit = document.getElementById('panel-controls');
const addPanelButton = document.getElementById('add-panel');
const addPanelStashTabSale = document.getElementById('add-panel-stashTab');
const addPanelRegexMapMods = document.getElementById('add-panel-regex-map-mods');
const addPanelRegexGwennen = document.getElementById('add-panel-regex-gewnnen');
const addPanelSyndicate = document.getElementById('add-panel-syndicate');
const addPanelIncursion = document.getElementById('add-panel-incursion');
const mainMenu = document.getElementById('main-menu');
const mainMenuLogo = document.getElementById('main-menu-logo');

let panelCounter = 0;
let panelID = 0;

mainMenuLogo.addEventListener('click', () => {
    //console.log(mainMenuLogo.className);
    if (mainMenu.className === 'shown') {
        mainMenu.className = 'hidden';
        //mainMenuLogo.className = 'main-menu-logo-small';
        return;
    }
    mainMenu.className = 'shown'
    //mainMenuLogo.className = 'main-menu-logo';
});

function stashSaleTimer(startDate = new Date("2024-03-08T00:00:00"), endDate = new Date("2024-03-11T12:00:00")) {
    var currentDate = new Date();

    if (currentDate < startDate) {
        var timeLeft = startDate - currentDate;
        var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let messageDateStart = startDate.getDate() + " " + startDate.toLocaleDateString('default', { month: 'long' });
        let messageDateEnd = endDate.getDate() + " " + endDate.toLocaleDateString('default', { month: 'long' });
        document.querySelector('.panel-stashtabsale .panel-content').innerHTML = "Stash Tab Sale: " + messageDateStart + " - " + messageDateEnd + " (" + daysLeft + " days left)";
    } else if (currentDate >= startDate && currentDate <= endDate) {
        var timeLeft = endDate - currentDate;
        var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        document.querySelector('.panel-stashtabsale .panel-content').innerHTML = "Stash Tab Sale is now! " + daysLeft + " days to the end.";
    } else {
        var newStartDate = new Date(startDate);
        var newEndDate = new Date(endDate);
        newStartDate.setDate(newStartDate.getDate() + 21);
        newEndDate.setDate(newEndDate.getDate() + 21);

        // Poprawka dla przesuniêcia do nowego miesi¹ca
        if (newStartDate.getMonth() !== ((startDate.getMonth() + 1) % 12) && newStartDate.getDate() === 1) {
            newStartDate.setDate(0); // Ustawiamy na ostatni dzieñ poprzedniego miesi¹ca
        }
        if (newEndDate.getMonth() !== ((endDate.getMonth() + 1) % 12) && newEndDate.getDate() === 1) {
            newEndDate.setDate(0); // Ustawiamy na ostatni dzieñ poprzedniego miesi¹ca
        }
        stashSaleTimer(newStartDate, newEndDate);
    }
}
//stashSaleTimer();

function panelRegexMapMods(panel, oldRegex, check) {
    const inputElement = panel.querySelector('#map_mod_window');
    const lengthElement = panel.querySelector('#map_mod_window_counter');
    const quantityElement = panel.querySelector('#map_mod_quantity');
    const packsizeElement = panel.querySelector('#map_mod_packsize');
    const badElement = panel.querySelector('#map_mod_bad_list');
    const goodElement = panel.querySelector('#map_mod_good_list');
    const checkboxElement = panel.querySelector("#map_mod_window_copy");
    
    if (oldRegex) {
        inputElement.value = oldRegex;
        changeRegexEvent(oldRegex, lengthElement, quantityElement, packsizeElement, badElement, goodElement);
        //console.log(oldRegex);
    }
    if (check) {
        checkboxElement.checked = check;
    }

    inputElement.addEventListener('input', function (event) {
        const text = event.target.value.toLowerCase();
        if (text.length > 1 && checkboxElement.checked) {
            copyToClipboard(text);
        }
        changeRegexEvent(text, lengthElement, quantityElement, packsizeElement, badElement, goodElement);
        console.log(text);
    });

    inputElement.addEventListener('click', function  (event) {
        const text = event.target.value;
        if (text.length > 1 && checkboxElement.checked) {
            copyToClipboard(text);
        }
    });
}

function panelRegexGwennen(panel, oldRegex, check) {
    const inputElement = panel.querySelector('#regex_window');
    const lengthElement = panel.querySelector('#regex_window_length');
    const leagueElement = panel.querySelector('#regex_league-list');
    const checkboxElement = panel.querySelector("#regex_window_copy");

    const divItemsLeague = panel.querySelector("#regex_items_league");
    const divItemsLeaguehc = panel.querySelector("#regex_items_leaguehc");
    const divItemsLeaguestd = panel.querySelector("#regex_items_leaguestd");

    let regexLeague = [];
    let regexLeaguehc = [];
    let regexLeaguestd = [];

    const items = showHightValue();
    // league
    items.sort((a, b) => (b.chaosValueLeague - a.chaosValueLeague));
    for (const i of items) {
        let allStrings = 0;
        for (const i of regexLeague) {
            allStrings += i.length;
        }
        if (2 + regexLeague.length + allStrings + i.regex.length < 50) {
            regexLeague.push(i.regex);
        } else {
            break;
        }

        const div = document.createElement('div');
        div.title = i.name + ' (' + i.baseType + ')';
        div.style.padding = '5px';
        div.style.display = 'grid';
        div.innerHTML = '<image style="max-width: 100px; max-height: 100px" src="' + i.image + '"><span class="chaos-value">' + chaosValueParser(i.chaosValueLeague) + '</span>';
        divItemsLeague.appendChild(div);
    }
    // leaguehc
    items.sort((a, b) => (b.chaosValueHCLeague - a.chaosValueHCLeague));
    for (const i of items) {
        let allStrings = 0;
        for (const i of regexLeaguehc) {
            allStrings += i.length;
        }
        if (2 + regexLeaguehc.length + allStrings + i.regex.length < 50) {
            regexLeaguehc.push(i.regex);
        } else {
            break;
        }

        const div = document.createElement('div');
        div.title = i.name + ' (' + i.baseType + ')';
        div.style.padding = '5px';
        div.style.display = 'grid';
        div.innerHTML = '<image style="max-width: 100px; max-height: 100px" src="' + i.image + '"><span class="chaos-value">' + chaosValueParser(i.chaosValueHCLeague) + '</span>';
        divItemsLeaguehc.appendChild(div);
    }
    // std
    items.sort((a, b) => (b.chaosValueStandard - a.chaosValueStandard));
    for (const i of items) {
        let allStrings = 0;
        for (const i of regexLeaguestd) {
            allStrings += i.length;
        }
        if (2 + regexLeaguestd.length + allStrings + i.regex.length < 50) {
            regexLeaguestd.push(i.regex);
        } else {
            break;
        }

        const div = document.createElement('div');
        div.title = i.name + ' (' + i.baseType + ')';
        div.style.padding = '5px';
        div.style.display = 'grid';
        div.innerHTML = '<image style="max-width: 100px; max-height: 100px" src="' + i.image + '"><span class="chaos-value">' + chaosValueParser(i.chaosValueStandard) + '</span>';
        divItemsLeaguestd.appendChild(div);
    }


    const str = '"' + regexLeague.join('|').toLowerCase() + '"';
    inputElement.value = str;
    lengthElement.innerText = str.length + ' / 50';
    

    leagueElement.addEventListener('change', function () {
        if (leagueElement.options[leagueElement.selectedIndex].value === 'leaguehc') {
            divItemsLeague.style.display = 'none';
            divItemsLeaguehc.style.display = 'ruby';
            divItemsLeaguestd.style.display = 'none';
            const str = '"' + regexLeaguehc.join('|').toLowerCase() + '"';
            inputElement.value = str;
            lengthElement.innerText = str.length + ' / 50';
        } else if (leagueElement.options[leagueElement.selectedIndex].value === 'standard') {
            divItemsLeague.style.display = 'none';
            divItemsLeaguehc.style.display = 'none';
            divItemsLeaguestd.style.display = 'ruby';
            const str = '"' + regexLeaguestd.join('|').toLowerCase() + '"';
            inputElement.value = str;
            lengthElement.innerText = str.length + ' / 50';
        } else {//(leagueElement.options[leagueElement.selectedIndex].value === 'league') {
            divItemsLeague.style.display = 'ruby';
            divItemsLeaguehc.style.display = 'none';
            divItemsLeaguestd.style.display = 'none';
            const str = '"' + regexLeague.join('|').toLowerCase() + '"';
            inputElement.value = str;
            lengthElement.innerText = str.length + ' / 50';
        }
    });

    inputElement.addEventListener('click', function (event) {
        const text = event.target.value;
        if (text.length > 1 && checkboxElement.checked) {
            copyToClipboard(text);
        }
    });
}



addPanelButton.addEventListener('click', () => {
    const panel = createPanelTextArea(++panelID, panelCounter++);
    panels.appendChild(panel);
    panelBehaviour(panel, panelID);
    addQuill("id" + panelID, `<h2><strong><u>Panel Example</u></strong></h2><p>This panel is completely editable, and data is saved to local storage. Change it and reload the page.</p><p>I've added some useful functions for poe to the editor.You can copy all text with a single click on the bottom - left button.</p><p>This is a very convenient option for Discord posts, as you can easily paste messages without forgetting to add "WTS Softcore".</p><p>If you choose the copy icon in the editor toolbar, you can set a custom text snippet to be automatically copied when clicked, </p><p>like the example here: <em>"click me!"</em></p><p><strong>Please note:</strong> Don't build anything complex here. This page is very young and will undergo frequent changes.</p><p>----</p><p>My carry notepad, for example:</p><p>----</p><p><em>%go in with me, don't move, do NOT leave if you die</em></p><p>Feared:</p><p><br></p><p><br></p><p>---------</p><p><em>%please wait in ho, join when I write adasdad, don't move inside, don't leave if you die</em></p><p>UE:</p><p><br></p><p><br></p><p>---</p><p>or just small note: </p><p>compasses: shaper, unid, grove, blue/purple </p><p>scarabs: 4x the cheapest</p>`, true);
    highlightBorder(panel);
});

addPanelStashTabSale.addEventListener('click', () => {
    const stashtabsaleElements = document.querySelectorAll('.panel-stashtabsale');
    if (stashtabsaleElements.length > 0) {
        notification('You already have one');
        highlightBorder(stashtabsaleElements[0].parentElement);
        panels.appendChild(stashtabsaleElements[0].parentElement);
        return;
    }
    const panel = createPanelStashTab(++panelID, panelCounter++);
    panels.appendChild(panel);
    stashSaleTimer();
    panelBehaviour(panel, panelID);
    highlightBorder(panel);
});

addPanelRegexMapMods.addEventListener('click', () => {
    const panel = createPanelRegexMapMods(++panelID, panelCounter++);
    panels.appendChild(panel);
    panelBehaviour(panel, panelID);
    panelRegexMapMods(panel);
    highlightBorder(panel);
});

addPanelRegexGwennen.addEventListener('click', () => {
    const panel = createPanelRegexGwennen(++panelID, panelCounter++);
    panels.appendChild(panel);
    panelBehaviour(panel, panelID);
    panelRegexGwennen(panel);
    highlightBorder(panel);
});

addPanelSyndicate.addEventListener('click', () => {
    const syndicateElements = document.querySelectorAll('.panel-syndicate-small');
    if (syndicateElements.length > 0) {
        notification('You already have one');
        highlightBorder(syndicateElements[0].parentElement);
        panels.appendChild(syndicateElements[0].parentElement);
        return;
    }
    const panel = createPanelSyndicate(++panelID, panelCounter++);
    panels.appendChild(panel);
    panelBehaviour(panel, panelID);
    panelSyndicate(panel);
    highlightBorder(panel);
});

addPanelIncursion.addEventListener('click', () => {
    const incursionElements = document.querySelectorAll('.panel-incursion-small');
    if (incursionElements.length > 0) {
        notification('You already have one');
        highlightBorder(incursionElements[0].parentElement);
        panels.appendChild(incursionElements[0].parentElement);
        return;
    }
    const panel = createPanelIncursion(++panelID, panelCounter++);
    panels.appendChild(panel);
    panelBehaviour(panel, panelID);
    panelIncursion(panel);
    highlightBorder(panel);
});


async function copyToClipboard(text) {
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
            notification('Copied: ' + text);
        } catch (err) {
            console.log('B³¹d podczas kopiowania do schowka:', err);
        }
    } else {
        copyToClipboardFallBack(text);
    }
}

function copyToClipboardFallBack(text) {
    var input = document.createElement('input'); // Utworzenie elementu input
    input.style.position = 'fixed'; // Ustawienie pozycji na sta³e
    input.style.opacity = 0; // Ukrycie elementu
    input.value = text; // Ustawienie wartoœci na tekst do skopiowania
    document.body.appendChild(input); // Dodanie elementu do cia³a dokumentu
    input.select(); // Zaznaczenie zawartoœci elementu
    document.execCommand('copy'); // Skopiowanie zaznaczonego tekstu do schowka
    document.body.removeChild(input); // Usuniêcie tymczasowego elementu input
}
function notification(message) {
    const notification = document.querySelector(".notification");
    notification.className = 'notification';
    notification.innerHTML = '<p style:"margin: auto">' + message + '</p>';
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 1000);
}

function highlightBorder(element) {
    //const oldBorder = element.style.border;
    element.style.border = '5px dashed red';
    setTimeout(() => {
        element.style.border = '2px solid #222';
    }, 1000);
}