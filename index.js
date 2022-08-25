const projectsEl = document.querySelector('#projects')

const projectsWindowEl = document.querySelector('#projectsWindow')

const resumeEl = document.querySelector('#resume')

const resumeWindowEl = document.querySelector('#resumeWindow')

const closeButtonEls = document.querySelectorAll('.closeButton')

const resizeButtonEls = document.querySelectorAll('.resizeButton')

const windowEls = document.querySelectorAll("[id$=Window]")

projectsEl.addEventListener('click', openProjectWindow)

resumeEl.addEventListener('click', openResumeWindow)

windowEls.forEach(x => {
    x.addEventListener('click', setIndex)
})

closeButtonEls.forEach(x => {
    x.addEventListener('click', closeWindow)
})

resizeButtonEls.forEach(x => {
    x.addEventListener('click', resizeWindow)
})

dragElement(projectsWindowEl);

dragElement(resumeWindowEl)

function setIndex(evt){
    let currentWindow
    if(evt.target.offsetParent.id === ''){
        currentWindow = document.querySelector(`#${evt.target.id}`)
    }else {
        currentWindow = document.querySelector(`#${evt.target.offsetParent.id}`)
    }
    windowEls.forEach(x => {
        if(x.id !== currentWindow.id){
            x.style.zIndex = 6
        }
    })
    currentWindow.style.zIndex = 7
}

function closeWindow(evt){
    let currentWindow = document.querySelector(`#${evt.target.offsetParent.id}`)
    currentWindow.style.visibility = 'hidden'
}

function resizeWindow(evt){
    const currentWindow = document.querySelector(`#${evt.target.offsetParent.id}`) 
    currentWindow.style.top = 0
    currentWindow.style.left = 0
    currentWindow.className === 'fullSize' ? currentWindow.className = 'halfSize' : currentWindow.className = 'fullSize' 
}

function openResumeWindow(evt){
    resumeWindowEl.style.visibility === 'hidden' ?  resumeWindowEl.style.visibility = 'visible' : resumeWindowEl.style.visibility = 'hidden'   
}

function openProjectWindow(evt){
    projectsWindowEl.style.visibility === 'hidden' ?  projectsWindowEl.style.visibility = 'visible' : projectsWindowEl.style.visibility = 'hidden'   
}

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

