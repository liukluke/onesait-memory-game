import Card from './Card'
import Carlos from '../../assets/image/carlos.jpeg'
import Antonio from '../../assets/image/antonio.jpeg'
import Rocio from '../../assets/image/rocio.jpeg'
import Juan from '../../assets/image/juan.jpeg'
import Beltran from '../../assets/image/beltran.jpeg'
import Marcos from '../../assets/image/marcos.jpeg'

class Board {
    get randomImageArray() {
        let arr = [Carlos, Antonio, Rocio, Juan, Beltran, Marcos].reduce((acc, cv) => acc.concat([cv, cv]), [])
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
            card = new Card(randomImage[i])
            return card.createCard
        })
        document.querySelector('.memory-board').innerHTML = `<ul class="memory-board__grid">${cardsArray.join('')}</ul>`
    }
}

export default Board
