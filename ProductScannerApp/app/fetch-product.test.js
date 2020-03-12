import { queryBarcode } from './query-barcode'
import { translateObject } from './translate-object'
import { fetchProduct } from './fetch-product'

jest.mock('./query-barcode')
jest.mock('./translate-object')

describe('FetchProduct', () => {
  it('queries and translates product', async () => {
    queryBarcode.mockImplementationOnce(() => Promise.resolve({ name: 'Ola' }))
    translateObject.mockImplementationOnce(() => Promise.resolve({ name: 'Hello' }))
    const product = await fetchProduct('some barcode')
    expect(product).toEqual({ name: 'Hello' })
  })
})
