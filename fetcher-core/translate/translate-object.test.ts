import { createTranslateObject } from './translate-object'

describe('TranslateObject', () => {
  it('handles flat object', async () => {
    const translate = jest.fn(() => Promise.resolve(['b1', 'b2', 'b3']))
    const translatedObj = await createTranslateObject({ translate })({
      key1: 'a1',
      key2: 'a2',
      key3: 'a3',
    })
    expect(translatedObj).toEqual({
      key1: 'b1',
      key2: 'b2',
      key3: 'b3',
    })
  })

  it('handles array value', async () => {
    const translate = jest.fn(() =>
      Promise.resolve(['b1', 'b2', 'b3', 'b4', 'b5']),
    )
    const translatedObj = await createTranslateObject({ translate })({
      key1: 'a1',
      key2: ['a2', 'a3', 'a4'],
      key3: 'a5',
    })
    expect(translatedObj).toEqual({
      key1: 'b1',
      key2: ['b2', 'b3', 'b4'],
      key3: 'b5',
    })
  })

  it('translates arbitrary object', async () => {
    const translate = jest.fn(() =>
      Promise.resolve(['t1', 't2', 't3', 't4', 't5', 't6']),
    )
    const translatedObj = await createTranslateObject({ translate })({
      key1: 's1',
      key2: ['s2', 's3'],
      key3: {
        key4: 's4',
        key5: 's5',
      },
      key6: 's6',
    })
    expect(translatedObj).toEqual({
      key1: 't1',
      key2: ['t2', 't3'],
      key3: {
        key4: 't4',
        key5: 't5',
      },
      key6: 't6',
    })
  })
})
