window.addEventListener('beforeunload', savePanelPositions);

function savePanelPositions() {
    localStorage.setItem('mainMenu.className', mainMenu.className);
    localStorage.setItem('mainMenuLogo.className', mainMenuLogo.className);

    // remove big syndicate
    const syndicateBig = document.querySelector('.syndicate-big-table');
    if (syndicateBig) {
        syndicateBig.remove();
    }
    
    mainMenuLogo.className = 'main-menu-logo';
    const panelsData = [];
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        const panelData = {
            id: '',
            name: panel.querySelector('.panel-name').value,
            content: '',
            top: panel.getBoundingClientRect().top < 10 ? 10 : panel.getBoundingClientRect().top,
            left: panel.getBoundingClientRect().left < 10 ? 10 : panel.getBoundingClientRect().left,
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
            }
            panelData.width = width;

            let height = panel.querySelector('.ql-editor').clientHeight;
            if (panel.scrollWidth < panel.querySelector('.ql-editor').scrollWidth) {
                // add some pixels to recompensate scrollbar
                height += 17;
            }
            panelData.height = height;

        } else if (panel.querySelector('.panel-stashtabsale')) {
            childID = panel.querySelector('.panel-stashtabsale').id;
        } else if (panel.querySelector('.panel-regex-map-mods')) {
            childID = panel.querySelector('.panel-regex-map-mods').id;
            panelData.content = panel.querySelector('#map_mod_window').value;
            panelData.checked = panel.querySelector('#map_mod_window_copy').checked;
        } else if (panel.querySelector('.panel-regex-gwennen-mods')) {
            childID = panel.querySelector('.panel-regex-gwennen-mods').id;
        } else if (panel.querySelector('.panel-syndicate-small')) {
            childID = panel.querySelector('.panel-syndicate-small').id;
        }

        panelData.id = childID;
        panelsData.push(panelData);
    });
    localStorage.setItem('panelsData', JSON.stringify(panelsData));
}

window.addEventListener('load', () => {
    mainMenu.className = localStorage.getItem('mainMenu.className');
    mainMenuLogo.className = localStorage.getItem('mainMenuLogo.className');

    const panelsData = JSON.parse(localStorage.getItem('panelsData'));
    let maxID = 0;
    if (panelsData) {
        panelsData.forEach(panelData => {
            let lastID = parseInt(panelData.id.substring(2));
            if (lastID > maxID) {
                maxID = lastID;
            }
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
                <div class="panel-textarea" id="id${lastID}">
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
                <div class="${panelData.childClass}" id="id${lastID}">
                    <div class="panel-content" style="width: ${panelData.width}px; height: ${panelData.height - 2}px">${panelData.childClass}</div>
                </div>
                <div class="panel-controls" style="display: none">
                    <button class="panel-delete">delete</button>
                    <button class="panel-move">move</button>
                </div>
                `;
            } else if (panelData.childClass === 'panel-regex-map-mods') {
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30">${panelData.name}</textarea>
                <div class="${panelData.childClass}" id="id${lastID}">
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
            } else if (panelData.childClass === 'panel-regex-gwennen-mods') {
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30">${panelData.name}</textarea>
		        <div class="${panelData.childClass}" id="id${lastID}">
			        <div class="panel-content">
				        <input id="regex_window" readonly="true"/>
				        <p id="regex_window_length">0 / 50</p>
				        <input type="checkbox" checked="true" id="regex_window_copy" title="Always copy on click" />
				        <div id="regex_items">
                            <div id="regex_items_league" style="display: ruby"></div>
                            <div id="regex_items_leaguehc" style="display: none"></div>
                            <div id="regex_items_leaguestd" style="display: none"></div>
                        </div>
                        <select id="regex_league-list">
                            <option value="league">League</option>
                            <option value="leaguehc">League HC</option>
                            <option value="standard">Standard</option>
                        </select>
			        </div>
		        </div>
		        <div class="panel-controls">
			        <button class="panel-delete">delete</button>
			        <button class="panel-move">move</button>
		        </div>
            `;
            } else if (panelData.childClass === 'panel-syndicate-small') {
                const size = localStorage.getItem('mySyndicateSmallSize');
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30">${panelData.name}</textarea>
		        <div class="${panelData.childClass}" id="id${panelID}">
			        <div class="panel-content" style="display: flex">
				        <div id="syndicate-transportation">
					        <div>
						        <img style="width: ${size}; height: ${size}" src="img/syndicate/Transportation.png" />
					        </div>
					        <div id="syndicate-transportation-good" class="syndicate-image-cointeiner"></div>
					        <div id="syndicate-transportation-mediocre" class="syndicate-image-cointeiner"></div>
				        </div>
				        <div class="line-vertical"></div>
				        <div id="syndicate-fortification">
					        <div>
						        <img style="width: ${size}; height: ${size}" src="img/syndicate/Fortification.png" />
					        </div>
					        <div id="syndicate-fortification-good" class="syndicate-image-cointeiner"></div>
					        <div id="syndicate-fortification-mediocre" class="syndicate-image-cointeiner"></div>
				        </div>
				        <div class="line-vertical"></div>
				        <div id="syndicate-research">
					        <div>
						        <img style="width: ${size}; height: ${size}" src="img/syndicate/Research.png" />
					        </div>
					        <div id="syndicate-research-good" class="syndicate-image-cointeiner"></div>
					        <div id="syndicate-research-mediocre" class="syndicate-image-cointeiner"></div>
				        </div>
				        <div class="line-vertical"></div>
				        <div id="syndicate-intervention">
					        <div>
						        <img style="width: ${size}; height: ${size}" src="img/syndicate/Intervention.png" />
					        </div>
					        <div id="syndicate-intervention-good" class="syndicate-image-cointeiner"></div>
					        <div id="syndicate-intervention-mediocre" class="syndicate-image-cointeiner"></div>
				        </div>

			        </div>
			        <div style="justify-content: flex-start; display: flex">
				        <div id="syndicate-50" style="margin-right: 20px; margin-bottom: -10px">50%</div>
				        <div id="syndicate-100" style="margin-right: 20px; margin-bottom: -10px">100%</div>
				        <div id="syndicate-full" style="margin-right: 20px; margin-bottom: -10px">Full Screen</div>
			        </div>
		        </div>
		        <div class="panel-controls">
			        <button class="panel-delete">delete</button>
			        <button class="panel-move">move</button>
		        </div>
                `;
            }
            //console.log(panelData.childClass + "child class");


            panels.appendChild(panel);
            panelBehaviour(panel, lastID);

            if (panelData.childClass === 'panel-stashtabsale') {
                stashSaleTimer();
            } else if (panelData.childClass === 'panel-textarea ql-container ql-bubble') {
                addQuill('id' + lastID, panelData.content);
                //console.log(panelData.id);
                //console.log(panelData.content);
                let editor = panel.querySelector('.ql-editor');
                editor.style.height = panelData.height < 10 ? '40px' : panelData.height + 'px';
                editor.style.width = panelData.width < 10 ? '40px' : panelData.width + 'px';
            } else if (panelData.childClass === 'panel-regex-map-mods') {
                panelRegexMapMods(panel, panelData.content, panelData.checked);
            } else if (panelData.childClass === 'panel-regex-gwennen-mods') {
                panelRegexGwennen(panel, panelData.content, panelData.checked);
            } else if (panelData.childClass === 'panel-syndicate-small') {
                panelSyndicate(panel);
            }
        });

    }

    panelID = maxID;
});