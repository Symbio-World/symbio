import { removeUndefined } from './removeUndefined'

describe('removeUndefined', () => {
  it('removes top-level undefined property from the object', () => {
    expect(removeUndefined({ a: undefined })).toEqual({})
  })

  it('removes remove recursively', () => {
    expect(removeUndefined({ a: undefined, b: { c: undefined } })).toEqual({
      b: {},
    })
    expect(
      removeUndefined({ a: undefined, b: { c: 1, d: undefined } }),
    ).toEqual({ b: { c: 1 } })
  })
})
