import { createTranslate, TranslateError } from './translate'
import * as fixture from './translate.fixture'

describe('Translate', () => {
  const deps = { target: '', key: '', url: '' }

  it('returns translations', async () => {
    const fetchTranslateResponse = jest.fn<any, any>(() =>
      Promise.resolve(fixture.response),
    )
    const strings = ['Hallo Welt', 'Mein Name ist Jeff', '']
    const translations = await createTranslate({ fetchTranslateResponse, ...deps })(strings)
    expect(translations).toEqual(['Hello World', 'My name is Jeff', ''])
  })

  it('errors when query fails', async () => {
    const fetchTranslateResponse = jest.fn(() => Promise.reject(new Error()))
    await expect(createTranslate({ fetchTranslateResponse, ...deps })([])).rejects.toThrow(
      TranslateError,
    )
  })
})
