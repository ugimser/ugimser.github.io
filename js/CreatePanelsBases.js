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

function createPanelBlightRegex(panelID, panelCounter) {
	const panel = document.createElement('div');
	panel.classList.add('panel');
	panel.style.top = createNewTop(panelCounter);
	panel.style.left = createNewLeft(panelCounter);
	panel.innerHTML = `
		<textarea class="panel-name" maxlength="30">Blight Extractor Regex</textarea>
		<div class="panel-blight-extractor" id="id${panelID}">
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
	return panel;
}

function createPanelBlightAnoitmens(panelID, panelCounter) {
	const panel = document.createElement('div');
	panel.classList.add('panel');
	panel.style.top = createNewTop(panelCounter);
	panel.style.left = createNewLeft(panelCounter);
	panel.innerHTML = `
		<textarea class="panel-name" maxlength="30">Blight Anointments</textarea>
		<div class="panel-blight-anoitment" id="id${panelID}">
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
	return panel;
}
