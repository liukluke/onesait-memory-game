import 'reset-css'
import '../assets/sass/main.sass'
import Board from './classes/Board'
import Game from './classes/Game'
const board = new Board
const game = new Game
board.createBoard()
// const cardsArray = board.createCards.map(e => `<li class="card" id="${e.id}">${e.id}</li>`)
// // board.createCards().forEach(e => console.log(e.id))
// document.querySelector('.container').innerHTML = `<ul>${cardsArray.join(" ")}</ul>`
// document.querySelectorAll('.card').forEach(card => card.onclick = (e) => Card.select) 
