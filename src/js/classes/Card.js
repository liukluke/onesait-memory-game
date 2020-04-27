import logoOnesait from '../../assets/image/onesait-logo.svg'

export default class Card {
    constructor(cardImg = '', game = {}, logo = logoOnesait) {
        this.imgFront = cardImg
        this.game = game
        this.imgBack = logo
    }

    createCard() {
        const liCard = document.createElement('li')
        liCard.classList.add('cards')

        const frontCard = document.createElement('img')
        frontCard.classList.add('cards__front')
        frontCard.src = this.imgFront

        const backCard = document.createElement('img')
        backCard.classList.add('cards__back')
        backCard.src = this.imgBack

        new Array(frontCard, backCard).forEach((e) => liCard.appendChild(e))

        liCard.onclick = (e) => this.game.cardSelected(e.target.parentElement)

        return liCard
    }
}
