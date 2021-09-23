const board = document.querySelector('#board');

let squareNumber = 500;


for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.appendChild(square);
}

function setColor(element) {
    const color = randomCol;
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}`;
}


function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function randomCol() {
    return Math.floor(Math.random() * (6 - 1) - 1)
}

for(let i = 0; i < 500; i++){
    let exampleCol = randomCol()
}

if(exampleCol == 1) {
    exampleCol = '#00ffff'
}else if(exampleCol == 2) {
    exampleCol = '#ff0000'
}else if (exampleCol == 3) {
    exampleCol = '#ffff00'
}else if (exampleCol == 4) {
    exampleCol = '#008000'
}else if (exampleCol == 5) {
    exampleCol = '#800080'
}