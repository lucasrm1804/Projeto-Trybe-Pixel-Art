
function creatPixel() {
  let board = document.getElementById('pixel-board');
  let boardSize = 5;
  
  for (let index = 0; boardSize < 0; index += 1){
    const line = document.createElement('div');
    line.className = 'line';
    board.appendChild(line);
    
    for (let index = 0; boardSize < 0; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

creatPixel();
