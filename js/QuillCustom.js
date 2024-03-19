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

function getQuillText (quill_id) {
	const textarea = document.getElementById(quill_id);
	if (textarea) {
		const qi = Quill.find(textarea);
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

function addQuill(id, savedContent = 'e') {
	//return;
	var quill = new Quill('#' + id, quillConfig);

	var customIcons = quill.getModule('toolbar').container.querySelectorAll('.ql-copy');
	Array.prototype.forEach.call(customIcons, function (icon) {
		icon.innerHTML = '<i class="fas fa-copy"></i>'; // Ustawiamy ikonê Font Awesome
	});

	if (savedContent != 'e') {
		quill.setContents(savedContent);
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

function attachCopyEventListeners(quill) {
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



