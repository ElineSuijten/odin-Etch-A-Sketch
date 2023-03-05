const defaultSize = 16;
const grid = document.querySelector('.grid');

function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('gridCell');
        grid.appendChild(cell);
        cell.addEventListener('mouseover', function mouseOver() {
            cell.classList.add('gridCellHover');
        });
    }
}




createGrid(defaultSize);
