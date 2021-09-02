const DEFAULT_COLOR = '#ddd';

const container = document.querySelector('#container');

function setupGrid() {
  for (let i = 1; i <= 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = `${i}`;
    container.appendChild(square);
  }
}

setupGrid();

const color = document.querySelectorAll('.square');

color.forEach((e) =>
  e.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'blue';
  })
);

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  const items = document.getElementsByClassName('square');
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#ddd';
  }
});
