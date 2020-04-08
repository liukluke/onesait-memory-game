class Game {
    constructor() {
        this.activeGame = true
        this.firstId = ''
        this.counter = 0
        this.attemps = 3
    }
    checkCard(secondId) {
        this.activeGame = false
        const firstImg = document.getElementById(`img-${this.firstId}`).textContent
        const secondImg = document.getElementById(`img-${secondId}`).textContent
        if (firstImg === secondImg) {
            this.firstId = ''
            this.counter += 1
            document.getElementById('score').innerHTML = this.counter
            this.activeGame = true
        } else {
            setTimeout(() => {
                [this.firstId, secondId].forEach((id) => {
                    document.getElementById(`img-${id}`).style.display = 'none'
                    document.getElementById(`default-${id}`).style.display =
                        'block'
                })
                this.firstId = ''
                this.attemps -= 1
                document.getElementById('attemps').innerHTML = this.attemps
                this.activeGame = true
            }, 1000)
        }
    }
    cardSelected(defaultId) {
        if (this.activeGame) {
            const id = defaultId.split('-')[1]
            document.getElementById(defaultId).style.display = 'none'
            document.getElementById(`img-${id}`).style.display = 'block'
            this.firstId === '' ? (this.firstId = id) : this.checkCard(id)
        }
    }
}

export default Game
