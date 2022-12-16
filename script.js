window.onload = function() {
  const container = document.createElement('div');
  container.id = 'grid-container';
  document.body.appendChild(container);

  function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
        }
    }

    const squares = container.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.style.width = `${960 / size}px`;
        square.style.height = `${960 / size}px`;
    });

    squares.forEach(square => {
      square.addEventListener('mouseenter', function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      });
    });
    
  }

  function promptGridSize() {
      let size = prompt("Enter the number of squares per side for the new grid (maximum 100):");

      if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size);
      } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
      }
  };

  createGrid(16);

  const button = document.createElement('button');
  button.textContent = 'Redefine the stars with KingdomKlyuch';
  document.body.appendChild(button);
  

  button.addEventListener('click', promptGridSize);
  button.addEventListener('mouseenter', function() {
    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      button.style.color = `rgb(${r}, ${g}, ${b})`;
    }, 100);
  
    button.addEventListener('mouseleave', function() {
      clearInterval(interval);
    });
  });
  
};
