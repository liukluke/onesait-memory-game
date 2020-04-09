import backImage from '../../assets/image/onesait-logo.svg'

class Card {
    constructor(cardImg) {
        this.img = cardImg
    }

    get createCard() {
        return `
            <li class="cards">
                <img class="cards__front" src="${this.img}" />
                <img class="cards__back" src="${backImage}" />
            </li>
            `
    }
}

export default Card
