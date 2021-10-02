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
    let color = '';
    function randomCol (){
        let num = Math.floor(Math.random() * (5 + 1 - 1) + 1)
        return num;
    }

    let exampleCol = randomCol();

    if(exampleCol == 1) {
        color = 'red'
    }else if(exampleCol == 2) {
        color = 'lime'
    }else if (exampleCol == 3) {
        color = 'fuchsia'
    }else if (exampleCol == 4) {
        color = 'yellow'
    }else if (exampleCol == 5) {
        color = 'aqua'
    }
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}`;
}


function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

