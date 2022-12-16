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

squares.forEach(square => {
square.addEventListener('mouseenter', function() {

square.style.backgroundColor = 'cyan';
});
});


document.body.appendChild(container);

squares.forEach(square => {
square.style.float = 'left';
});

createGrid(16);
};

function createGrid(size) {

  let container = document.getElementById("grid-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let squareSize = 960 / size;

  for (let i = 0; i < size; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = squareSize + "px";
      square.style.height = squareSize + "px";
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function promptGridSize() {
    let size = prompt("Enter the number of squares per side for the new grid (maximum 100):");
      
    if (!isNaN(size) && size > 0 && size <= 100) {
      createGrid(size);
    } else {
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
};



