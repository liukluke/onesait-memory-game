export default class Info {
    constructor() {
        this.sectionElement = document.querySelector('.memory-board')
        this.footerElement = document.querySelector('.footer')
        this.star = {}
        this.heart = {}
    }
    message(text) {
        this.cleanSection()

        const messageBox = document.createElement('div')
        messageBox.classList.add('memory-board__message')

        const messageTitle = document.createElement('h2')
        messageTitle.innerHTML = text[0]
        messageBox.appendChild(messageTitle)

        if (text.length > 1) {
            const messageParagraph = document.createElement('p')
            messageParagraph.innerHTML = text[1]
            messageBox.appendChild(messageParagraph)
        }

        const startButton = document.createElement('button')
        startButton.innerHTML = 'Empieza'
        messageBox.appendChild(startButton)

        this.sectionElement.appendChild(messageBox)

        return startButton
    }

    createScores() {
        this.cleanFooter()

        const ulScores = document.createElement('ul')

        new Array('star', 'heart').forEach((el) => {
            const liScores = document.createElement('li')

            const pScores = document.createElement('p')

            const iconScores = document.createElement('i')
            iconScores.classList.add(
                'fa',
                `fa-${el}`,
                `color-${el === 'star' ? 'secondary' : 'danger'}`,
                'footer--margin-right'
            )

            this[el] = document.createElement('span')
            this[el].innerHTML = el === 'star' ? 0 : 3

            ulScores.appendChild(liScores)
            liScores.appendChild(pScores)
            pScores.appendChild(iconScores)
            pScores.appendChild(this[el])
        })

        this.footerElement.appendChild(ulScores)
    }

    updateScores(type, value) {
        type === 'heart' && value < 0 ? this[type].classList.add('color-danger'): this[type].innerHTML = value
    }

    cleanSection () {
        this.sectionElement.innerHTML = ''
    }

    cleanFooter() {
        this.footerElement.innerHTML = ''
    }
}
