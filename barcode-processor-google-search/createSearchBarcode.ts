import axios from 'axios'
import * as Core from '@symbio/barcode-processor-core'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import { SearchResponse } from './SearchResponse'

type Deps = {
  config: GoogleSearchConfig
  onSearchResponse?: (searchResponse: SearchResponse) => void
}
type CreateSearchBarcode = (deps: Deps) => Core.SearchBarcode
export const createSearchBarcode: CreateSearchBarcode = ({
  config,
  onSearchResponse,
}) => async (barcode) => {
  const axiosResponse = await axios.get<SearchResponse>(config.url, {
    params: {
      key: config.key,
      cx: config.cx,
      q: barcode,
    },
  })
  const searchResponse = axiosResponse.data
  onSearchResponse?.(searchResponse)

  if (!searchResponse.items) {
    throw Core.noSearchResultsFound(barcode)
  }

  const product = searchResponse.items.reduce(
    (acc, item) => ({
      ...item.pagemap.product?.[0],
      ...acc,
    }),
    {},
  )
  const links = searchResponse.items.map((i) => i.link)
  const productSearchData = { ...product, links }
  return productSearchData
}
