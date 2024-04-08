const quillConfig = {
	theme: 'bubble',
	modules: {
		imageResize: {
			modules: ['Resize', 'DisplaySize', 'Toolbar']
		},
		toolbar: {
			container: [
				[{ 'header': [1, 2, false] }],
				['bold', 'underline', 'strike'],
				[{ 'color': [] }, { 'background': [] }], 
				['blockquote'],
				[{ 'list': 'ordered' }],
				[{ 'indent': '-1' }, { 'indent': '+1' }],
				['link', 'image'],
				[{ 'align': [] }],
				[{ 'copy': 'my-icon' }],
				['clean']
			],
			handlers: {
				'copy': function () {
					const range = this.quill.getSelection();
					if (range) {
						copyOptionState = !copyOptionState;
						if (copyOptionState) {
							const text = this.quill.getText(range.index, range.length);
							// Modify the link format as needed
							//this.quill.format('code-block', false);
							//this.quill.format('background', '#eee');
							//this.quill.format('link', 'http://www.copy.copy');
							this.quill.format('italic', '#111');
							copyToClipboard(text);
							attachCopyEventListeners(this.quill);
						} else {
							this.quill.removeFormat(range.index, range.length);
						}
					}
				}
			}
		}
	}
};
let copyOptionState = false;

function getQuillContent(quill_id) {
	const textarea = document.getElementById(quill_id);
	if (textarea) {
		const qi = Quill.find(textarea);
		return qi.getContents();
	}
	return 'quill instance not found: ' + quill_id;
}

async function copyQuillText (quill_id) {
	const textarea = document.getElementById(quill_id);
	if (textarea) {
		const qi = Quill.find(textarea);
		//console.log(qi.getContents());
		//qi.focus(); // Ustawienie fokusu na edytorze
		//var editorLength = qi.getLength(); // Pobranie d³ugoœci zawartoœci edytora
		//qi.setSelection(0, editorLength);
		//await navigator.clipboard.write(qi.getSelection());
		//document.execCommand('copy');
		//return qi.getContents();
		//console.log(qi.getText());
		copyToClipboardTextAndImages(qi.getText());
		return qi.getText();
	}
	return 'quill instance not found: ' + quill_id;
}

function getQuillScroll(quill_id) {
	const elementWithQuill = document.getElementById(quill_id);
	if (elementWithQuill) {
		const qi = Quill.find(elementWithQuill);
		const bounds = qi.getScrollTop();
		console.log(bounds);
		return bounds.scrollHeight > bounds.clientHeight;
	}
	if (elementWithQuill.hasScrollBar()) {
		console.log(true);
	} else {
		// Edytor nie ma scrollbara
	}
	return false;
}

function addQuill(id, savedContent = 'e', openHtml = false) {
	//return;
	var quill = new Quill('#' + id, quillConfig);

	var customIcons = quill.getModule('toolbar').container.querySelectorAll('.ql-copy');
	Array.prototype.forEach.call(customIcons, function (icon) {
		icon.innerHTML = '<i class="fas fa-copy"></i>';
	});

	if (savedContent != 'e') {
		if (openHtml) {
			quill.root.innerHTML = savedContent;
		} else {
			quill.setContents(savedContent);
		}
		attachCopyEventListeners(quill);
		return;
	}
	// Utworzenie obserwatora mutacji
	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.type === 'childList') {
				Array.from(mutation.addedNodes).forEach(function (node) {
					if (node.tagName === 'EM') {
						//var href = node.getAttribute('href');
						//console.log('mutationObserver');
						//if (href.substring(href.length - 5) === '.copy') {
							node.addEventListener('click', function (event) {
								event.preventDefault(); // Zapobiegamy domyœlnej akcji klikniêcia na linku
								var text = node.textContent || node.innerText; // Pobieramy tekst z wnêtrza elementu <a>
								copyToClipboard(text); // Kopiujemy tekst do schowka
							});
						//}
					}
				});
			}
		});
	});

	// Rozpoczêcie obserwowania elementu quill
	observer.observe(quill.root, { childList: true, subtree: true });
}

function attachCopyEventListeners2(quill) {
	var links = quill.root.querySelectorAll('em');
	//console.log('em listener');
	links.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			var text = link.textContent || link.innerText;
			copyToClipboard(text);
		});
	});
}





function attachCopyEventListeners(quill) {
	var elements = quill.root.querySelectorAll('em, img');
	elements.forEach(function (element) {
		element.addEventListener('click', function (event) {
			event.preventDefault();
			var text = '';

			// Obs³uga tekstu
			if (element.tagName.toLowerCase() === 'em') {
				text = element.textContent || element.innerText;
			}

			// Obs³uga obrazów
			if (element.tagName.toLowerCase() === 'img') {
				var canvas = document.createElement('canvas');
				var context = canvas.getContext('2d');
				canvas.width = element.width;
				canvas.height = element.height;
				context.drawImage(element, 0, 0, element.width, element.height);
				text = canvas.toDataURL(); // Konwersja obrazu do danych base64
			}
			//console.log(text);
			copyToClipboardTextAndImages(text);
		});
	});
}


async function copyToClipboardTextAndImages(text) {
	if (navigator.clipboard) {
		try {
			if (text.startsWith('data:image')) {
				// Obs³uga obrazu base64
				const blob = base64ToBlob(text);
				await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]); 
				notification('Image copied');
			} else {
				// Obs³uga tekstu
				await navigator.clipboard.writeText(text);
				notification('Copied: ' + text);
			}
		} catch (err) {
			console.log('B³¹d podczas kopiowania do schowka:', err);
		}
	} else {
		copyToClipboardFallBack(text);
	}
}

function base64ToBlob(dataURI) {
	if (!dataURI) {
		throw new Error('Invalid dataURI');
	}
	// Sprawdzenie, czy dataURI jest w formacie base64
	const base64Regex = /^data:image\/\w+;base64,/;
	if (!base64Regex.test(dataURI)) {
		throw new Error('Invalid base64 dataURI');
	}
	// Odseparowanie typu MIME i danych base64
	const byteString = atob(dataURI.split(',')[1]);
	const arrayBuffer = new ArrayBuffer(byteString.length);
	const intArray = new Uint8Array(arrayBuffer);
	for (let i = 0; i < byteString.length; i++) {
		intArray[i] = byteString.charCodeAt(i);
	}
	return new Blob([arrayBuffer], { type: 'image/png' }); // Typ MIME jest ustawiony na image/png jako domyœlny
}

