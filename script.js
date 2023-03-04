const grid = document.querySelector('.grid');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.classList.add('gridCell');
        grid.appendChild(cell);
        cell.addEventListener('mouseover', function mouseOver() {
            cell.classList.add('gridCellHover');
        });
    }
}




createGrid();
