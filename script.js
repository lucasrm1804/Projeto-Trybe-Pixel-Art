
// function creatPixel() {
//   let board = document.getElementById('pixel-board');
//   let boardSize = 5;
  
//   for (let index = 0; boardSize < 0; index += 1){
//     const line = document.createElement('div');
//     line.className = 'line';
//     board.appendChild(line);
    
//     for (let index = 0; boardSize < 0; index += 1) {
//       const pixel = document.createElement('div');
//       pixel.className = 'pixel';
//       line.appendChild(pixel);
//     }
//   }
// }

// creatPixel();
//requisito 7 - Função para remover e add a class selected
//primeiro capturo todos os elementos da paleta
const cores = document.querySelectorAll(".color")

function selected(){
  // aqui eu add um excutador de click para remover o select e add o selected conforme o click
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click',function () {
      // removo a class
      for (let index = 0; index < cores.length; index += 1){
      cores[index].classList.remove('selected') 
    }
    // add a classe
    cores[index].classList.add('selected')
   })
  }
}

selected();