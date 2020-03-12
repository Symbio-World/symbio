import { getProductData } from './get-product-data'
import { queryBarcode } from './query-barcode'
import { queryProductPage } from './query-product-page'
import { translateObject } from './translate-object'

jest.mock('./query-barcode')
jest.mock('./query-product-page')
jest.mock('./translate-object')

describe('GetProductData', () => {
  let links = ['https://example.com']

  beforeEach(() => {
    queryBarcode.mockImplementationOnce(() => Promise.resolve({
      name: 'Ola',
      links,
    }))
    queryProductPage.mockImplementationOnce(() => Promise.resolve({
      data: 'Mundo'
    }))
  });

  it('queries barcode', async () => {
    const testBarcode = 'test barcode'
    await getProductData(testBarcode)
    expect(queryBarcode).toHaveBeenCalledWith(testBarcode)
  })

  it('grabs additional data from product page', async () => {
    const testBarcode = 'test barcode'
    await getProductData(testBarcode)
    expect(queryProductPage).toHaveBeenCalledWith(links[0])
  })

  it('combines and translates data', async () => {
    const expected = {
      name: 'Hello',
      links,
      data: 'World'
    }
    translateObject.mockImplementationOnce(() => Promise.resolve(expected))
    const product = await getProductData('some barcode')
    expect(product).toEqual(expected)
  })
})
