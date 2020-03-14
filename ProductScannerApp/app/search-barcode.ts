import { fetch, Fetch, HttpError } from './fetch'
import { googleSearch } from './config'

type CreateSearchBarcode = (deps: Deps) => SearchBarcode

export type SearchBarcode = (barcode: string) => Promise<ProductSearchData>

type Deps = {
  fetch: Fetch
} & typeof googleSearch

export type ProductSearchData = SearchResponseItemProduct & {
  links: string[]
}

type SearchResponse = {
  items: SearchResponseItem[]
}

type SearchResponseItem = {
  link: string
  pagemap: {
    product?: SearchResponseItemProduct[]
  }
}

type SearchResponseItemProduct = {
  image?: string
  name?: string
  description?: string
  sku?: string
  category?: string
  brand?: string
}

export const createSearchBarcode: CreateSearchBarcode = ({
  fetch,
  url,
  key,
  cx,
}) => async barcode => {
  const response = await fetch<SearchResponse>({
    method: 'GET',
    url,
    params: {
      key,
      cx,
      q: barcode,
    },
  }).catch(throwSearchBarcodeError)
  const product = response.data.items.reduce(
    (acc, item) => ({
      ...item?.pagemap?.product?.[0],
      ...acc,
    }),
    {},
  )
  const links = response.data.items.map(i => i.link)
  return {
    ...product,
    links,
  }
}

export const searchBarcode = createSearchBarcode({
  fetch,
  ...googleSearch,
})

// @ts-ignore
const throwSearchBarcodeError = e => {
  throw new SearchBarcodeError(e)
}

export class SearchBarcodeError extends HttpError {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'SearchBarcodeError'
    this.message = message
  }
}
