import axios from 'axios'

import { fetchProduct } from './product-api'
import { testBarcode, testSuccessHttpResponse, testFailedHttpResponse } from './product-api.fixture'

jest.mock('axios')

it('fetches product successfully', async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: testSuccessHttpResponse }))
  await expect(fetchProduct(testBarcode)).resolves.toEqual({
    product: {
      ...testSuccessHttpResponse.items[0].pagemap.product[0],
      ...testSuccessHttpResponse.items[0].pagemap.aggregaterating[0]
    }
  });
});

it('fetches product erroneously', async () => {
  axios.get.mockImplementationOnce(() => Promise.reject({ error: testFailedHttpResponse }))
  await expect(fetchProduct(testBarcode)).resolves.toHaveProperty('error');
});
