import Card from './../js/classes/Card'

test('new card', () => {
    expect(new Card).toBeInstanceOf(Card)
})

test('card structure', () => {
    expect(new Card()).toEqual(
        expect.objectContaining({
            img: expect.any(String),
            createCard: expect.any(String)
        })
    )
})