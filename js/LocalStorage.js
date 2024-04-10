window.addEventListener('beforeunload', savePanelPositions);

function savePanelPositions() {
    localStorage.setItem('mainMenu.className', mainMenu.className);
    //localStorage.setItem('mainMenuLogo.className', mainMenuLogo.className);

    // remove big syndicate
    const syndicateBig = document.querySelector('.syndicate-big-table');
    if (syndicateBig) {
        syndicateBig.remove();
    }

    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    //mainMenuLogo.className = 'main-menu-logo';
    const panelsData = [];
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        const panelData = {
            id: '',
            name: panel.querySelector('.panel-name').value,
            content: '',
            top: panel.getBoundingClientRect().top + scrollTop < 10 ? 10 : panel.getBoundingClientRect().top + scrollTop,
            left: panel.getBoundingClientRect().left + scrollLeft < 10 ? 10 : panel.getBoundingClientRect().left + scrollLeft,
            width: '',
            height: '',
            childClass: panel.children[1].className,
            checked: false
        };

        let childID;
        if (panel.querySelector('.ql-container')) {
            childID = panel.querySelector('.panel-textarea').id;
            panelData.content = getQuillContent(childID);
            console.log(panel);
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
        } else if (panel.querySelector('.panel-incursion-small')) {
            childID = panel.querySelector('.panel-incursion-small').id;
        } else if (panel.querySelector('.panel-blight-extractor')) {
            childID = panel.querySelector('.panel-blight-extractor').id;
        } else if (panel.querySelector('.panel-blight-anoitment')) {
            childID = panel.querySelector('.panel-blight-anoitment').id;
        } else if (panel.querySelector('.panel-regex-coffin-mods')) {
            childID = panel.querySelector('.panel-regex-coffin-mods').id;
        }

        panelData.id = childID;
        panelsData.push(panelData);
    });
    localStorage.setItem('panelsData', JSON.stringify(panelsData));
}

