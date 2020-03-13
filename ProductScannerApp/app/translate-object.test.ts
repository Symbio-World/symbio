import { translate } from './translate'
import { translateObject } from './translate-object'

jest.mock('./translate')

describe('TranslateObject', () => {
  it('returns translated object', async () => {
    translate.mockImplementationOnce(() => Promise.resolve(['Hello', 'Friend', 'World']))
    const translatedObj = await translateObject({
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

  it('respects skip option', async () => {
    translate.mockImplementationOnce(() => Promise.resolve(['Hello', 'Friend']))
    const translatedObj = await translateObject({
      name: 'Ola',
      description: 'Amigo',
      whatever: 'Mundo',
    }, { skip: ['whatever'] })
    expect(translatedObj).toEqual({
      name: 'Hello',
      description: 'Friend',
      whatever: 'Mundo',
    })
  })
})
