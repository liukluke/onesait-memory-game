export default class Info {
    constructor() {
        this.sectionElement = document.querySelector('.memory-board')
        this.footerElement = document.querySelector('.footer')
        this.star = {}
        this.heart = {}
    }
    message(text) {
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

    createScores () {
        const ulScores = document.createElement('ul')

        new Array('star', 'secondary'], ['heart', 'danger']).forEach(el => {

            const liScores = document.createElement('li')

            const pScores = document.createElement('p')

            const iconScores = document.createElement('i')
            iconScores.classList.add(`fas fa-${el[0]} color-${el[1]} footer--margin-right`)

            this[el] = document.createElement('span')
            this[el].innerHTML = el === 'start' ? 0 : 3   

            ulScores.appendChild(liScores)
            liScores.appendChild(pScores)
            pScores.appendChild(iconScores)
            pScores.appendChild(this[el[0]])
        })

        this.footerElement()
    }

}
