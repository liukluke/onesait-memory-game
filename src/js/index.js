import 'reset-css'
import '../assets/sass/main.sass'
import Game from './classes/Game'

const game = new Game
game.startGame()
document.querySelectorAll('.cards').forEach(card => card.onclick = (e) => game.cardSelected(e.target.id)) 
