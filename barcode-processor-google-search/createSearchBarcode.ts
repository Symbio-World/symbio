import axios from 'axios'
import { pipe, t, Rr, fetchAndDecode, TE } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import { SearchResponse } from './SearchResponse'

type Deps = {
  config: GoogleSearchConfig
  onSearchResponse?: (searchResponse: SearchResponse) => void
}
type CreateSearchBarcode = Rr.Reader<Deps, Core.SearchBarcode>
export const createSearchBarcode: CreateSearchBarcode = ({
  config,
  onSearchResponse,
}) => barcode => {
  return pipe(
    fetchAndDecode(SearchResponse, () =>
      axios.get(config.url, {
        params: {
          key: config.key,
          cx: config.cx,
          q: barcode,
        },
      }),
    ),
    TE.chain(response => {
      onSearchResponse?.(response)
      const product = response.items.reduce(
        (acc, item) => ({
          ...item.pagemap.product?.[0],
          ...acc,
        }),
        {},
      )
      const links = response.items.map(i => i.link) as t.NonEmptyArray<
        Core.Link
      >
      const productSearchData = { ...product, links }
      return TE.right(productSearchData)
    }),
  )
}
