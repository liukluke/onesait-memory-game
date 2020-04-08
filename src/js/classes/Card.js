class Card {
    constructor(cardId, cardImg) {
        this.id = cardId
        this.defaultImg = 'back'
        this.img = cardImg
    }

    get createCard() {
        return `
            <li class="card">
                <div id="default-${this.id}">${this.defaultImg}</div>
                <div id="img-${this.id}">${this.img}</div>
            </li>
            `
    }
}

export default Card
