import { translator } from './translator'

import {
  SEPARATOR,
  translateObject,
  TranslateObjectError
} from './translate-object'

jest.mock('./translator')

describe('TranslateObject', () => {
  it('returns translated object', async () => {
    translator.translate.mockImplementationOnce(() => Promise.resolve(`Hello${SEPARATOR}Friend${SEPARATOR}World`))
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
    translator.translate.mockImplementationOnce(() => Promise.resolve(`Hello${SEPARATOR}Friend${SEPARATOR}World`))
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

  it('errors with api error when translations fails', async () => {
    translator.translate.mockImplementationOnce(() => Promise.reject(new Error()))
    await expect(translateObject({})).rejects.toThrow(TranslateObjectError);
  })
})
