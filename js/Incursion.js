let incColorGood = '#219c35';
let incColorMediocre = '#ba9c35';
// Small panel
function panelIncursion(panel) {
	const buttonSize = panel.querySelector('#incursion-size');
	const buttonFull = panel.querySelector('#incursion-full');

	incursionCreateSmall();

	buttonSize.addEventListener('click', function () {
		const imgTab = panel.querySelectorAll('img');
		let imgSize = '';
		if (buttonSize.innerText === 'Size: 75%') {
			buttonSize.innerText = 'Size: 100%';
			localStorage.setItem('myIncursionSmallSize', '100%');
			imgSize = '162px';
		} else if (buttonSize.innerText === 'Size: 100%') {
			buttonSize.innerText = 'Size: 125%';
			localStorage.setItem('myIncursionSmallSize', '125%');
			imgSize = '202px';
		} else {
			buttonSize.innerText = 'Size: 75%';
			localStorage.setItem('myIncursionSmallSize', '75%');
			imgSize = '122px';
		}
		imgTab.forEach(function (img) {
			img.style.width = imgSize;
		});
	});

	buttonFull.addEventListener('click', function () {
		incursionCreateBigTable();
	});
}

// Big panel
function incursionBigBehaviour(panelBig) {
	let cells = document.querySelectorAll('.incursion-cell');
	//const bigTable = panelBig.querySelector('#syndicate-big-table');
	const buttonBack = panelBig.querySelector('#incursion-back');
	const resetToDefault = panelBig.querySelector('#incursion-reset');
	const colorGoodInput = panelBig.querySelector('#colorGood');
	const colorMediocreInput = panelBig.querySelector('#colorMediocre');

	cells.forEach(function (cell) {
		cell.addEventListener("click", function () {
			let choice = this.getAttribute("data-choice");
			incursionStyles(this, ++choice);
		});
	});

	buttonBack.addEventListener('click', function () {
		incursionSave();
		panelBig.remove();
		incursionCreateSmall();
	});

	colorGoodInput.addEventListener('input', function () {
		incColorGood = this.value;
		cells.forEach(c => {
			if (c.getAttribute('data-choice') === '0') {
				c.style.backgroundColor = incColorGood;
			}
		});
		localStorage.setItem('myIncursionValuesColorGood', incColorGood);
	});

	colorMediocreInput.addEventListener('input', function () {
		incColorMediocre = this.value;
		cells.forEach(c => {
			if (c.getAttribute('data-choice') === '1') {
				c.style.backgroundColor = incColorMediocre;
			}
		});
		localStorage.setItem('myIncursionValuesColorMediocre', incColorMediocre);
	});

	resetToDefault.addEventListener('click', function () {
		panelBig.remove();
		incursionCreateBigTable(true);

		// Ustaw domyœlne wartoœci kolorów
		incColorGood = '#117722';
		incColorMediocre = '#997711';

		// Ustaw wartoœci kolorów dla inputów
		colorGoodInput.value = incColorGood;
		colorMediocreInput.value = incColorMediocre;
	});

}

function incursionStyles(element, choice) {
	choice = parseInt(choice);
	if (choice === 3) {
		choice = 0;
	}
	element.setAttribute("data-choice", choice);
	if (choice === 0) {
		element.style.backgroundColor = incColorGood;
	} else if (choice === 1) {
		element.style.backgroundColor = incColorMediocre;
	} else if (choice === 2) {
		element.style.backgroundColor = '#00000000';
	}
}

function incursionSave() {
	const tabBig = document.getElementById('incursion-big-table');
	const values = [];
	const cells = tabBig.querySelectorAll('.incursion-cell');
	cells.forEach(cell => {
		const row = cell.getAttribute('data-row') !== null ? cell.getAttribute('data-row') : 4;
		const column = cell.getAttribute('data-column') !== null ? cell.getAttribute('data-column') : 4;
		const choice = cell.getAttribute('data-choice') !== null ? cell.getAttribute('data-choice') : 4;
		values.push({ row, column, choice });
	});

	localStorage.setItem('myIncursionTableValues', JSON.stringify(values));
} 

