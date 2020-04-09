import Board from './Board'

class Game {
    constructor() {
        this.activeGame = true
        this.firstCard = ''
        this.counter = 0
        this.attemps = 3
    }
    checkCard(secondCard) {
        this.activeGame = false
        const firstImg = this.firstCard.firstElementChild.textContent
        const secondImg = secondCard.firstElementChild.textContent
        if (firstImg === secondImg) {
            this.firstCard = ''
            this.counter += 1
            document.getElementById('score').innerHTML = this.counter
            this.activeGame = true
        } else {
            setTimeout(() => {
                [this.firstCard, secondCard].forEach(card => {
                    card.classList.remove('flip')
                })
                this.firstCard = ''
                this.attemps -= 1
                document.getElementById('attemps').innerHTML = this.attemps
                this.activeGame = true
            }, 1000)
        }
    }
    cardSelected(card) {
        if (this.activeGame) {
            card.classList.add('flip')
            this.firstCard === '' ? (this.firstCard = card) : this.checkCard(card)
        }
    }
    startGame () {
        const board = new Board
        board.createBoard()
    }
}

export default Game
