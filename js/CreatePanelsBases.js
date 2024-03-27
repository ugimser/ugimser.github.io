function createNewTop(_panelCounter) {
    if (_panelCounter > 10) {
        panelCounter = 0;
    }
    return 44 + (20 * _panelCounter) + 'px';
}
function createNewLeft(panelCounter) {
    if (panelCounter > 10) {
        panelCounter = 0;
    }
    return 200 + (20 * panelCounter) + 'px';
}

function createPanelTextArea(panelID, panelCounter) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = createNewTop(panelCounter);
    panel.style.left = createNewLeft(panelCounter);
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30">Panel name (max 30 chars)</textarea>
        <div class="panel-textarea" id="id${panelID}">
            <textarea class="panel-content">
            <p><em>%go in with me, don't move, do NOT leave if you die</em></p><p>Feared:</p><p><br></p><p><br></p><p>---------</p><p><em>%please wait in ho, join when I write adasdad, don't move inside, don't leave if you die</em></p><p>UE:</p><p><br></p><p><br></p><p>Sirus:</p><p><br></p><p><br></p><p>Maven:</p><p>@playername</p><p>@playername</p><p>@playername</p><p><br></p><p><br></p><p><br></p>
            </textarea>
        </div>
        <button class="panel-copy-all" title="Copy all text">copy</button>
        <div class="panel-controls" style="display: flex">
			<button class="panel-edit"></button>
			<div class="panel-move"></div>
			<button class="panel-delete">x</button>
		</div>
    `;
    return panel;
}

function createPanelStashTab(panelID, panelCounter) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = createNewTop(panelCounter);
    panel.style.left = createNewLeft(panelCounter);
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30" style="display: none">Stash Tab Sale:</textarea>
        <div class="panel-stashtabsale" id="id${panelID}">
            <div class="panel-content"></div>
        </div>
        <div class="panel-controls" style="display: flex; height: 100%">
			<button class="panel-edit" style="display: none"></button>
			<div class="panel-move" style="width: calc(100% - 10px); height: 100%"></div>
			<div class="panel-delete" style="font-size: 0.7em; margin-top: -3px; margin-right: -20px">x</div>
		</div>
    `;
    return panel;
}

function createPanelRegexMapMods(panelID, panelCounter) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = createNewTop(panelCounter);
    panel.style.left = createNewLeft(panelCounter);
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30">Map Modifiers Regex:</textarea>
        <div class="panel-regex-map-mods" id="id${panelID}">
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
        <div class="panel-controls" style="display: flex">
			<button class="panel-edit"></button>
			<div class="panel-move"></div>
			<button class="panel-delete">x</button>
		</div>
    `;
    return panel;
}

function createPanelRegexGwennen(panelID, panelCounter) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = createNewTop(panelCounter);
    panel.style.left = createNewLeft(panelCounter);
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30">Gwennen Regex:</textarea>
		<div class="panel-regex-gwennen-mods" id="id${panelID}">
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
		<div class="panel-controls" style="display: flex">
			<button class="panel-edit"></button>
			<div class="panel-move"></div>
			<button class="panel-delete">x</button>
		</div>
    `;
    return panel;
}

function createPanelSyndicate(panelID, panelCounter) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = createNewTop(panelCounter);
    panel.style.left = createNewLeft(panelCounter);
    const size = localStorage.getItem('mySyndicateSmallSize') ? localStorage.getItem('mySyndicateSmallSize') : '100px';
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30">Syndicate</textarea>
		<div class="panel-syndicate-small" id="id${panelID}">
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
				<button id="syndicate-size" style="margin-right: 20px; margin-bottom: -10px">Size: ${size.substring(0, size.length - 2)}%</button>
				<button id="syndicate-full" style="margin-right: 20px; margin-bottom: -10px">Edit - Full Screen</button>
			</div>
		</div>
		<div class="panel-controls" style="display: flex">
			<button class="panel-edit"></button>
			<div class="panel-move"></div>
			<button class="panel-delete">x</button>
		</div>
    `;
    return panel;
}

function createPanelIncursion(panelID, panelCounter) {
	const panel = document.createElement('div');
	panel.classList.add('panel');
	panel.style.top = createNewTop(panelCounter);
	panel.style.left = createNewLeft(panelCounter);
	const size = localStorage.getItem('myIncursionSmallSize') ? localStorage.getItem('myIncursionSmallSize') : '100%';
	panel.innerHTML = `
        <textarea class="panel-name" maxlength="30">Incursion</textarea>
		<div class="panel-incursion-small" id="id${panelID}">
			<div class="incursion-tier">
				<p class="incursion-tier-name">Super</p>
				<div id="incursion-tier-s">
					<img src="img/incursion/corrupting.png" />
					<img src="img/incursion/gems.png" />
					<img src="img/incursion/powerup.png" />
				</div>
			</div>
			<div class="incursion-tier">
				<p class="incursion-tier-name">Good</p>
				<div id="incursion-tier-a">
					<img src="img/incursion/currency.png" />
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
	return panel;
}
