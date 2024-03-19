const app = document.getElementById('app');
const panels = document.getElementById('panels');
const panelControlsEdit = document.getElementById('panel-controls');
const addPanelButton = document.getElementById('add-panel');
const addPanelStashTabSale = document.getElementById('add-panel-stashTab');
const addPanelRegexMapMods = document.getElementById('add-panel-regex-map-mods');

let panelID = 0;

function createPanelTextArea() {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = 44 + 'px';
    panel.style.left = 0 + 'px';
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30">Panel name (max 30 chars)</textarea>
        <div class="panel-textarea" id="id${++panelID}">
            <textarea class="panel-content">Your notes, links here</textarea>
        </div>
        <div class="panel-copy-all" title="Copy all text">copy</div>
        <div class="panel-controls">
            <button class="panel-delete">delete</button>
            <button class="panel-move">move</button>
        </div>
    `;
    return panel;
}

function createPanelStashTab() {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = 44 + 'px';
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30" style="display: none">Stash Tab Sale:</textarea>
        <div class="panel-stashtabsale" id="id${++panelID}">
            <div class="panel-content"></div>
        </div>
        <div class="panel-controls">
            <button class="panel-delete">delete</button>
            <button class="panel-move">move</button>
        </div>
    `;
    return panel;
}

function createPanelRegexMapMods() {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = 44 + 'px';
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30">Map Modifiers Regex:</textarea>
        <div class="panel-regex-map-mods" id="id${++panelID}">
            <div class="panel-content">
                <input id="map_mod_window" placeholder="Put regex here..." />
                <p id="map_mod_window_counter">44 / 50</p>
                <input type="checkbox" id="map_mod_window_copy" title="Always copy on click" />
                <div id="map_mod_quantity" style="display: none">Quantity, at least: 123%</div>
                <div id="map_mod_packsize" style="display: none">Pack Size, at least: 23%</div>
                <div id="map_mod_bad_list" style="display: none">
                    <div>I don\'t want these mods:</div>
                    <div>
                        <div>Modifier 123</div>
                    </div>
                </div>
                <div id="map_mod_good_list" style="display: none">
                    <div>I want these mods:</div>
                    <div>
                        <div>Modifier 123</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel-controls">
            <button class="panel-delete">delete</button>
            <button class="panel-move">move</button>
        </div>
    `;
    return panel;
}

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
        //console.log(text);
    });

    inputElement.addEventListener('click', function  (event) {
        const text = event.target.value;
        if (text.length > 1 && checkboxElement.checked) {
            copyToClipboard(text);
        }
    });
}


addPanelButton.addEventListener('click', () => {
    const panel = createPanelTextArea();
    panels.appendChild(panel);
    panelBehaviour(panel, panelID);
    addQuill("id" + panelID);
});

addPanelStashTabSale.addEventListener('click', () => {
    const stashtabsaleElements = document.querySelectorAll('.panel-stashtabsale');
    if (stashtabsaleElements.length > 0) { 
        return;
    }
    const panel = createPanelStashTab();
    panels.appendChild(panel);
    stashSaleTimer();
    panelBehaviour(panel, panelID);
});

addPanelRegexMapMods.addEventListener('click', () => {
    const panel = createPanelRegexMapMods();
    panels.appendChild(panel);
    panelBehaviour(panel, panelID);
    panelRegexMapMods(panel);
});

panelControlsEdit.addEventListener('click', () => {
    const panels = document.querySelectorAll('.panel');
    var newDisplay = 'none';
    if (panels.length > 0) {
        if (panels[panels.length - 1].querySelector('.panel-controls').style.display === 'none') {
            newDisplay = 'block'; // Pokazujemy panel-controls
        }
    }
    panels.forEach(panel => {
        const panelControls = panel.querySelector('.panel-controls');
        panelControls.style.display = newDisplay;    
    });
    // here
    // delete or comment below later
    savePanelPositions();
});

function panelBehaviour(panel, id) {
    let offsetX = 0;//panel.offsetLeft;
    let offsetY = 0;// panel.offsetTop;
    let isDragging = false;

    try {
        // Przesuwanie podczas naciœniêcia przycisku "Przesuñ"
        panel.querySelector('.panel-move').addEventListener('mousedown', () => {
            isDragging = true;
            panels.appendChild(panel);
        });

        // Dodanie zdarzenia do przycisku "Usuñ"
        panel.querySelector('.panel-delete').addEventListener('click', () => {
            document.removeEventListener('mousemove', Event);
            document.removeEventListener('mouseup', Event);
            panel.remove();
        });

        // Copy All
        try {
            panel.querySelector('.panel-copy-all').addEventListener('click', () => {
                copyToClipboard(getQuillText('id' + id));
            });
        } catch (err) {
            //console.log('panelBehaviour ' + err);
            //i can live with it
        }
    } catch (err) {
        console.log('panelBehaviour ' + err);
        panel.remove();
        return;
    }

    document.addEventListener('mousemove', (moveEvent) => {
        if (isDragging) {
            // Uaktualnienie pozycji panelu
            let x = moveEvent.clientX - panel.clientWidth + 10 - offsetX;
            if (x < 0) {
                x = 0;
            }
            let y = moveEvent.clientY - offsetY + window.scrollY - 25;
            if (y < 0) {
                y = 0;
            }
            panel.style.left = `${x}px`;
            panel.style.top = `${y}px`;
        }
    });


    // Zakoñczenie przesuwania po zwolnieniu przycisku
    document.addEventListener('mouseup', (moveEvent) => {
        if (isDragging) {
            // grind
            let x = moveEvent.clientX - panel.clientWidth + 10 - offsetX;
            x = x > 0 ? Math.floor(x / 5) * 5 : 0;
            let y = moveEvent.clientY - 11 + window.scrollY - 25;
            y = y > 0 ? Math.floor(y / 5) * 5 : 0;
            panel.style.left = `${x}px`;
            panel.style.top = `${y}px`;
        }
        isDragging = false;
    });


    
}


function savePanelPositions() {
    const panelsData = [];
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        const panelData = {
            id: '',
            name: panel.querySelector('.panel-name').value,
            content: '',
            top: panel.getBoundingClientRect().top,
            left: panel.getBoundingClientRect().left,
            width: '',
            height: '',
            childClass: panel.children[1].className,
            checked: false
        };

        let childID;
        if (panel.querySelector('.panel-textarea')) {
            childID = panel.querySelector('.panel-textarea').id;
            panelData.content = getQuillContent(childID);
            
            let width = panel.querySelector('.ql-editor').clientWidth;
            if (panel.scrollHeight < panel.querySelector('.ql-editor').scrollHeight) {
                // add some pixels to recompensate scrollbar
                width += 17;
                //console.log('po: ' + width);
            }
            panelData.width = width;

            let height = panel.querySelector('.ql-editor').clientHeight;
            if (panel.scrollWidth < panel.querySelector('.ql-editor').scrollWidth) {
                // add some pixels to recompensate scrollbar
                height += 17;
                //console.log('po: ' + height);
            }
            panelData.height = height;

        } else if (panel.querySelector('.panel-stashtabsale')) {
            childID = panel.querySelector('.panel-stashtabsale').id;
        } else if (panel.querySelector('.panel-regex-map-mods')) {
            childID = panel.querySelector('.panel-regex-map-mods').id;
            panelData.content = panel.querySelector('#map_mod_window').value;
            panelData.checked = panel.querySelector('#map_mod_window_copy').checked;
        }
        
        panelData.id = childID;
        panelsData.push(panelData);
    });
    localStorage.setItem('panelsData', JSON.stringify(panelsData));
}

window.addEventListener('beforeunload', savePanelPositions);

window.addEventListener('load', () => {
    const panelsData = JSON.parse(localStorage.getItem('panelsData'));
    let maxID = 0;
    if (panelsData) {
        panelsData.forEach(panelData => {
            const panel = document.createElement('div');
            panel.classList.add('panel');
            //panel.style.position = 'absolute';
            panel.style.top = panelData.top - 10 + 'px';
            panel.style.left = panelData.left - 10 + 'px';
           // panel.style.width = panelData.width + 'px';
            //panel.style.height = panelData.height + 'px';
            if (panelData.childClass === 'panel-textarea ql-container ql-bubble') {
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30">${panelData.name}</textarea>
                <div class="panel-textarea" id="${panelData.id}">
                    <textarea class="panel-content" style="width: ${panelData.width - 8}px; height: ${panelData.height - 4}px">${panelData.content}</textarea>
                </div >
                <div class="panel-copy-all" title="Copy all text">copy</div>
                <div class="panel-controls" style="display: none">
                    <button class="panel-delete">delete</button>
                    <button class="panel-move">move</button>
                </div>
                `;
            } else if (panelData.childClass === 'panel-stashtabsale') {
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30" style="display: none">Stash Tab Sale:</textarea>
                <div class="${panelData.childClass}" id="${panelData.id}">
                    <div class="panel-content" style="width: ${panelData.width}px; height: ${panelData.height - 2}px">${panelData.childClass}</div>
                </div>
                <div class="panel-controls" style="display: none">
                    <button class="panel-delete">delete</button>
                    <button class="panel-move">move</button>
                </div>
                `;
            } else if (panelData.childClass === 'panel-regex-map-mods') {
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30">Map Modifiers Regex:</textarea>
                <div class="${panelData.childClass}"" id="id${++panelID}">
                    <div class="panel-content" style="width: ${panelData.width}px; height: ${panelData.height - 2}px">
                        <input id="map_mod_window" placeholder="Put regex here..." />
                        <input type="checkbox" id="map_mod_window_copy" title="Always copy on click" />
                        <p id="map_mod_window_counter">44 / 50</p>
                        <div id="map_mod_quantity" style="display: none">Quantity, at least: 123%</div>
                        <div id="map_mod_packsize" style="display: none">Pack Size, at least: 23%</div>
                        <div id="map_mod_bad_list" style="display: none">
                            <div>I don\'t want these mods:</div>
                            <div>
                                <div>Modifier 123</div>
                            </div>
                        </div>
                        <div id="map_mod_good_list" style="display: none">
                            <div>I want these mods:</div>
                            <div>
                                <div>Modifier 123</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-controls" style="display: none">
                    <button class="panel-delete">delete</button>
                    <button class="panel-move">move</button>
                </div>
            `;
            }
            //console.log(panelData.childClass + "child class");

            let lastID = parseInt(panelData.id.substring(2));
            if (lastID > maxID) {
                maxID = lastID;
            }

            panels.appendChild(panel);
            panelBehaviour(panel, lastID);

            if (panelData.childClass === 'panel-stashtabsale') {
                stashSaleTimer();
            } else if (panelData.childClass === 'panel-textarea ql-container ql-bubble') {
                addQuill(panelData.id, panelData.content);
                //console.log(panelData.id);
                //console.log(panelData.content);
                let editor = panel.querySelector('.ql-editor');
                editor.style.height = panelData.height + 'px';
                editor.style.width = panelData.width + 'px';
            } else if (panelData.childClass === 'panel-regex-map-mods') {
                panelRegexMapMods(panel, panelData.content, panelData.checked);
            }             
        });

        panelID = maxID;
    }
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

// Funkcja do kopiowania tekstu do schowka
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