type CreateSearchBarcode = (deps: Deps) => SearchBarcode

export type SearchBarcode = (barcode: string) => Promise<ProductSearchData>

export type FetchSearchResponse = (barcode: string) => Promise<SearchResponse>
type Deps = {
  fetchSearchResponse: FetchSearchResponse
}

export type ProductSearchData = SearchResponseItemProduct & {
  links: string[]
}

type SearchResponse = {
  items?: SearchResponseItem[]
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
  fetchSearchResponse
}) => async barcode => {
  const response = await fetchSearchResponse(barcode).catch(throwSearchBarcodeError)

  if(!response.items) throw new NoDataFoundError()

  const product = response.items.reduce(
    (acc, item) => ({
      ...item?.pagemap?.product?.[0],
      ...acc,
    }),
    {},
  )
  const links = response.items.map(i => i.link)
  return {
    ...product,
    links,
  }
}

// @ts-ignore
const throwSearchBarcodeError = e => {
  throw new SearchBarcodeError(e)
}

export class SearchBarcodeError extends Error {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'SearchBarcodeError'
    this.message = message
  }
}

export class NoDataFoundError extends Error {
  // @ts-ignore
  constructor() {
    super()
    this.name = 'NoDataFoundError'
    Object.setPrototypeOf(this, NoDataFoundError.prototype);
  }
}
