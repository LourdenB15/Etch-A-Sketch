const input = document.querySelector('.range');
const textDimension = document.querySelectorAll('.text-dimension');
const board = document.querySelector('.board');
const boardWidth = board.offsetWidth - 10;
const grid = document.querySelector('.grid');
const pen = document.querySelector('#pen');
const random = document.querySelector('#random');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
let color = '';
let rainbow = false;

window.addEventListener('load', boxGenerator)
input.addEventListener('change', boxGenerator)


function boxGenerator() {
    textDimension.forEach(e => {
        e.textContent = input.value;
    });
    board.innerHTML = '';
    for (let column = 1; column <= input.value; column++) {
        const Csquare = document.createElement('div');
        for (let row = 1; row <= input.value; row++) {
            const Rsquare = document.createElement('div');
            Rsquare.classList.add('squares');
            Rsquare.addEventListener('mouseover', backgroundChange)
            Rsquare.style.cssText = `
                width: ${boardWidth / input.value}px;
                height: ${boardWidth / input.value}px;
                box-sizing: border-box;   
            `;
            if (grid.classList.contains('active')) {
                Rsquare.classList.add('toggle-grid')
            }
            Csquare.appendChild(Rsquare);
        }
        board.appendChild(Csquare);
    }
}
grid.addEventListener('click', () => {
    grid.classList.toggle('active');
    const squares = document.querySelectorAll('.squares')
    squares.forEach(e => {
        e.classList.toggle('toggle-grid');
    })
});


pen.addEventListener('click', () => {
    marker()
    pen.classList.toggle('active');
    rainbow = false;
    color = 'black';
})
random.addEventListener('click', () => {
    marker()
    random.classList.toggle('active');
    color = '';
    rainbow = true;
})

eraser.addEventListener('click', () => {
    marker()
    eraser.classList.toggle('active');
    color = 'white';
    rainbow = false;
})
clear.addEventListener('click', () => {
    const squares = document.querySelectorAll('.squares')
    for (let square of squares) {
        square.style.backgroundColor = 'white'
    }
})


function backgroundChange() {
    if (mouseDown) {
        if (rainbow) {
            this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}
let mouseDown = 0;

document.body.addEventListener('mousedown', (e) => {
    if (e.which === 1) {
        mouseDown = 1;
        if (e.target.classList.contains('squares')) {
            if (rainbow) {
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
            } else {
                e.target.style.backgroundColor = color;
            }
        }
    }
})
document.body.addEventListener('mouseup', (e) => {
    if (e.which === 1) {
        mouseDown = 0;
    }
})



function marker() {
    const markers = document.querySelectorAll('.marker');
    for (let marker of markers) {
        if (marker.classList.contains('active')) {
            marker.classList.remove('active');
        }
    }
}