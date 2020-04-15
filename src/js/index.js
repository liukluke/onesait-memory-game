import 'reset-css'
import '../assets/scss/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import Game from './classes/Game'

window.onload = () => {
    init()
}

const init = () => {
    const game = new Game()
    game.startGame(['¿Estás listo?'])
}
