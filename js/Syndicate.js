﻿let colorGood = '#226633';
let colorMediocre = '#886622';
let colorBackground = '#33333b';

// Small panel
function panelSyndicate(panel) {
	const buttonSize = panel.querySelector('#syndicate-size');
	const buttonFull = panel.querySelector('#syndicate-full');
	const panelContent = panel.querySelector('.panel-content');

	syndicateCreateSmall();
	
	panelContent.addEventListener('click', () => {
		buttonFull.style.transform = 'scale(1.5)';
		setTimeout(() => {
			buttonFull.style.transform = 'scale(1)';
		}, 500);
	});

	buttonSize.addEventListener('click', function () {
		const imgTab = panel.querySelectorAll('img');
		const pTab = panel.querySelectorAll('p');
		let imgSize = '';
		let fontSize = '';
		if (buttonSize.innerText === 'Size: 50%') {
			buttonSize.innerText = 'Size: 75%';
			localStorage.setItem('mySyndicateSmallSize', '75px');
			imgSize = '75px';
			fontSize = '0.9em';
		} else if (buttonSize.innerText === 'Size: 75%') {
			buttonSize.innerText = 'Size: 100%';
			localStorage.setItem('mySyndicateSmallSize', '100px');
			imgSize = '100px';
			fontSize = '1em';
		} else {
			buttonSize.innerText = 'Size: 50%';
			localStorage.setItem('mySyndicateSmallSize', '50px');
			imgSize = '50px';
			fontSize = '0.7em';
		}
		imgTab.forEach(function (img) {
			img.style.width = imgSize;
			img.style.height = imgSize;
		});
		pTab.forEach(function (p) {
			p.style.fontSize = fontSize;
		});

		syndicateSetMinEmptySize();
	});

	buttonFull.addEventListener('click', function () {
		syndicateCreateBigTable();
	});
}

