let dropZones = [];


/**
 * Za ka�dym razem psuje quill
 * edytuj tylko jak masz du�o czasu
 * @param {any} panel
 */
function panelMoveToTheTop(panel) {
    const children = panels.childList;
    var position = -1;
    for (var i = 0; i < children.length; i++) {
        if (children[i] === element) {
            position = i;
            break;
        }
    }
    console.log(position);

    const panelContent = panel.querySelector('.panel-content');
    if (panelContent) {
        panelContent.addEventListener('mouseover', () => {
           // console.log(panel.querySelector('.panel-content'));
            panels.appendChild(panel);
        });
    } else {
        const inc = panel.querySelector('.panel-incursion-small');
        if (inc) {
            inc.addEventListener('mouseover', () => {
                //console.log(panel.querySelector('.panel-content'));
                panels.appendChild(panel);
            });
        }
    }
}

function panelBehaviour(panel, id) {
    let offsetX = 0;//panel.offsetLeft;
    let offsetY = 0;// panel.offsetTop;
    let isDragging = false;
    let deletePanelCounter = 0;

    //panelMoveToTheTop(panel);

    try {
        panel.querySelector('.panel-edit').addEventListener('click', (event) => {
            panel.querySelector('.panel-name').select();
        });

        panel.querySelector('.panel-move').addEventListener('mousedown', (event) => {
            event.preventDefault();
            isDragging = true;
            offsetX = event.clientX - panel.getBoundingClientRect().left + 10;
            offsetY = event.clientY - panel.getBoundingClientRect().top + 10;
            panels.appendChild(panel);
        });

        panel.querySelector('.panel-delete').addEventListener('click', (ele) => {
            deletePanelCounter++
            if (deletePanelCounter > 1) {
                document.removeEventListener('mousemove', Event);
                document.removeEventListener('mouseup', Event);
                panel.remove();
            } else {
                ele.target.innerHTML = 'x?';
                ele.target.style.color = '#f00';
                setTimeout(() => {
                    ele.target.innerHTML = 'x';
                    ele.target.style.color = '#fff';
                    deletePanelCounter = 0;
                }, 1000);
            }
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
            let x = moveEvent.clientX - offsetX;
            let y = moveEvent.clientY - offsetY;
            if (x < 0) {
                x = 0;
            }
            if (y < 0) {
                y = 0;
            }
            panel.style.left = `${x}px`;
            panel.style.top = `${y}px`;

            x = x > 0 ? Math.floor(x / 10) * 10 : 0;
            y = y > 0 ? Math.floor(y / 10) * 10 : 0;
            updateDropZones(panel, x + 10, y + 10);
        }
    });


    // Zako�czenie przesuwania po zwolnieniu przycisku
    document.addEventListener('mouseup', (moveEvent) => {
        if (isDragging) {
            // grind
            let x = moveEvent.clientX - offsetX;
            x = x > 0 ? Math.floor(x / 10) * 10 : 0;
            let y = moveEvent.clientY - offsetY;
            y = y > 0 ? Math.floor(y / 10) * 10 : 0;
            panel.style.left = `${x}px`;
            panel.style.top = `${y}px`;
        }
        isDragging = false;
        removeDropZones();
    });
}

function updateDropZones(panel, x, y) {
    removeDropZones();

    // Tworzenie nowych obszar�w docelowych
    let panelRect = panel.getBoundingClientRect();
    dropZones = [
        createDropZone(0, y, document.body.clientWidth, 3), // G�rna kraw�d�
        createDropZone(x, 0, 3, window.innerHeight), // Lewa kraw�d�
        createDropZone(x + panelRect.width, 0, 3, window.innerHeight), // Prawa kraw�d�
        createDropZone(0, y + panelRect.height, document.body.clientWidth, 3) // Dolna kraw�d�
    ];
}

function createDropZone(left, top, width, height) {
    let dropZone = document.createElement('div');
    dropZone.classList.add('drop-zone');
    dropZone.style.left = `${left}px`;
    dropZone.style.top = `${top}px`;
    dropZone.style.width = `${width}px`;
    dropZone.style.height = `${height}px`;
    document.body.appendChild(dropZone);
    return dropZone;
}

function removeDropZones() {
    dropZones.forEach(zone => {
        zone.parentNode.removeChild(zone);
    });
    dropZones = [];
}








