import Board from './Board'
import Info from './Info'

export default class Game {
    constructor() {
        this.info = new Info()
        this.board = new Board()
        this.firstCard = undefined
    }
    
    checkCard(secondCard) {
        this.activeGame = false
        this.firstCard.firstElementChild.src === secondCard.firstElementChild.src ? this.matchMethod() : this.noMatchMethod(secondCard)
    }

    matchMethod () {
        this.firstCard = undefined
        this.counter += 1
        if (this.counter >= 6) {
            setTimeout(
                () =>
                    this.startGame([
                        'Has ganado.',
                        '¡Puedes seguir trabajando despues del covid!'
                    ]),
                1000
            )
        } else this.activeGame = true
    }

    noMatchMethod(secondCard) {
        setTimeout(() => {
            new Array(this.firstCard, secondCard).forEach((card) =>
                card.classList.remove('flip')
            )
            this.firstCard = undefined
            this.attemps -= 1
            this.info.updateScores('heart', this.attemps)
            this.attemps < 0 ? this.startGame(['Has perdido.', '¡Te van a hacer un ERTE!']) : this.activeGame = true
        }, 1000)
    }

    cardSelected(card) {
        if (this.activeGame) {
            card.classList.add('flip')
            this.firstCard === undefined
                ? (this.firstCard = card)
                : this.checkCard(card)
        }
    }

    createBoard() {
        this.board.create(this)
        this.info.createScores()
        this.counter = 0
        this.attemps = 3
    }

    startGame(text) {
        const startButton = this.info.message(text)
        startButton.onclick = () => this.createBoard()
        this.activeGame = true
    }
}
