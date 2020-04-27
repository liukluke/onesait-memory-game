import Card from './../js/classes/Card'
import logoOnesait from '../../assets/image/onesait-logo.svg'
import Game from './../js/classes/Game'

describe('define instance', () => {
    test('Card should be defined', () => {
        expect(Card).toBeDefined()
    })

    test('Card should be a function', () => {
        expect(typeof Card).toBe('function')
    })

    test('new Card should be an instance of Card', () => {
        expect(new Card()).toBeInstanceOf(Card)
    })
})

test('card structure', () => {
    const card = new Card()
    expect(card).toEqual(
        expect.objectContaining({
            imgFront: expect.any(String),
            game: expect.any(Object),
            imgBack: expect.any(Object),
            createCard: expect.any(Function)
        })
    )

    expect(card.imgBack).toEqual(logoOnesait)
})

describe('createCard', () => {
    let card, game, cardElement
    beforeEach(() => {
        game = new Game()
        card = new Card('imgFront', game, logoOnesait)
        cardElement = card.createCard()
    })

    test('Card generates DOM element and matches', () => {
        expect(cardElement).toMatchSnapshot()
    })

    test('spyOn card createCard', () => {
        const spyOnGenerateCard = jest.spyOn(card, 'createCard')
        card.createCard()
        expect(spyOnGenerateCard).toHaveBeenCalled()
    })
    
})
