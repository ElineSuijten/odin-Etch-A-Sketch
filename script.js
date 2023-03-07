const defaultSize = 16;
const grid = document.querySelector('.grid');
const slider = document.querySelector('#slider');
const clearBtn = document.querySelector('#clearGrid');
const eraserBtn = document.querySelector('#eraser');
let sliderValue = document.querySelector('#sliderValue');
let erase = false;

sliderValue.textContent = defaultSize;

function createGrid(size) {
    grid.innerHTML = "";
   
    const cellSize = 700/size;
    
    grid.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
    grid.style.gridTemplateRows = `repeat(${size}, ${cellSize}px)`;

    for (let i = 0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('gridCell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.appendChild(cell);
        cell.addEventListener('mousedown', onMouseDown);
        cell.addEventListener('mouseover', onMouseOver)
    }
}


function mouseDownErase(event) {
    if (erase){
        event.target.classList.remove('gridCellHover');
    }
}

function mouseOverErase(event) {
    if (event.buttons === 1 && erase) {
        event.target.classList.remove('gridCellHover');
    }
}

function onMouseDown(event) {
    event.target.classList.add('gridCellHover');
}

function onMouseOver(event) {
    if (event.buttons === 1) {
      event.target.classList.add('gridCellHover');
    }
  }

function clearGrid(){
    const cells = document.querySelectorAll('.gridCellHover');
    cells.forEach(cell => {
        cell.classList.remove('gridCellHover');
    })
}

function changeButtonColor() {
    document.getElementById('eraser').classList.toggle("eraser2");
}


slider.addEventListener('input', () => {
    const gridSize = slider.value;
    sliderValue.textContent = gridSize;
    createGrid(gridSize);
})

createGrid(defaultSize);
clearBtn.addEventListener('click', clearGrid)
eraserBtn.addEventListener('click', () => {
    erase = !erase;
    changeButtonColor();
})
grid.addEventListener('mousedown', mouseDownErase)
grid.addEventListener('mouseover', mouseOverErase)

