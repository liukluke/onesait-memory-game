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
        if (
            this.firstCard.firstElementChild.src ===
            secondCard.firstElementChild.src
        ) {
            this.firstCard = undefined
            this.counter += 1
            this.printScore('score', this.counter)
            if (this.counter >= 6) {
                setTimeout(() => this.gameMessage(['Has ganado.', '¡Puedes seguir trabajando despues del covid!']), 1000)
            } else this.activeGame = true
        } else {
            setTimeout(() => {
                ;[this.firstCard, secondCard].forEach((card) =>
                    card.classList.remove('flip')
                )
                this.firstCard = undefined
                this.attemps -= 1
                if (this.attemps < 0) {
                    this.gameMessage(['Has perdido.', '¡Te van a hacer un ERTE!'])
                    document.getElementById('attemps').classList.add('color-danger')
                } else {
                    this.printScore('attemps', this.attemps)
                    this.activeGame = true
                }
            }, 1000)
        }
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
        // const board = new Board()
        this.board.create()
        // document
        //     .querySelectorAll('.cards')
        //     .forEach(
        //         (card) =>
        //             (card.onclick = (e) =>
        //                 this.cardSelected(e.target.parentElement))
        //     )
        // this.counter = 0
        // this.attemps = 3
        // document.getElementById('attemps').classList.remove('color-danger')
        // this.printScore('score', this.counter)
        // this.printScore('attemps', this.attemps)
        // this.activeGame = true
    }
    printScore(element, value) {
        document.getElementById(element).innerHTML = value
    }
    // gameMessage(message) {
    //     document.querySelector(
    //         '.memory-board'
    //     ).innerHTML = `<div class="memory-board__message">${message.map(mess => `<h2>${mess}</h2>`).join('')}<button class="start-game">Empieza</button></div>`
    //     document.querySelector('.start-game').onclick = () => this.createBoard()
    // }
    startGame(text) {
        const startButton = this.info.message(text)
        startButton.onclick = () => this.createBoard()
        this.counter = 0
        this.attemps = 3
        document.getElementById('attemps').classList.remove('color-danger')
        this.printScore('score', this.counter)
        this.printScore('attemps', this.attemps)
        this.activeGame = true
    }
}