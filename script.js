let container = document.getElementById("container");

function createDiv(n) {
  for(let i = 0; i < n; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'rowDiv';
      container.appendChild(rowDiv);
      for(let j = 0; j < n; j++) {
          const columnDiv = document.createElement('div');
          columnDiv.className = 'columnDiv';
          rowDiv.appendChild(columnDiv);
      }
  }
}
createDiv(16)

function gridSize() {
    let size = prompt('Please enter number below 100');
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    if (size <= 100) {
        createDiv(size);
    } else {
        alert("Invalid number")
    }
}
container.addEventListener('mouseenter', (event) => {  //Event delegation method
    if(event.target.className === 'columnDiv') {
        event.target.style.background = 'black';
    }
}, true) //Enable during capturing phase

function black() {
    container.addEventListener('mouseenter', (event) => {  //Event delegation method
        if(event.target.className === 'columnDiv') {
            event.target.style.background = 'black';
        }
    }, true) //Enable during capturing phase
}

function rainbow() {
    container.addEventListener('mouseenter', (event) => {  //Event delegation method
        if(event.target.className === 'columnDiv') {
            let letters = "0123456789ABCDEF";
            let colour = "#";
            for (let i = 0; i < 6; i++) {
                colour += letters[Math.floor(Math.random() * 16)];
            }
            event.target.style.background = colour;
        }
    }, true) //Enable during capturing phase
}