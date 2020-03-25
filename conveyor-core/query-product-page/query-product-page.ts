type CreateQueryProductPage = (deps: Deps) => QueryProductPage

export type QueryProductPage = (link: string) => Promise<ProductPageData>

export type ParseProductPage = (link: string, html: string) => ProductPageData

export type FetchProductPage = (link: string) => Promise<string>
type Deps = {
  fetchProductPage: FetchProductPage
  parseProductPage: ParseProductPage
}

export type ProductPageData = {
  ingredients?: string
  allergens?: string[]
  origin?: string
}

export const createQueryProductPage: CreateQueryProductPage = ({
  fetchProductPage,
  parseProductPage,
}) => async link => {
  const html = await fetchProductPage(link).catch(throwQueryProductPageError)
  return parseProductPage(link, html)
}

// @ts-ignore
const throwQueryProductPageError = e => {
  throw new QueryProductPageError(e)
}

export class QueryProductPageError extends Error {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'QueryProductPageError'
    this.message = message
  }
}