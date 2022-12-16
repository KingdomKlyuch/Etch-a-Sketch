window.onload = function() {

const container = document.createElement('gridBox');

for (let i =0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
    const square = document.createElement('gridBox');
    container.appendChild(square);
    }
}

const squares = container.querySelectorAll('gridBox');
squares.forEach(square => {
    square.style.width = '20px';
    square.style.height = '20px';
});

document.body.appendChild(container);

squares.forEach(square => {
    square.style.float = 'left';
  });

};