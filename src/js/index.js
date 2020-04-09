import 'reset-css'
import '../assets/scss/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import Game from './classes/Game'

const game = new Game
game.startGame()
document.querySelectorAll('.cards').forEach(card => card.onclick = (e) => game.cardSelected(e.target.parentElement))
