createButtons()

const projectsEl = document.querySelector('#projects')

const projectsWindowEl = document.querySelector('#projectsWindow')

const closeButtonEl = document.querySelector('#closeButton')

const resizeButtonEl = document.querySelector('#resizeButton')

projectsEl.addEventListener('click', openWindow)

closeButtonEl.addEventListener('click', closeWindow)

resizeButtonEl.addEventListener('click', resizeWindow)



function closeWindow(evt){
    let currentWindow = document.querySelector(`#${evt.path[2].id}`)
    currentWindow.style.visibility = 'hidden'
}

function resizeWindow(evt){
    let currentWindow = document.querySelector(`#${evt.path[2].id}`)
    currentWindow.style.top = 0
    currentWindow.style.left = 0
    currentWindow.className === 'fullSize' ? currentWindow.className = 'halfSize' : currentWindow.className = 'fullSize' 
}

function openWindow(evt){
    projectsWindowEl.style.visibility === 'hidden' ?  projectsWindowEl.style.visibility = 'visible' : projectsWindowEl.style.visibility = 'hidden'   
}

dragElement(projectsWindowEl);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.querySelector(`#${elmnt.id}header`).onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function createButtons(){
    let i = 0 
    let colors = ['red', 'yellow']
    const headerEl = document.querySelector('#projectsWindowheader')
    while(i<2){
        let newButton = document.createElement('button')
        newButton.style.backgroundColor = colors[i]
        newButton.setAttribute('class', 'headerButton')
        i === 0 ? newButton.setAttribute('id', 'closeButton') : newButton.setAttribute('id', 'resizeButton') 
        headerEl.appendChild(newButton)
        i++
    }
}

