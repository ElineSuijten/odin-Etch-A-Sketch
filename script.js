const defaultSize = 16;
const grid = document.querySelector('.grid');
const slider = document.querySelector('#slider');
let sliderValue = document.querySelector('#sliderValue');

sliderValue.textContent = defaultSize;


function createGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
   
    const cellSize = 700/size;
    
    grid.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;

    grid.style.gridTemplateRows = `repeat(${size}, ${cellSize}px)`;

    for (let i = 0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('gridCell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.appendChild(cell);
        cell.addEventListener('mousedown', () => {
            cell.classList.add('gridCellHover');
        });
    }
}

slider.addEventListener('input', () => {
    const gridSize = slider.value;
    sliderValue.textContent = gridSize;
    createGrid(gridSize);
})


createGrid(defaultSize);