// Big Panel
function syndicateBigBehaviour(panelBig) {
	let cells = document.querySelectorAll('.cell');
	const bigTable = panelBig.querySelector('#syndicate-big-table');
	const buttonBack = panelBig.querySelector('#syndicate-back');
	const resetToDefault = panelBig.querySelector('#syndicate-reset');
	const colorGoodInput = panelBig.querySelector('#colorGood');
	const colorMediocreInput = panelBig.querySelector('#colorMediocre');
	const colorBackgroundInput = panelBig.querySelector('#colorBackground');


	colorGoodInput.addEventListener('input', function () {
		colorGood = this.value;
		cells.forEach(c => {
			if (c.getAttribute('data-choice') === '0') {
				c.style.backgroundColor = colorGood;
			}
		});
		localStorage.setItem('mySyndicateValuesColorGood', colorGood);
	});

	colorMediocreInput.addEventListener('input', function () {
		colorMediocre = this.value;
		cells.forEach(c => {
			if (c.getAttribute('data-choice') === '1') {
				c.style.backgroundColor = colorMediocre;
			}
		});
		localStorage.setItem('mySyndicateValuesColorMediocre', colorMediocre);
	});

	colorBackgroundInput.addEventListener('input', function () {
		colorBackground = this.value;
		bigTable.style.backgroundColor = colorBackground;
		localStorage.setItem('mySyndicateValuesColorBackground', colorBackground);
	});

	resetToDefault.addEventListener('click', function () {
		panelBig.remove();
		syndicateCreateBigTable(true);

		// Ustaw domyślne wartości kolorów
		colorGood = '#226633';
		colorMediocre = '#886622';
		colorBackground = '#33333b';

		// Ustaw wartości kolorów dla inputów
		colorGoodInput.value = colorGood;
		colorMediocreInput.value = colorMediocre;
		colorBackgroundInput.value = colorBackground;
	});


	buttonBack.addEventListener('click', function () {
		syndicateSave();
		panelBig.remove();
		syndicateCreateSmall();
	});

	document.getElementById("syndicate-save-as-image").addEventListener("click", function () {
		var table = document.querySelector("#syndicate-big-table");

		var computedStyle = window.getComputedStyle(table);

		// Extract margin and padding values (consider all sides)
		var marginLeft = parseFloat(computedStyle.marginLeft);
		var marginRight = parseFloat(computedStyle.marginRight);
		var marginTop = parseFloat(computedStyle.marginTop);
		var marginBottom = parseFloat(computedStyle.marginBottom);
		var paddingLeft = parseFloat(computedStyle.paddingLeft);
		var paddingRight = parseFloat(computedStyle.paddingRight);
		var paddingTop = parseFloat(computedStyle.paddingTop);
		var paddingBottom = parseFloat(computedStyle.paddingBottom);

		// Calculate total horizontal and vertical margins and padding
		var totalHorizontalMargin = marginLeft + marginRight;
		var totalVerticalMargin = marginTop + marginBottom;
		var totalHorizontalPadding = paddingLeft + paddingRight;
		var totalVerticalPadding = paddingTop + paddingBottom;

		// Get the table's content area dimensions using getBoundingClientRect()
		var contentWidth = table.getBoundingClientRect().width;
		var contentHeight = table.getBoundingClientRect().height;

		// Calculate total dimensions to capture, including margins and padding
		var totalWidth = contentWidth + totalHorizontalMargin + totalHorizontalPadding;
		var totalHeight = contentHeight + totalVerticalMargin + totalVerticalPadding;

		// Create a canvas element for image generation
		var canvas = document.createElement('canvas');
		canvas.width = totalWidth;
		canvas.height = totalHeight;

		// Use a rendering context to draw the table content onto the canvas
		var context = canvas.getContext('2d');

		// Handle potential scrollbar (might not be necessary if hidden, adjust if needed)
		if (table.scrollWidth > table.clientWidth || table.scrollHeight > table.clientHeight) {
			totalWidth += getScrollbarWidth(); // Add scrollbar width (adjust this function)
		}

		// Position the table content within the canvas, considering margins and padding
		context.translate(marginLeft + paddingLeft, marginTop + paddingTop);

		// Draw the table content (using HTML5 Canvas API methods like drawImage() or drawElement())
		drawTableContent(context, table);

		// Convert canvas to image data URL
		var dataUrl = canvas.toDataURL('image/png');

		// Create a link element to trigger image download
		var link = document.createElement('a');
		link.download = 'mySyndicate.png';
		link.href = dataUrl;
		link.click();





		/*


		var width = table.getBoundingClientRect().width;
		var height = table.getBoundingClientRect().height;

		// 1. Account for margins:
		var computedStyle = window.getComputedStyle(table);
		var marginLeft = parseFloat(computedStyle.marginLeft);
		var marginRight = parseFloat(computedStyle.marginRight);
		var marginTop = parseFloat(computedStyle.marginTop);
		var marginBottom = parseFloat(computedStyle.marginBottom);

		// 2. Adjust width and height:
		width += marginLeft + marginRight;  // Add margins to width
		height += marginTop + marginBottom; // Add margins to height

		domtoimage.toPng(table, { width: width, height: height })
			.then(function (dataUrl) {
				var link = document.createElement('a');
				link.download = 'mySyndicate.png';
				link.href = dataUrl;
				link.click();
			})
			.catch(function (error) {
				console.error('document.getElementById("syndicate-save-as-image"):', error);
			});
			*/
	});


	cells.forEach(function (cell) {
		cell.addEventListener("mouseover", function () {
			var row = this.getAttribute("data-row");
			var column = this.getAttribute("data-column");

			highlightRow(row);
			highlightColumn(column);
		});

		cell.addEventListener("mouseout", function () {
			var row = this.getAttribute("data-row");
			var column = this.getAttribute("data-column");

			removeHighlightRow(row);
			removeHighlightColumn(column);
		});

		cell.addEventListener("click", function () {
			let choice = this.getAttribute("data-choice");
			syndicateStyles(this, ++choice);
		});
		
	});



	function highlightRow(row) {
		var rows = document.querySelectorAll('[data-row="' + row + '"]');
		rows.forEach(function (row) {
			row.classList.add("highlighted-row");
		});
	}

	function highlightColumn(column) {
		var columns = document.querySelectorAll('[data-column="' + column + '"]');
		columns.forEach(function (column) {
			column.classList.add("highlighted-column");
		});
	}

	function removeHighlightRow(row) {
		var rows = document.querySelectorAll('[data-row="' + row + '"]');
		rows.forEach(function (row) {
			row.classList.remove("highlighted-row");
		});
	}

	function removeHighlightColumn(column) {
		var columns = document.querySelectorAll('[data-column="' + column + '"]');
		columns.forEach(function (column) {
			column.classList.remove("highlighted-column");
		});
	}
};

function getScrollbarWidth() {
	// Implement logic to calculate scrollbar width (e.g., using a temporary element)
	return 10; // Replace with actual calculation (this is an estimated placeholder)
}

