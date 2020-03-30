import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import * as Core from '@symbio/barcode-processor-core'
import { fetchSearchResponse } from './fetchSearchResponse'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import { SearchResponse } from './model'

type Deps = {
  config: GoogleSearchConfig
  onSearchResponse?: (searchResponse: SearchResponse) => void
}
type CreateSearchBarcode = (deps: Deps) => Core.SearchBarcode
export const createSearchBarcode: CreateSearchBarcode = ({ config, onSearchResponse }) => barcode => {
  return pipe(
    fetchSearchResponse(config, barcode),
    TE.chain(response => {
      onSearchResponse?.(response)
      const product = response.items.reduce(
        (acc, item) => ({
          ...item.pagemap.product[0],
          ...acc,
        }),
        {},
      )
      const links = response.items.map(i => i.link)
      const productSearchData = { ...product, links }
      return TE.right(productSearchData)
    }),
  )
}
