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

const cores = document.querySelectorAll('.color');

function selected() {
  // aqui eu add um excutador de click para remover o select e add o selected conforme o click
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', function () {
      // removo a class
      for (let index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove('selected');
      }
      // add a classe
      cores[index].classList.add('selected')
    });
  }
}

selected();

// requisito 8 - função para pintar os pixels
//primeiro capturo todos os elementos do board

const black = document.querySelector('#black')
window.onload = function () {
  

  const quadradinho = document.querySelectorAll('.pixel');
  let corSelecionada = document.querySelector('.selected');
  console.log(corSelecionada)
  const teste = window.getComputedStyle(corSelecionada).backgroundColor;
  console.log(teste)


    // criar uma função para acessar os pixels e colorir os mesmos.

    function pintarPixel() {
      for (let i = 0; i < quadradinho.length; i++) {
        
        quadradinho[i].addEventListener('click', function (event) {
          event.target.style.backgroundColor = teste
        });
        
      }
    }

  pintarPixel()
  }

black.addEventListener('click', function () {
const quadradinho = document.querySelectorAll('.pixel');
let corSelecionada = document.querySelector('.selected');
console.log(corSelecionada)
const teste = window.getComputedStyle(corSelecionada).backgroundColor;
console.log(teste)


  // criar uma função para acessar os pixels e colorir os mesmos.

  function pintarPixel() {
    for (let i = 0; i < quadradinho.length; i++) {
      
      quadradinho[i].addEventListener('click', function (event) {
        event.target.style.backgroundColor = teste
      });
      
    }
  }

pintarPixel()
})

const purple = document.querySelector('#purple')
purple.addEventListener('click', function () {
const quadradinho = document.querySelectorAll('.pixel');
let corSelecionada = document.querySelector('.selected');
console.log(corSelecionada)
const teste = window.getComputedStyle(corSelecionada).backgroundColor;
console.log(teste)


  // criar uma função para acessar os pixels e colorir os mesmos.

  function pintarPixel() {
    for (let i = 0; i < quadradinho.length; i++) {
      
      quadradinho[i].addEventListener('click', function (event) {
        event.target.style.backgroundColor = teste
      });
      
    }
  }

pintarPixel()
})

const yellow = document.querySelector('#yellow')
yellow.addEventListener('click', function () {
const quadradinho = document.querySelectorAll('.pixel');
let corSelecionada = document.querySelector('.selected');
console.log(corSelecionada)
const teste = window.getComputedStyle(corSelecionada).backgroundColor;
console.log(teste)


  // criar uma função para acessar os pixels e colorir os mesmos.

  function pintarPixel() {
    for (let i = 0; i < quadradinho.length; i++) {
      
      quadradinho[i].addEventListener('click', function (event) {
        event.target.style.backgroundColor = teste
      });
      
    }
  }

pintarPixel()
})

const blue = document.querySelector('#blue')
blue.addEventListener('click', function () {
const quadradinho = document.querySelectorAll('.pixel');
let corSelecionada = document.querySelector('.selected');
console.log(corSelecionada)
const teste = window.getComputedStyle(corSelecionada).backgroundColor;
console.log(teste)


  // criar uma função para acessar os pixels e colorir os mesmos.

  function pintarPixel() {
    for (let i = 0; i < quadradinho.length; i++) {
      
      quadradinho[i].addEventListener('click', function (event) {
        event.target.style.backgroundColor = teste
      });
      
    }
  }

pintarPixel()
})

