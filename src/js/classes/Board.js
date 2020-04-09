import Card from './Card'

class Board {
    get randomImageArray() {
        let arr = ['a', 'b', 'c', 'd', 'e', 'f'].reduce((acc, cv) => acc.concat([cv, cv]), [])
        new Array(arr.length - 1).fill().forEach((e, i) => {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        })
        return arr
    }

    createBoard() {
        const randomImage = this.randomImageArray
        const cardsArray = new Array(12).fill().map((card, i) => {
            card = new Card(i, randomImage[i])
            return card.createCard
        })
        document.querySelector('.memory-board').innerHTML = `<ul class="memory-board__grid">${cardsArray.join('')}</ul>`
    }
}

export default Board
