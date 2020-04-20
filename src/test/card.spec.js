import Card from './../js/classes/Card'

describe('define instance', () => {
    test('Card should be defined', () => {
        expect(Card).toBeDefined()
    })

    test('Card should be a function', () => {
        expect(typeof Card).toBe('function')
    })
    
    test('new Card should be an instance of Card', () => {
        expect(new Card).toBeInstanceOf(Card)
    })
})

// test('card structure', () => {
//     const card = new Card()
//     expect(new Card()).toEqual(
//         expect.objectContaining({
//             img: expect.any(String),
//             game: expect.any(Object),
//             createCard: expect.any(String)
//         })
//     )
// })