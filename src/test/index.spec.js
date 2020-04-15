import Game from '../js/classes/Game'
import { init } from '../js/index'

describe('game', () => {
    test('Game should be defined', () => {
        expect(Game).toBeDefined()
    })

    test('Game should be a function', () => {
        expect(typeof Game).toBe('function')
    })

    test('new Game should be an instance of Game', () => {
        expect(new Game()).toBeInstanceOf(Game)
    })
})

describe('init', () => {
    test('init should be defined', () => {
        expect(init).toBeDefined()
    })

    test('init should be a function', () => {
        expect(typeof init).toBe('function')
    })
})
