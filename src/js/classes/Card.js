class Card {
    constructor(cardId, cardImg) {
        this.id = cardId
        this.defaultImg = 'back'
        this.img = cardImg
    }

    get createCard() {
        return `
            <li class="cards" id="card-${this.id}">
                <div id="default-${this.id}">${this.defaultImg}</div>
                <div id="img-${this.id}">${this.img}</div>
            </li>
            `
    }
}

export default Card
