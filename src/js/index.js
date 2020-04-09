import 'reset-css'
import '../assets/scss/main.scss'
import Game from './classes/Game'

const game = new Game
game.startGame()
document.querySelectorAll('.cards').forEach(card => card.onclick = (e) => game.cardSelected(e.target.id)) 
