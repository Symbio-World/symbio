import { createTranslate, TranslateError } from './translate'
import * as fixture from './translate.fixture'

describe('Translate', () => {
  const deps = { target: '', key: '', url: '' }

  it('returns translations', async () => {
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: fixture.response }),
    )
    const strings = ['Hallo Welt', 'Mein Name ist Jeff', '']
    const translations = await createTranslate({ fetch, ...deps })(strings)
    expect(translations).toEqual(['Hello World', 'My name is Jeff', ''])
  })

  it('errors when query fails', async () => {
    const fetch = jest.fn(() => Promise.reject(new Error()))
    await expect(createTranslate({ fetch, ...deps })([])).rejects.toThrow(
      TranslateError,
    )
  })
})
