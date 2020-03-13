import axios from 'axios'

import { translate, TranslateError } from './translate'
import { testResponse } from './translate.fixture'

jest.mock('axios')

describe('Translate', () => {
  it('returns transations', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve({ data: testResponse }))
    const testStrings = ["Hallo Welt", "Mein Name ist Jeff", ""]
    const translations = await translate(testStrings)
    expect(translations).toEqual(["Hello World", "My name is Jeff", ""])
  })

  it('errors when query fails', async () => {
    axios.post.mockImplementationOnce(() => Promise.reject(new Error()))
    await expect(translate([])).rejects.toThrow(TranslateError)
  });

  it('errors if not a string', async () => {
    const testStrings = ["Hallo Welt", "Mein Name ist Jeff", ["test"]]
    await expect(translate(testStrings)).rejects.toThrow(TranslateError)
  });
})
