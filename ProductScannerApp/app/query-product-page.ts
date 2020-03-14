import cheerio from 'cheerio'
import { fetch, Fetch, HttpError } from './fetch'

type CreateQueryProductPage = (deps: Deps) => QueryProductPage

export type QueryProductPage = (link: string) => Promise<ProductPageData>

type Deps = {
  fetch: Fetch<string>
}

export type ProductPageData = {
  ingredients?: string
  allergens?: string
  origin?: string
}

export const createQueryProductPage: CreateQueryProductPage = ({
  fetch,
}) => async link => {
  const response = await fetch({
    method: 'GET',
    url: link,
  }).catch(throwQueryProductPageError)
  const $ = cheerio.load(response.data)

  return {
    ingredients: $("[id$='ingredients']").text(),
    allergens: $('#info')
      .find('table')
      .find('td')
      .eq(1)
      .text(),
    origin: $('#origin')
      .find('p')
      .text(),
  }
}

export const queryProductPage = createQueryProductPage({ fetch })

const throwQueryProductPageError = e => {
  throw new QueryProductPageError(e)
}

export class QueryProductPageError extends HttpError {
  constructor(message) {
    super(message)
    this.name = 'QueryProductPageError'
    this.message = message
  }
}