function incursionCreateSmall() {
	const sTier = document.querySelector('#incursion-tier-s');
	const aTier = document.querySelector('#incursion-tier-a');

	sTier.innerHTML = '';
	aTier.innerHTML = '';

	incursionAddRoom(sTier, '0');
	incursionAddRoom(aTier, '1');
}

function incursionAddRoom(container, _choice) {
	if (incursionLoadData() !== null) {
		let size = localStorage.getItem('myIncursionSmallSize') !== null ? localStorage.getItem('myIncursionSmallSize') : '162px';
		if (size === '75%') {
			size = '122px';
		} else if (size === '100%') {
			size = '162px';
		} else if (size === '125%') {
			size = '202px';
		}
		incursionLoadData().forEach(value => {
			const { row, column, choice } = value;
			if (_choice === choice) {
				const div = document.createElement('div');
				div.innerHTML = incursionRoomImage(row + column, size);
				container.appendChild(div);
			}
		});
	} else {
		localStorage.setItem('myIncursionTableValues', JSON.stringify(incursionDefaultLocalStorageValue()));
		incursionAddRoom(container, _choice);
		console.log('no data in localStorage');
	}
}
function incursionLoadData() {
	return JSON.parse(localStorage.getItem('myIncursionTableValues'));
}

function incursionRoomImage(id, size) {
	let str;
	if (id === '00') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/corrupting.png" />`;
	} else if (id === '01') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/gems.png" />`;
	} else if (id === '02') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/powerup.png" />`;
	} else if (id === '03') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/sacrificing.png" />`;
	} else if (id === '04') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/currency.png" />`;
	} else if (id === '05') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/armour.png" />`;
	} else if (id === '06') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/atziri.png" />`;
	} else if (id === '07') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/breach.png" />`;
	} else if (id === '08') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/explosive.png" />`;
	} else if (id === '10') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/fire.png" />`;
	} else if (id === '11') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/items.png" />`;
	} else if (id === '12') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/jewellery.png" />`;
	} else if (id === '13') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/legions.png" />`;
	} else if (id === '14') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/life_quantity.png" />`;
	} else if (id === '15') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/life_regen.png" />`;
	} else if (id === '16') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/lightning.png" />`;
	} else if (id === '17') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/maps.png" />`;
	} else if (id === '18') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/minions.png" />`;
	} else if (id === '20') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/pack_size.png" />`;
	} else if (id === '21') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/poison.png" />`;
	} else if (id === '22') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/spirits.png" />`;
	} else if (id === '23') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/strongboxes.png" />`;
	} else if (id === '24') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/tempest.png" />`;
	} else if (id === '25') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/traps.png" />`;
	} else if (id === '26') {
		str = `<img class="incursion-img" style="width: ${size}" src="img/incursion/weapons.png" />`;
	}
	return str;
}