function drawTableContent(context, table) {
	// Set background color
	context.fillStyle = "#ffffff"; // Set your desired background color
	context.fillRect(0, 0, totalWidth, totalHeight);

	// Iterate over table rows and cells
	for (var i = 0; i < table.rows.length; i++) {
		for (var j = 0; j < table.rows[i].cells.length; j++) {
			var cell = table.rows[i].cells[j];

			// Get cell content and position
			var cellContent = cell.textContent;
			var cellX = cell.getBoundingClientRect().left - table.getBoundingClientRect().left;
			var cellY = cell.getBoundingClientRect().top - table.getBoundingClientRect().top;

			// Draw cell content on the canvas
			context.fillText(cellContent, cellX, cellY);

			// Handle images within cells
			var images = cell.getElementsByTagName('img');
			for (var k = 0; k < images.length; k++) {
				var image = images[k];
				var imageX = image.getBoundingClientRect().left - cell.getBoundingClientRect().left;
				var imageY = image.getBoundingClientRect().top - cell.getBoundingClientRect().top;
				var imageWidth = image.width;
				var imageHeight = image.height;

				// Calculate image position within cell
				var adjustedImageX = cellX + imageX;
				var adjustedImageY = cellY + imageY;

				// Draw image on the canvas at the adjusted position
				context.drawImage(image, adjustedImageX, adjustedImageY, imageWidth, imageHeight);
			}
		}
	}
}

function syndicateStyles(element, choice) {
	choice = parseInt(choice);
	if (choice === 3) {
		choice = 0;
	}
	element.setAttribute("data-choice", choice);
	if (choice === 0) {
		element.style.backgroundColor = colorGood;
		//element.style.color = '#fdfdfd';
		//element.querySelector('img').style.opacity = 1;
	} else if (choice === 1) {
		element.style.backgroundColor = colorMediocre;
	} else if (choice === 2) {
		element.style.backgroundColor = colorBackground;
		//element.querySelector('img').style.opacity = 0.1;
		//element.style.color = '#fdfdfd';
	}
}

function syndicateSave() {
	const tabBig = document.getElementById('syndicate-big-table');
	const values = [];
	const cells = tabBig.querySelectorAll('.cell');
	cells.forEach(cell => {
		const row = cell.getAttribute('data-row') !== null ? cell.getAttribute('data-row') : 4;
		const column = cell.getAttribute('data-column') !== null ? cell.getAttribute('data-column') : 4;
		const choice = cell.getAttribute('data-choice') !== null ? cell.getAttribute('data-choice') : 4;
		values.push({ row, column, choice });
	});

	localStorage.setItem('mySyndicateTableValues', JSON.stringify(values));
}

function syndicateAddLieutenant(container, _row, _choice) {
	if (syndicateLoadData() !== null) {
		const size = localStorage.getItem('mySyndicateSmallSize') !== null ? localStorage.getItem('mySyndicateSmallSize') : '100px';
		syndicateLoadData().forEach(value => {
			const { row, column, choice } = value;
			if (_row === row && _choice === choice) {
				const div = document.createElement('div');
				div.innerHTML = syndicateLieutenantImage(column, size);
				container.appendChild(div);
			}
		});
	} else {
		localStorage.setItem('mySyndicateTableValues', JSON.stringify(syndicateSetDefaultValues()));
		syndicateAddLieutenant(container, _row, _choice);
		console.log('no data in localStorage');
	}
}

function syndicateCreateSmall() {
	const btnArrow = document.querySelector('#removeMe');
	if (btnArrow) {
		btnArrow.remove();
	}
	const transportationGood = document.querySelector('#syndicate-transportation-good');
	const transportationBad = document.querySelector('#syndicate-transportation-mediocre');
	const fortificationGood = document.querySelector('#syndicate-fortification-good');
	const fortificationnBad = document.querySelector('#syndicate-fortification-mediocre');
	const researchGood = document.querySelector('#syndicate-research-good');
	const researchBad = document.querySelector('#syndicate-research-mediocre');
	const interventionGood = document.querySelector('#syndicate-intervention-good');
	const interventionBad = document.querySelector('#syndicate-intervention-mediocre');

	transportationGood.innerHTML = '';
	transportationBad.innerHTML = '';
	fortificationGood.innerHTML = '';
	fortificationnBad.innerHTML = '';
	researchGood.innerHTML = '';
	researchBad.innerHTML = '';
	interventionGood.innerHTML = '';
	interventionBad.innerHTML = '';

	syndicateSetMinEmptySize();

	syndicateAddLieutenant(transportationGood, '1', '0');
	syndicateAddLieutenant(transportationBad, '1', '1');
	syndicateAddLieutenant(fortificationGood, '2', '0');
	syndicateAddLieutenant(fortificationnBad, '2', '1');
	syndicateAddLieutenant(researchGood, '3', '0');
	syndicateAddLieutenant(researchBad, '3', '1');
	syndicateAddLieutenant(interventionGood, '4', '0');
	syndicateAddLieutenant(interventionBad, '4', '1');
	/*
	let liutenants = transportationGood.childElementCount;
	liutenants += transportationBad.childElementCount;
	liutenants += fortificationGood.childElementCount;
	liutenants += fortificationnBad.childElementCount;
	liutenants += researchGood.childElementCount;
	liutenants += researchBad.childElementCount;
	liutenants += interventionGood.childElementCount;
	liutenants += interventionBad.childElementCount;

	if (liutenants === 0) {
		const btn = document.createElement('button');
		btn.id = 'removeMe';
		btn.textContent = '+';
		btn.style.fontSize = '4em';
		btn.style.position = 'absolute';
		btn.style.left = '50%';
		btn.style.top = '55%';
		btn.style.transform = 'translate(-50%, -50%)';
		btn.style.backgroundColor = '#00112200';
		btn.style.color = '#fff';
		btn.style.textShadow = '3px 5px 5px #811';
		btn.style.border = '0px';
		const panelSmall = document.getElementsByClassName('panel-syndicate-small');
		panelSmall[0].appendChild(btn);
		btn.addEventListener('click', function () {
			syndicateCreateBigTable();
		});
	}
	*/
}

