const range = document.querySelector('input');
const dimension = document.querySelectorAll('.dimension');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const para = document.querySelector('p');

window.addEventListener('load', (e) => {
    const initDimension = range.value;
    for (let i = 1; i <= initDimension; i++) {
        const boxMeasure = `${right.offsetWidth / initDimension}px`;
        const r = document.createElement('div');
        for (let i = 1; i <= initDimension; i++) {
            const c = document.createElement('div');
            c.classList.add('inSq');
            c.style.width = boxMeasure;
            c.style.height = boxMeasure;
            r.appendChild(c);
        }
        right.appendChild(r)
    }
});

range.addEventListener('change', () => {
    const initDimension = range.value;
    while (right.lastChild) {
        right.lastChild.remove();
    }
    dimension.forEach((e) => {
        e.textContent = range.value;
    });
    for (let i = 1; i <= initDimension; i++) {
        const boxMeasure = `${right.offsetWidth / initDimension}px`
        const r = document.createElement('div');
        for (let i = 1; i <= initDimension; i++) {
            const c = document.createElement('div');
            c.classList.add('inSq');
            c.style.width = boxMeasure;
            c.style.height = boxMeasure;
            r.appendChild(c);
        }
        right.appendChild(r)
    }
});


