import axios from 'axios'

import { translator } from './translator'
import { fetchProduct } from './product-api'
import {
  ApiError,
  testBarcode,
  testSuccessHttpResponse,
  testFailedHttpResponse
} from './product-api.fixture'
import { testProduct, testTranslatedProduct } from './product.fixture'

jest.mock('axios')
jest.mock('./translator')

it('queries barcode successfully', async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: testSuccessHttpResponse }))
  await expect(fetchProduct(testBarcode)).resolves.toEqual({
    image: 'https://foodieimages.s3.amazonaws.com/images/entries/180x220/6414893012318_0.png',
    name: 'Rainbow Margariini 40% kevyt 400 g'
  });
});

it('errors with api error when query barcode fails', async () => {
  axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
  await expect(fetchProduct(testBarcode)).rejects.toThrow(ApiError)
});

it('translates product', async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: testSuccessHttpResponse }))
  translator.translate.mockImplementationOnce(() => Promise.resolve(testTranslatedProduct.name))
  const product = await fetchProduct(testProduct)
  expect(product).toEqual(testTranslatedProduct)
})

it('errors with api error when translations fails', async () => {
  translator.translate.mockImplementationOnce(() => Promise.reject(new Error()))
  await expect(fetchProduct(testBarcode)).rejects.toThrow(ApiError);
})