window.addEventListener('load', () => {
    mainMenu.className = localStorage.getItem('mainMenu.className') ? localStorage.getItem('mainMenu.className') : 'shown';
    //mainMenuLogo.className = localStorage.getItem('mainMenuLogo.className') ? localStorage.getItem('mainMenuLogo.className') : 'main-menu-logo';

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
                <button class="panel-copy-all" title="Copy all text">Copy all text</button>
                <div class="panel-controls" style="display: flex">
			        <button class="panel-edit"></button>
			        <div class="panel-move"></div>
			        <button class="panel-delete">x</button>
		        </div>
                `;
            } else if (panelData.childClass === 'panel-stashtabsale') {
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30" style="display: none">Stash Tab Sale:</textarea>
                <div class="${panelData.childClass}" id="id${lastID}">
                    <div class="panel-content" style="width: ${panelData.width}px; height: ${panelData.height - 2}px">${panelData.childClass}</div>
                </div>
                <div class="panel-controls" style="display: flex">
			        <button class="panel-edit" style="display: none"></button>
			        <div class="panel-move" style="width: calc(100% - 10px); height: 100%"></div>
			        <div class="panel-delete" style="font-size: 0.7em; margin-top: -3px; margin-right: -20px">x</div>
		        </div>
                `;
            } else if (panelData.childClass === 'panel-regex-map-mods') {
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30">${panelData.name}</textarea>
                <div class="${panelData.childClass}" id="id${lastID}">
                    <div class="panel-content">
                        <input id="map_mod_window" placeholder="Click 'Show Mods'..." readonly/>
                        <input type="checkbox" id="map_mod_window_copy" title="Always copy on click" checked/>
                        <p id="map_mod_window_counter">44 / 50</p>
                        <div>
                            <div style="display: flex">
                                <div class="map_mod_text">Quantity, at least:</div>
                                <input id="map-mod-quantity-input" class="input-small" type="number"/>
                                <div class="map_mod_text">%,</div>
                                <div class="map_mod_text">Pack Size, at least:</div>
                                <input id="map-mod-pack-size-input" class="input-small" type="number"/>
                                <div class="map_mod_text">%</div>
                            </div>
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
                        <button id="panel-regex-map-show-all" style="margin-top: 5px">Show Mods</button>
                        <button id="panel-regex-map-clear-all">Clear All</button>
                        <div id="panel-regex-map-all-mods" class='hidden'>
                            <input id="panel-regex-map-search" class="input-search" placeholder="Search..." />
                            <div>
                                <div id="panel-regex-map-all-bad">     
                                <div style="display: flex">
                                    <div id="panel-regex-map-all-bad" style="width: 25%">
                                        <div class="map-mod-list-header">
                                            <div class="map_mod_text">I don\'t want these mods:</div>
                                            <div class="map_mod_text">Tier 1-16</div>
                                        </div>
                                        <div id="panel-regex-map-all-bad-list" class="background-gradient-danger"></div>
                                    </div>
                                    <div id="panel-regex-map-all-good" style="width: 25%">
                                        <div class="map-mod-list-header">
                                            <div class="map_mod_text">I want these mods:</div>
                                            <div class="map_mod_text">Tier 1-16</div>
                                        </div>
                                        <div id="panel-regex-map-all-good-list" class="background-gradient-popularity"></div>
                                    </div>
                                    <div id="panel-regex-map-all-kirac" style="width: 25%">
                                        <div class="map-mod-list-header">
                                            <div class="map_mod_text">I want these Kirac mods:</div>
                                            <div class="map_mod_text">Tier 1-16</div>
                                        </div>
                                        <div id="panel-regex-map-all-kirac-list" class="background-gradient-popularity">
                                        </div>
                                            <div id="panel-regex-map-all-vaal" style="width: 100%; margin-top: 70px">
                                            <div class="map-mod-list-header">
                                                <div class="map_mod_text">I want these vaal implicits:</div>
                                                <div class="map_mod_text">Tier 1-16</div>
                                            </div>
                                            <div id="panel-regex-map-all-vaal-list"></div>
                                        </div>
                                    </div>                                    
                                    <div id="panel-regex-map-all-t17" style="width: 25%">
                                        <div class="map-mod-list-header">
                                            <div class="map_mod_text">I don\'t want these uber mods:</div>
                                            <div class="map_mod_text">Tier 17</div>
                                        </div>
                                        <div id="panel-regex-map-uber"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-controls" style="display: flex">
			        <button class="panel-edit"></button>
			        <div class="panel-move"></div>
			        <button class="panel-delete">x</button>
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
                            <option value="league">${leagueCurrent}</option>
                            <option value="leaguehc">${leagueCurrentHC.replace('+', ' ')}</option>
					        <option value="standard">${leagueStandard}</option>
                        </select>
			        </div>
		        </div>
		        <div class="panel-controls" style="display: flex">
			        <button class="panel-edit"></button>
			        <div class="panel-move"></div>
			        <button class="panel-delete">x</button>
		        </div>
            `;
            } else if (panelData.childClass === 'panel-syndicate-small') {
                const size = localStorage.getItem('mySyndicateSmallSize') ? localStorage.getItem('mySyndicateSmallSize') : '100px';
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
			        <div style="margin-top: 10px">
				        <button id="syndicate-size">Size: ${size.substring(0, size.length - 2)}%</button>
				        <button id="syndicate-full">Full Screen - Edit</button>
			        </div>
		        </div>
		        <div class="panel-controls" style="display: flex">
			        <button class="panel-edit"></button>
			        <div class="panel-move"></div>
			        <button class="panel-delete">x</button>
		        </div>
                `;
            } else if (panelData.childClass === 'panel-incursion-small') {
                const size = localStorage.getItem('myIncursionSmallSize') ? localStorage.getItem('myIncursionSmallSize') : '100%';
                panel.innerHTML = `
                        <textarea class="panel-name" maxlength="30">${panelData.name}</textarea>
		                <div class="${panelData.childClass}" id="id${panelID}">
			                <div class="incursion-tier">
				                <p class="incursion-tier-name">Super</p>
				                <div id="incursion-tier-s">
				                </div>
			                </div>
			                <div class="incursion-tier">
				                <p class="incursion-tier-name">Good</p>
				                <div id="incursion-tier-a">
				                </div>
			                </div>
		                </div>
		                <div style="margin-top: 10px">
			                <button id="incursion-size" style="margin-right: 20px; margin-bottom: -10px">Size: ${size}</button>
			                <button id="incursion-full" style="margin-right: 20px; margin-bottom: -10px">Full Screen - Edit</button>
		                </div>
		                <div class="panel-controls" style="display: flex">
			                <button class="panel-edit"></button>
			                <div class="panel-move"></div>
			                <button class="panel-delete">x</button>
		                </div>
                `;
            } else if (panelData.childClass === 'panel-blight-extractor') {
                panel.innerHTML = `
		            <textarea class="panel-name" maxlength="30">${panelData.name}</textarea>
		            <div class="${panelData.childClass}" id="id${panelID}">
			            <div class="panel-content" id="panel-blight-extractor-cointainer">

			            </div>
			            <button id="blight-extractor-add-more">Show more</button>
		            </div>
		            <div class="panel-controls" style="display: flex">
			            <button class="panel-edit"></button>
			            <div class="panel-move"></div>
			            <button class="panel-delete">x</button>
		            </div>
                `;
            } else if (panelData.childClass === 'panel-blight-anoitment') {
                panel.innerHTML = `
		            <textarea class="panel-name" maxlength="30">${panelData.name}</textarea>
		            <div class="${panelData.childClass}" id="id${panelID}">
			            <div class="panel-content" id="panel-blight-anoitment-cointainer">
				            <div class="regex-input-window" id="panel-blight-anoitment-window">
					            <button id="blight-anoitment-oil1" title="">
					
					            </button>
					            <button id="blight-anoitment-oil2" title="">
					
					            </button>
					            <button id="blight-anoitment-oil3" title="">
					
					            </button>
					            <div id="blight-anoitment-mod-name" style="padding-top: 20px">
						            Select oils bellow
					            </div>
				            </div>
				            <div style="text-align: center">
					            <div style="padding-top: 10px">
						            <button id="blight-anoitment-clear" title="Clear Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9DbGVhck9pbCIsInNjYWxlIjoxfV0/0a7f30cc3b/ClearOil.png" />
						            </button>
						            <button id="blight-anoitment-sepia" title="Sepia Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9TZXBpYU9pbCIsInNjYWxlIjoxfV0/9114927bcc/SepiaOil.png" />
						            </button>
						            <button id="blight-anoitment-amber" title="Amber Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9BbWJlck9pbCIsInNjYWxlIjoxfV0/bd5ce1adfa/AmberOil.png" />
						            </button>
						            <button id="blight-anoitment-veridant" title="Verdant Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9WZXJkYW50T2lsIiwic2NhbGUiOjF9XQ/efeac217c1/VerdantOil.png" />
						            </button>
						            <button id="blight-anoitment-teal" title="Teal Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9UZWFsT2lsIiwic2NhbGUiOjF9XQ/d90d65a90b/TealOil.png" />
						            </button>
						            <button id="blight-anoitment-azure" title="Azure Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9BenVyZU9pbCIsInNjYWxlIjoxfV0/a68235e8e8/AzureOil.png" />
						            </button>
						            <button id="blight-anoitment-indigo" title="Indigo Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9JbmRpZ29PaWwiLCJzY2FsZSI6MX1d/d11c298ca8/IndigoOil.png" />
						            </button>
					            </div>
					            <div style="padding: 5px">
						            <button id="blight-anoitment-violet" title="Violet Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9WaW9sZXRPaWwiLCJzY2FsZSI6MX1d/76c3dc06f8/VioletOil.png" />
						            </button>
						            <button id="blight-anoitment-crimson" title="Crimson Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9Dcmltc29uT2lsIiwic2NhbGUiOjF9XQ/5e5f62ac0e/CrimsonOil.png" />
						            </button>
						            <button id="blight-anoitment-black" title="Black Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9CbGFja09pbCIsInNjYWxlIjoxfV0/ce6830b309/BlackOil.png" />
						            </button>
						            <button id="blight-anoitment-opalescent" title="Opalescent Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9PcGFsZXNjZW50T2lsIiwic2NhbGUiOjF9XQ/abd419a154/OpalescentOil.png" />
						            </button>
						            <button id="blight-anoitment-silver" title="Silver Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9TaWx2ZXJPaWwiLCJzY2FsZSI6MX1d/d6ad829c2f/SilverOil.png" />
						            </button>
						            <button id="blight-anoitment-golden" title="Golden Oil">
							            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9Hb2xkZW5PaWwiLCJzY2FsZSI6MX1d/263a5d73da/GoldenOil.png" />
						            </button>
					            </div>
				            </div>

				            <div>
					            <input class="regex-input-window" id="panel-blight-anoitment-search" placeholder="Search by name" />
					            <div id ="panel-blight-anoitment-mods" style="max-height: 200px; overflow-y: auto; margin-top: 10px">

					            </div>
				            </div>
			            </div>
		            </div>
		            <div class="panel-controls" style="display: flex">
			            <button class="panel-edit"></button>
			            <div class="panel-move"></div>
			            <button class="panel-delete">x</button>
		            </div>
                `;
            } else if (panelData.childClass === 'panel-regex-coffin-mods') {
                panel.innerHTML = `
                <textarea class="panel-name" maxlength="30">Coffin Regex:</textarea>
		        <div class="${panelData.childClass}" id="id${panelID}">
			        <div class="panel-content">
				        <button id="regex-coffin-show-list" style="margin-top: 10px">Hide Coffins List</button>
				        <button id="regex-coffin-limit-stash" style="margin-top: 10px">Stash limit (50 chars)</button>
				        <button id="regex-coffin-limit-morgue" style="margin-top: 10px">Necropolis Morgue limit (100 chars)</button>
				        <span>Minimum price</span>
				        <input class="input-small" id="regex-coffin-price-min" type="number" value="25" />
				        <span>Min ilvl:</span>
				        <input class="input-small" id="regex-coffin-ilvl" type="number" value="1" />
				        <input id="regex_window" readonly="true" style="display: none"/>
				        <p id="regex_window_length" style="display: none">0 / 50</p>
				        <input type="checkbox" checked="true" id="regex_window_copy" title="Always copy on click"  style="display: none"/>
				        <div id="regex_items" style="margin-top: -10px">
                            <div id="regex_items_league" style="display: block; padding-top: 10px;"></div>
                            <div id="regex_items_leaguehc" style="display: none; padding-top: 10px;"></div>
                            <div id="regex_items_leaguestd" style="display: none; padding-top: 10px;"></div>
                        </div>
                        <select id="regex_league-list">
                            <option value="league">${leagueCurrent}</option>
                            <option value="leaguehc" style="display: none">${leagueCurrentHC.replace('+', ' ')}</option>
                            <option value="league" style="display: none">${leagueStandard}</option>
                        </select>
			        </div>
		        </div>
		        <div class="panel-controls" style="display: flex">
			        <button class="panel-edit"></button>
			        <div class="panel-move"></div>
			        <button class="panel-delete">x</button>
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
            } else if (panelData.childClass === 'panel-incursion-small') {
                panelIncursion(panel);
            } else if (panelData.childClass === 'panel-blight-extractor') {
                panelBlightRegex(panel);
            } else if (panelData.childClass === 'panel-blight-anoitment') {
                panelBlightAnoitment(panel);
            } else if (panelData.childClass === 'panel-regex-coffin-mods') {
                panelRegexCoffin(panel);
            }
        });

    }

    panelID = maxID;
});