function syndicateSetMinEmptySize() {
	const transportationGood = document.querySelector('#syndicate-transportation-good');
	const transportationBad = document.querySelector('#syndicate-transportation-mediocre');
	const fortificationGood = document.querySelector('#syndicate-fortification-good');
	const fortificationnBad = document.querySelector('#syndicate-fortification-mediocre');
	const researchGood = document.querySelector('#syndicate-research-good');
	const researchBad = document.querySelector('#syndicate-research-mediocre');
	const interventionGood = document.querySelector('#syndicate-intervention-good');
	const interventionBad = document.querySelector('#syndicate-intervention-mediocre');

	const minSize = localStorage.getItem('mySyndicateSmallSize') ? localStorage.getItem('mySyndicateSmallSize') : '100px';
	
	transportationGood.style.minHeight = minSize;
	transportationBad.style.minHeight = minSize;
	fortificationGood.style.minHeight = minSize;
	fortificationnBad.style.minHeight = minSize;
	researchGood.style.minHeight = minSize;
	researchBad.style.minHeight = minSize;
	interventionGood.style.minHeight = minSize;
	interventionBad.style.minHeight = minSize;
}

function syndicateLoadData() {
	return JSON.parse(localStorage.getItem('mySyndicateTableValues'));
}

function syndicateLieutenantImage(id, size) {
	const sizeF = size === '50px' ? '0.7em' : '1em';
	let str = '';
	if (id === '2') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Aisling_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Aisling</p>`;
	} else if (id === '3') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Cameria_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Cameria</p>`;
	} else if (id === '4') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Elreon_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Elreon</p>`;
	} else if (id === '5') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Gravicius_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Gravicius</p>`;
	} else if (id === '6') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Guff_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Guff</p>`;
	} else if (id === '7') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Haku_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Haku</p>`;
	} else if (id === '8') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Hillock_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Hillock</p>`;
	} else if (id === '9') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/ItThatFled_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">It That Fled</p>`;
	} else if (id === '10') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Janus_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Janus</p>`;
	} else if (id === '11') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Jorgin_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Jorgin</p>`;
	} else if (id === '12') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Korell_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Korell</p>`;
	} else if (id === '13') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Leo_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Leo</p>`;
	} else if (id === '14') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Riker_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Riker</p>`;
	} else if (id === '15') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Rin_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Rin</p>`;
	} else if (id === '16') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Tora_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Tora</p>`;
	} else if (id === '17') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Vegan_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Vagan</p>`;
	} else if (id === '18') {
		str = `<img class="syndicate-img" style="width: ${size}; height: ${size}" src="img/syndicate/Vorici_icon.png" /><p class="syndicate-name-text" style="font-size: ${sizeF}">Vorici</p>`;
	}

	return str;
}

