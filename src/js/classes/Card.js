class Card {
    constructor(cardId, cardImg) {
        this.id = cardId
        this.defaultImg = 'back'
        this.img = cardImg
    }

    get createCard() {
        return `
            <li class="cards">
                <div class="cards__front">${this.img}</div>
                <div class="cards__back">${this.defaultImg}</div>
            </li>
            `
    }
}

export default Card
