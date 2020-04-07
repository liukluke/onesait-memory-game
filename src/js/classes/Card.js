class Card {
    constructor(cardId, cardImg) {
        this.id = cardId
        this.img = cardImg
    }

    get createCard() {
        return `<li class="card" id="${this.id}">${this.img}</li>`
    }

}

export default Card