function syndicateCreateBigTable(reset = false) {
	const singleton = document.querySelectorAll('#syndicate-big');
	if (singleton.length > 0) {
		return;
	}
	colorGood = localStorage.getItem('mySyndicateValuesColorGood') !== null ? localStorage.getItem('mySyndicateValuesColorGood') : '#226633';
	colorMediocre = localStorage.getItem('mySyndicateValuesColorMediocre') !== null ? localStorage.getItem('mySyndicateValuesColorMediocre') : '#886622';
	colorBackground = localStorage.getItem('mySyndicateValuesColorBackground') !== null ? localStorage.getItem('mySyndicateValuesColorBackground') : '#33333b';
	const panel = document.createElement('div');
	panel.innerHTML = `
	<div id="syndicate-big" style="display: flex">

		<button id="syndicate-back">Save and Back</button>

		<div style="display: flex; align-items: center; margin-left: 10px">
			<label for="colorGood" style="position: absolute; margin-left: 10px">Good</label>
			<input type="color" id="colorGood" name="color" value="${colorGood}">
		</div>
		<div style="display: flex; align-items: center; margin-left: 10px">
			<label for="colorMediocre" style="position: absolute; margin-left: 10px">Mediocre</label>
			<input type="color" id="colorMediocre" name="color" value="${colorMediocre}">
		</div>
		<div style="display: flex; align-items: center; margin-left: 10px">
			<label for="colorBackground" style="position: absolute; margin-left: 10px">Background</label>
			<input type="color" id="colorBackground" name="color" value="${colorBackground}">
		</div>

		<button id="syndicate-reset">Reset All</button>
		<button id="syndicate-save-as-image" style="display: none">Save as image</button>

		<table id="syndicate-big-table" class="panel" style="background-color: ${colorBackground}; margin-top: 40px;">
			<tr>
				<td class="cell">
					<img class="syndicate-img" src="img/syndicate/POELogoNecropolis.png" />
				</td>
				<td class="cell" data-column="2">
					<img class="syndicate-img" src="img/syndicate/Aisling_icon.png" /><p class="syndicate-name-text">Aisling</p>
				</td>
				<td class="cell" data-column="3">
					<img class="syndicate-img" src="img/syndicate/Cameria_icon.png" /><p class="syndicate-name-text">Cameria</p>
				</td>
				<td class="cell" data-column="4">
					<img class="syndicate-img" src="img/syndicate/Elreon_icon.png" /><p class="syndicate-name-text">Elreon</p>
				</td>
				<td class="cell" data-column="5">
					<img class="syndicate-img" src="img/syndicate/Gravicius_icon.png" /><p class="syndicate-name-text">Gravicius</p>
				</td>
				<td class="cell" data-column="6">
					<img class="syndicate-img" src="img/syndicate/Guff_icon.png" /><p class="syndicate-name-text">Guff</p>
				</td>
				<td class="cell" data-column="7">
					<img class="syndicate-img" src="img/syndicate/Haku_icon.png" /><p class="syndicate-name-text">Haku</p>
				</td>
				<td class="cell" data-column="8">
					<img class="syndicate-img" src="img/syndicate/Hillock_icon.png" /><p class="syndicate-name-text">Hillock</p>
				</td>
				<td class="cell" data-column="9">
					<img class="syndicate-img" src="img/syndicate/ItThatFled_icon.png" /><p class="syndicate-name-text">It That Fled</p>
				</td>
				<td class="cell" data-column="10">
					<img class="syndicate-img" src="img/syndicate/Janus_icon.png" /><p class="syndicate-name-text">Janus</p>
				</td>
				<td class="cell" data-column="11">
					<img class="syndicate-img" src="img/syndicate/Jorgin_icon.png" /><p class="syndicate-name-text">Jorgin</p>
				</td>
				<td class="cell" data-column="12">
					<img class="syndicate-img" src="img/syndicate/Korell_icon.png" /><p class="syndicate-name-text">Korell</p>
				</td>
				<td class="cell" data-column="13">
					<img class="syndicate-img" src="img/syndicate/Leo_icon.png" /><p class="syndicate-name-text">Leo</p>
				</td>
				<td class="cell" data-column="14">
					<img class="syndicate-img" src="img/syndicate/Riker_icon.png" /><p class="syndicate-name-text">Riker</p>
				</td>
				<td class="cell" data-column="15">
					<img class="syndicate-img" src="img/syndicate/Rin_icon.png" /><p class="syndicate-name-text">Rin</p>
				</td>
				<td class="cell" data-column="16">
					<img class="syndicate-img" src="img/syndicate/Tora_icon.png" /><p class="syndicate-name-text">Tora</p>
				</td>
				<td class="cell" data-column="17">
					<img class="syndicate-img" src="img/syndicate/Vegan_icon.png" /><p class="syndicate-name-text">Vagan</p>
				</td>
				<td class="cell" data-column="18">
					<img class="syndicate-img" src="img/syndicate/Vorici_icon.png" /><p class="syndicate-name-text">Vorici</p>
				</td>
			</tr>
			<tr>
				<td class="cell" data-row="1">
					<img class="syndicate-img" src="img/syndicate/Transportation.png" />
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="2">
					<img class="syndicate-img" src="img/syndicate/pos11.png">
					<p class="syndicate-cell-text">Veiled Weapons and Jewellery</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="3">
					<img class="syndicate-img" src="img/syndicate/pos12.png" />
					<p class="syndicate-cell-text">League Specific Uniques</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="4">
					<img class="syndicate-img" src="img/syndicate/pos13.png" />
					<p class="syndicate-cell-text">Unique Weapon</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="5">
					<img class="syndicate-img" src="img/syndicate/pos14.png" />
					<p class="syndicate-cell-text">Full Stack of Random Divination Cards</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="6">
					<img class="syndicate-img" src="img/syndicate/pos15.png" />
					<p class="syndicate-cell-text">Currency Craft Bench</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="7">
					<img class="syndicate-img" src="img/syndicate/pos16.png" />
					<p class="syndicate-cell-text">Rare Items</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="8">
					<img class="syndicate-img" src="img/syndicate/pos17.png" />
					<p class="syndicate-cell-text">Essence Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="9">
					<img class="syndicate-img" src="img/syndicate/pos18.png" />
					<p class="syndicate-cell-text">Breach Splinters</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="10">
					<img class="syndicate-img" src="img/syndicate/pos19.png" />
					<p class="syndicate-cell-text">Quality Currency</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="11">
					<img class="syndicate-img" src="img/syndicate/pos110.png" />
					<p class="syndicate-cell-text">Talisman Benchcraft</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="12">
					<img class="syndicate-img" src="img/syndicate/pos25.png" />
					<p class="syndicate-cell-text">Essences</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="13">
					<img class="syndicate-img" src="img/syndicate/pos112.png" />
					<p class="syndicate-cell-text">Catalysts</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="14">
					<img class="syndicate-img" src="img/syndicate/pos212.png" />
					<p class="syndicate-cell-text">Currency Trapped Stash</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="15">
					<img class="syndicate-img" src="img/syndicate/pos114.png" />
					<p class="syndicate-cell-text">Normal Maps</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="16">
					<img class="syndicate-img" src="img/syndicate/pos115.png" />
					<p class="syndicate-cell-text">Gems Trapped Stash</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="17">
					<img class="syndicate-img" src="img/syndicate/pos116.png" />
					<p class="syndicate-cell-text">Legion Splinters</p>
				</td>
				<td class="cell" data-choice="2" data-row="1" data-column="18">
					<img class="syndicate-img" src="img/syndicate/pos117.png" />
					<p class="syndicate-cell-text">Reforge 50x colors/links /sockets</p>
				</td>
			</tr>
			<tr>
				<td class="cell" data-row="2">
					<img class="syndicate-img" src="img/syndicate/Fortification.png" />
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="2">
					<img class="syndicate-img" src="img/syndicate/pos21.png" />
					<p class="syndicate-cell-text">Veiled Armour and Jewellery</p>

				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="3">
					<img class="syndicate-img" src="img/syndicate/pos22.png" />
					<p class="syndicate-cell-text">Harbingers Orbs</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="4">
					<img class="syndicate-img" src="img/syndicate/pos23.png" />
					<p class="syndicate-cell-text">Unique Armour</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="5">
					<img class="syndicate-img" src="img/syndicate/pos24.png" />
					<p class="syndicate-cell-text">Random Divination Cards</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="6">
					<img class="syndicate-img" src="img/syndicate/pos25.png" />
					<p class="syndicate-cell-text">Essence Craft Bench</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="7">
					<img class="syndicate-img" src="img/syndicate/pos26.png" />
					<p class="syndicate-cell-text">Random Strongbox</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="8">
					<img class="syndicate-img" src="img/syndicate/pos27.png" />
					<p class="syndicate-cell-text">Trapped Stash of Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="9">
					<img class="syndicate-img" src="img/syndicate/pos28.png" />
					<p class="syndicate-cell-text">Enchanted Maps</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="10">
					<img class="syndicate-img" src="img/syndicate/pos29.png" />
					<p class="syndicate-cell-text">Currency Shards</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="11">
					<img class="syndicate-img" src="img/syndicate/pos210.png" />
					<p class="syndicate-cell-text">Rare Items with Bestiary Mods</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="12">
					<img class="syndicate-img" src="img/syndicate/pos211.png" />
					<p class="syndicate-cell-text">Map Fragments</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="13">
					<img class="syndicate-img" src="img/syndicate/pos212.png" />
					<p class="syndicate-cell-text">Random Currency</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="14">
					<img class="syndicate-img" src="img/syndicate/pos213.png" />
					<p class="syndicate-cell-text">Unique Trapped Stash</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="15">
					<img class="syndicate-img" src="img/syndicate/pos28.png" />
					<p class="syndicate-cell-text">Rare Maps</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="16">
					<img class="syndicate-img" src="img/syndicate/pos215.png" />
					<p class="syndicate-cell-text">Gems with Quality</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="17">
					<img class="syndicate-img" src="img/syndicate/pos-1.png" />
					<p class="syndicate-cell-text">Legion Chest</p>
				</td>
				<td class="cell" data-choice="2" data-row="2" data-column="18">
					<img class="syndicate-img" src="img/syndicate/pos217.png" />
					<p class="syndicate-cell-text">Socket Currency</p>
				</td>
			</tr>
			<tr>
				<td class="cell" data-row="3">
					<img class="syndicate-img" src="img/syndicate/Research.png" />
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="2">
					<img class="syndicate-img" src="img/syndicate/pos31.png" />
					<p class="syndicate-cell-text">Beyond Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="3">
					<img class="syndicate-img" src="img/syndicate/pos32.png" />
					<p class="syndicate-cell-text">Orbs of Unmakings</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="4">
					<img class="syndicate-img" src="img/syndicate/pos33.png" />
					<p class="syndicate-cell-text">Unique Jewellery</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="5">
					<img class="syndicate-img" src="img/syndicate/pos34.png" />
					<p class="syndicate-cell-text">Swap Divination Card</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="6">
					<img class="syndicate-img" src="img/syndicate/pos35.png" />
					<p class="syndicate-cell-text">Exalt/Annul Craft Bench</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="7">
					<img class="syndicate-img" src="img/syndicate/pos16.png" />
					<p class="syndicate-cell-text">Rare Items with Quality</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="8">
					<img class="syndicate-img" src="img/syndicate/pos37.png" />
					<p class="syndicate-cell-text">Anarchy Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="9">
					<img class="syndicate-img" src="img/syndicate/pos38.png" />
					<p class="syndicate-cell-text">Breachstones Upgrade in your Map Device</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="10">
					<img class="syndicate-img" src="img/syndicate/pos39.png" />
					<p class="syndicate-cell-text">Expedition Currency</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="11">
					<img class="syndicate-img" src="img/syndicate/pos310.png" />
					<p class="syndicate-cell-text">Ritual Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="12">
					<img class="syndicate-img" src="img/syndicate/pos311.png" />
					<p class="syndicate-cell-text">Fossils</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="13">
					<img class="syndicate-img" src="img/syndicate/pos-1.png" />
					<p class="syndicate-cell-text">Trapped Stash</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="14">
					<img class="syndicate-img" src="img/syndicate/pos313.png" />
					<p class="syndicate-cell-text">Currency/Fossil/<br />Splinter/Catalyst<br />Trapped Stash</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="15">
					<img class="syndicate-img" src="img/syndicate/pos314.png" />
					<p class="syndicate-cell-text">Unique Maps</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="16">
					<img class="syndicate-img" src="img/syndicate/pos315.png" />
					<p class="syndicate-cell-text">Gem Experience Benchcraft</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="17">
					<img class="syndicate-img" src="img/syndicate/pos11.png" />
					<p class="syndicate-cell-text">Weapon Crafting Bench</p>
				</td>
				<td class="cell" data-choice="2" data-row="3" data-column="18">
					<img class="syndicate-img" src="img/syndicate/pos317.png" />
					<p class="syndicate-cell-text">Harvest Scarabs</p>
				</td>
			</tr>
			<tr>
				<td class="cell" data-row="4">
					<img class="syndicate-img" src="img/syndicate/Intervention.png" />
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="2">
					<img class="syndicate-img" src="img/syndicate/pos41.png" />
					<p class="syndicate-cell-text">Torment Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="3">
					<img class="syndicate-img" src="img/syndicate/pos42.png" />
					<p class="syndicate-cell-text">Sulphite Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="4">
					<img class="syndicate-img" src="img/syndicate/pos43.png" />
					<p class="syndicate-cell-text">Reliquary Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="5">
					<img class="syndicate-img" src="img/syndicate/pos44.png" />
					<p class="syndicate-cell-text">Divination Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="6">
					<img class="syndicate-img" src="img/syndicate/pos45.png" />
					<p class="syndicate-cell-text">Incursion Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="7">
					<img class="syndicate-img" src="img/syndicate/pos46.png" />
					<p class="syndicate-cell-text">Ambush Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="8">
					<img class="syndicate-img" src="img/syndicate/pos47.png" />
					<p class="syndicate-cell-text">Abyss <br />Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="9">
					<img class="syndicate-img" src="img/syndicate/pos48.png" />
					<p class="syndicate-cell-text">Breach <br />Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="10">
					<img class="syndicate-img" src="img/syndicate/pos49.png" />
					<p class="syndicate-cell-text">Expedition Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="11">
					<img class="syndicate-img" src="img/syndicate/pos410.png" />
					<p class="syndicate-cell-text">Bestiary Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="12">
					<img class="syndicate-img" src="img/syndicate/pos411.png" />
					<p class="syndicate-cell-text">Influencing Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="13">
					<img class="syndicate-img" src="img/syndicate/pos412.png" />
					<p class="syndicate-cell-text">Ultimatum Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="14">
					<img class="syndicate-img" src="img/syndicate/pos413.png" />
					<p class="syndicate-cell-text">Blight Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="15">
					<img class="syndicate-img" src="img/syndicate/pos414.png" />
					<p class="syndicate-cell-text">Cartography Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="16">
					<img class="syndicate-img" src="img/syndicate/pos415.png" />
					<p class="syndicate-cell-text">Harbinger Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="17">
					<img class="syndicate-img" src="img/syndicate/pos416.png" />
					<p class="syndicate-cell-text">Legion Scarabs</p>
				</td>
				<td class="cell" data-choice="2" data-row="4" data-column="18">
					<img class="syndicate-img" src="img/syndicate/pos417.png" />
					<p class="syndicate-cell-text">Delirium Scarabs</p>
				</td>
			</tr>
		</table>
	</div>
	`;
	panel.className = 'syndicate-big-table';
	document.body.appendChild(panel);

	if (reset === false && syndicateLoadData()) {
		syndicateLoadData().forEach(value => {
			const { row, column, choice } = value;
			const cell = document.querySelector(`.cell[data-row="${row}"][data-column="${column}"]`);
			if (cell) {
				cell.setAttribute('data-choice', choice);
				syndicateStyles(cell, choice);
			}
		});
	}
	syndicateBigBehaviour(panel);
}