function incursionCreateBigTable(reset = false) {
	const singleton = document.querySelectorAll('#syndicate-big');
	if (singleton.length > 0) {
		return;
	}
	incColorGood = localStorage.getItem('myIncursionValuesColorGood') !== null ? localStorage.getItem('myIncursionValuesColorGood') : '#219c35';
	incColorMediocre = localStorage.getItem('myIncursionValuesColorMediocre') !== null ? localStorage.getItem('myIncursionValuesColorMediocre') : '#ba9c35';
	const panel = document.createElement('div');
	panel.innerHTML = `
		<div id="incursion-big" style="display: flex; justify-content: center;">
			<div style="display: flex; width: 100%; margin-left: 150px">
				<button id="incursion-back">Save and Back</button>

				<div style="display: flex; align-items: center; margin-left: 10px">
					<label for="colorGood" style="position: absolute; margin-left: 10px">Good</label>
					<input type="color" id="colorGood" name="color" value="#11aa22">
				</div>
				<div style="display: flex; align-items: center; margin-left: 10px">
					<label for="colorMediocre" style="position: absolute; margin-left: 10px">Mediocre</label>
					<input type="color" id="colorMediocre" name="color" value="#998833">
				</div>

				<button id="incursion-reset" style="margin-left: 20px">Reset All</button>
			</div>
			<table id="incursion-big-table" class="panel" style="background-color: #3330; margin-top: 40px;">
				<tr>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="0">
						<img class="incursion-img" src="img/incursion/corrupting.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="1">
						<img class="incursion-img" src="img/incursion/gems.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="2">
						<img class="incursion-img" src="img/incursion/powerup.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="3">
						<img class="incursion-img" src="img/incursion/sacrificing.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="4">
						<img class="incursion-img" src="img/incursion/currency.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="5">
						<img class="incursion-img" src="img/incursion/armour.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="6">
						<img class="incursion-img" src="img/incursion/atziri.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="7">
						<img class="incursion-img" src="img/incursion/breach.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="0" data-column="8">
						<img class="incursion-img" src="img/incursion/explosive.png" />
					</td>
				</tr>
				<tr>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="0">
						<img class="incursion-img" src="img/incursion/fire.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="1">
						<img class="incursion-img" src="img/incursion/items.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="2">
						<img class="incursion-img" src="img/incursion/jewellery.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="3">
						<img class="incursion-img" src="img/incursion/legions.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="4">
						<img class="incursion-img" src="img/incursion/life_quantity.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="5">
						<img class="incursion-img" src="img/incursion/life_regen.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="6">
						<img class="incursion-img" src="img/incursion/lightning.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="7">
						<img class="incursion-img" src="img/incursion/maps.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="1" data-column="8">
						<img class="incursion-img" src="img/incursion/minions.png" />
					</td>
				</tr>
				<tr>
					<td class="incursion-cell" data-choice="2" data-row="2" data-column="0">
						<img class="incursion-img" src="img/incursion/pack_size.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="2" data-column="1">
						<img class="incursion-img" src="img/incursion/poison.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="2" data-column="2">
						<img class="incursion-img" src="img/incursion/spirits.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="2" data-column="3">
						<img class="incursion-img" src="img/incursion/strongboxes.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="2" data-column="4">
						<img class="incursion-img" src="img/incursion/tempest.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="2" data-column="5">
						<img class="incursion-img" src="img/incursion/traps.png" />
					</td>
					<td class="incursion-cell" data-choice="2" data-row="2" data-column="6">
						<img class="incursion-img" src="img/incursion/weapons.png" />
					</td>
				</tr>
			</table>
		</div>
	`;
	panel.className = 'incursion-big-table';
	document.body.appendChild(panel);

	if (reset === false && incursionLoadData()) {
		incursionLoadData().forEach(value => {
			const { row, column, choice } = value;
			const cell = document.querySelector(`.incursion-cell[data-row="${row}"][data-column="${column}"]`);
			if (cell) {
				cell.setAttribute('data-choice', choice);
				incursionStyles(cell, choice);
			}
		});
	}
	incursionBigBehaviour(panel);
}

function incursionDefaultLocalStorageValue() {
	return [
		{
			"row": "0",
			"column": "0",
			"choice": "0"
		},
		{
			"row": "0",
			"column": "1",
			"choice": "0"
		},
		{
			"row": "0",
			"column": "2",
			"choice": "1"
		},
		{
			"row": "0",
			"column": "3",
			"choice": "1"
		},
		{
			"row": "0",
			"column": "4",
			"choice": "1"
		},
		{
			"row": "0",
			"column": "5",
			"choice": "2"
		},
		{
			"row": "0",
			"column": "6",
			"choice": "2"
		},
		{
			"row": "0",
			"column": "7",
			"choice": "2"
		},
		{
			"row": "0",
			"column": "8",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "0",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "1",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "2",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "3",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "4",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "5",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "6",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "7",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "8",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "0",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "1",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "2",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "3",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "4",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "5",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "6",
			"choice": "2"
		}
	];
}