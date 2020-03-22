import { createTranslateObject } from './translate-object'

describe('TranslateObject', () => {
  it('returns translated object', async () => {
    const translate = jest.fn(() =>
      Promise.resolve(['ingredients', 's', 'q', 'f', 'c', 'origin']),
    )
    const translatedObj = await createTranslateObject({ translate })(({
      ingredients: 'sealiha 55%,vesi',
      allergens: [
        's', 'q'
      ],
      nutrients: [
        'f', 'c'
      ],
      origin: 'Mundo',
    } as any))
    expect(translatedObj).toEqual({
      ingredients: 'ingredients',
      allergens: [
        's', 'q'
      ],
      nutrients: [
        'f', 'c'
      ],
      origin: 'origin',
    })
  })
})