function syndicateSetDefaultValues() {
	return [
		{
			"row": 4,
			"column": 4,
			"choice": 4
		},
		{
			"row": 4,
			"column": "2",
			"choice": 4
		},
		{
			"row": 4,
			"column": "3",
			"choice": 4
		},
		{
			"row": 4,
			"column": "4",
			"choice": 4
		},
		{
			"row": 4,
			"column": "5",
			"choice": 4
		},
		{
			"row": 4,
			"column": "6",
			"choice": 4
		},
		{
			"row": 4,
			"column": "7",
			"choice": 4
		},
		{
			"row": 4,
			"column": "8",
			"choice": 4
		},
		{
			"row": 4,
			"column": "9",
			"choice": 4
		},
		{
			"row": 4,
			"column": "10",
			"choice": 4
		},
		{
			"row": 4,
			"column": "11",
			"choice": 4
		},
		{
			"row": 4,
			"column": "12",
			"choice": 4
		},
		{
			"row": 4,
			"column": "13",
			"choice": 4
		},
		{
			"row": 4,
			"column": "14",
			"choice": 4
		},
		{
			"row": 4,
			"column": "15",
			"choice": 4
		},
		{
			"row": 4,
			"column": "16",
			"choice": 4
		},
		{
			"row": 4,
			"column": "17",
			"choice": 4
		},
		{
			"row": 4,
			"column": "18",
			"choice": 4
		},
		{
			"row": "1",
			"column": 4,
			"choice": 4
		},
		{
			"row": "1",
			"column": "2",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "3",
			"choice": "0"
		},
		{
			"row": "1",
			"column": "4",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "5",
			"choice": "1"
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
			"choice": "0"
		},
		{
			"row": "1",
			"column": "9",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "10",
			"choice": "1"
		},
		{
			"row": "1",
			"column": "11",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "12",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "13",
			"choice": "0"
		},
		{
			"row": "1",
			"column": "14",
			"choice": "1"
		},
		{
			"row": "1",
			"column": "15",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "16",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "17",
			"choice": "2"
		},
		{
			"row": "1",
			"column": "18",
			"choice": "2"
		},
		{
			"row": "2",
			"column": 4,
			"choice": 4
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
		},
		{
			"row": "2",
			"column": "7",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "8",
			"choice": "1"
		},
		{
			"row": "2",
			"column": "9",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "10",
			"choice": "0"
		},
		{
			"row": "2",
			"column": "11",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "12",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "13",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "14",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "15",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "16",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "17",
			"choice": "2"
		},
		{
			"row": "2",
			"column": "18",
			"choice": "2"
		},
		{
			"row": "3",
			"column": 4,
			"choice": 4
		},
		{
			"row": "3",
			"column": "2",
			"choice": "1"
		},
		{
			"row": "3",
			"column": "3",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "4",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "5",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "6",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "7",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "8",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "9",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "10",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "11",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "12",
			"choice": "0"
		},
		{
			"row": "3",
			"column": "13",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "14",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "15",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "16",
			"choice": "1"
		},
		{
			"row": "3",
			"column": "17",
			"choice": "2"
		},
		{
			"row": "3",
			"column": "18",
			"choice": "0"
		},
		{
			"row": "4",
			"column": 4,
			"choice": 4
		},
		{
			"row": "4",
			"column": "2",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "3",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "4",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "5",
			"choice": "0"
		},
		{
			"row": "4",
			"column": "6",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "7",
			"choice": "1"
		},
		{
			"row": "4",
			"column": "8",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "9",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "10",
			"choice": "0"
		},
		{
			"row": "4",
			"column": "11",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "12",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "13",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "14",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "15",
			"choice": "2"
		},
		{
			"row": "4",
			"column": "16",
			"choice": "1"
		},
		{
			"row": "4",
			"column": "17",
			"choice": "0"
		},
		{
			"row": "4",
			"column": "18",
			"choice": "0"
		}
	];
}