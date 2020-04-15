import Card from './Card'
import Carlos from '../../assets/image/carlos.jpeg'
import Antonio from '../../assets/image/antonio.jpeg'
import Rocio from '../../assets/image/rocio.jpeg'
import Juan from '../../assets/image/juan.jpeg'
import Beltran from '../../assets/image/beltran.jpeg'
import Marcos from '../../assets/image/marcos.jpeg'

export default class Board {
    constructor() {
        this.domElement = document.querySelector('.memory-board')
    }
    get randomImageArray() {
        let arr = [Carlos, Antonio, Rocio, Juan, Beltran, Marcos].reduce(
            (acc, cv) => acc.concat([cv, cv]),
            []
        )
        new Array(arr.length - 1).fill().forEach((e, i) => {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        })
        return arr
    }

    create(game) {
        this.clean()

        const boardGrid = document.createElement('ul')
        boardGrid.classList.add('memory-board__grid')
        this.domElement.appendChild(boardGrid)

        const randomImage = this.randomImageArray

        new Array(12).fill().forEach((card, i) => {
            card = new Card(randomImage[i], game)
            boardGrid.appendChild(card.createCard)
        })
    }

    clean() {
        this.domElement.innerHTML = ''
    }
}
