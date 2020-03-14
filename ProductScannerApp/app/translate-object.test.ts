import { createTranslateObject } from './translate-object'

describe('TranslateObject', () => {
  it('returns translated object', async () => {
    const translate = jest.fn<any, any>(() =>
      Promise.resolve(['Hello', 'Friend', 'World']),
    )
    const translatedObj = await createTranslateObject({ translate })({
      name: 'Ola',
      description: 'Amigo',
      whatever: 'Mundo',
    })
    expect(translatedObj).toEqual({
      name: 'Hello',
      description: 'Friend',
      whatever: 'World',
    })
  })
})
