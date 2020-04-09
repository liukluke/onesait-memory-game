import Board from './Board'

class Game {
    constructor() {
        this.activeGame = true
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
            this.attemps < 0 ? this.gameMessage('You Win!') : this.activeGame = true
        } else {
            setTimeout(() => {
                ;[this.firstCard, secondCard].forEach((card) =>
                    card.classList.remove('flip')
                )
                this.firstCard = undefined
                this.attemps -= 1
                this.printScore('attemps', this.attemps)
                this.attemps < 0 ? this.gameMessage('You Lose!') : this.activeGame = true
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
        const board = new Board()
        board.createBoard()
        document
            .querySelectorAll('.cards')
            .forEach(
                (card) =>
                    (card.onclick = (e) =>
                        this.cardSelected(e.target.parentElement))
            )
        this.counter = 0
        this.attemps = 3
        this.printScore('score', this.counter)
        this.printScore('attemps', this.attemps)    
    }
    printScore (element, value) {
        document.getElementById(element).innerHTML = value
    }
    gameMessage(message) {
        document.querySelector(
            '.memory-board'
        ).innerHTML = `<div class="memory-board__message"><h2>${message}</h2><button class="start-game">start game</button></div>`
        document.querySelector('.start-game').onclick = () => this.createBoard()
    }
    startGame() {
        this.gameMessage('Are you ready?')
    }
}

export default Game
