function createPanelTextArea(panelID) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = 44 + 'px';
    panel.style.left = 200 + 'px';
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30">Panel name (max 30 chars)</textarea>
        <div class="panel-textarea" id="id${panelID}">
            <textarea class="panel-content">
            <p><em>%go in with me, don't move, do NOT leave if you die</em></p><p>Feared:</p><p><br></p><p><br></p><p>---------</p><p><em>%please wait in ho, join when I write adasdad, don't move inside, don't leave if you die</em></p><p>UE:</p><p><br></p><p><br></p><p>Sirus:</p><p><br></p><p><br></p><p>Maven:</p><p>@playername</p><p>@playername</p><p>@playername</p><p><br></p><p><br></p><p><br></p>
            </textarea>
        </div>
        <div class="panel-copy-all" title="Copy all text">copy</div>
        <div class="panel-controls">
            <button class="panel-delete">delete</button>
            <button class="panel-move">move</button>
        </div>
    `;
    return panel;
}

function createPanelStashTab(panelID) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = 44 + 'px';
    panel.style.left = 200 + 'px';
    panel.innerHTML = `
        <textarea class="panel-name" maxlength="30" style="display: none">Stash Tab Sale:</textarea>
        <div class="panel-stashtabsale" id="id${panelID}">
            <div class="panel-content"></div>
        </div>
        <div class="panel-controls">
            <button class="panel-delete">delete</button>
            <button class="panel-move">move</button>
        </div>
    `;
    return panel;
}

function createPanelRegexMapMods(panelID) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = 44 + 'px';
    panel.style.left = 200 + 'px';
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
        <div class="panel-controls">
            <button class="panel-delete">delete</button>
            <button class="panel-move">move</button>
        </div>
    `;
    return panel;
}

function createPanelRegexGwennen(panelID) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = 44 + 'px';
    panel.style.left = 200 + 'px';
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
		<div class="panel-controls">
			<button class="panel-delete">delete</button>
			<button class="panel-move">move</button>
		</div>
    `;
    return panel;
}

function createPanelSyndicate(panelID) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.top = 44 + 'px';
    panel.style.left = 200 + 'px';
    const size = localStorage.getItem('mySyndicateSmallSize');
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
    return panel;
}


