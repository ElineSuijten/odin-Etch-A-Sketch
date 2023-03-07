const defaultSize = 16;
const grid = document.querySelector('.grid');
const slider = document.querySelector('#slider');
const clearBtn = document.querySelector('#startover');
let sliderValue = document.querySelector('#sliderValue');

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
    }
}

function onMouseDown(event) {
    event.target.classList.add('gridCellHover');
    grid.addEventListener('mouseover', onMouseOver);
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


slider.addEventListener('input', () => {
    const gridSize = slider.value;
    sliderValue.textContent = gridSize;
    createGrid(gridSize);
})

createGrid(defaultSize);
clearBtn.addEventListener('click', clearGrid)
