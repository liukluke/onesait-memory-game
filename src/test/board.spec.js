import Board from './../js/classes/Board'

describe('define instance', () => {
    test('Board should be defined', () => {
        expect(Board).toBeDefined()
    })

    test('Board should be a function', () => {
        expect(typeof Board).toBe('function')
    })

    test('new Board should be an instance of Board', () => {
        expect(new Board()).toBeInstanceOf(Board)
    })
})

describe('Board structure', () => {
    
})
