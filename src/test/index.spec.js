import Game from '../js/classes/Game'

test('game instance', () => {
    expect(new Game()).toBeInstanceOf(Game)
})