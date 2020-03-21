// @ts-ignore
import cheerio from 'cheerio-without-node-native'
import { Fetch, HttpError } from './fetch'

type CreateQueryProductPage = (deps: Deps) => QueryProductPage

export type QueryProductPage = (link: string) => Promise<ProductPageData>

export type Parse = (link: string, html: string) => ProductPageData

type Deps = {
  fetch: Fetch,
  parse: Parse,
}

export type ProductPageData = {
  ingredients?: string
  allergens?: string[]
  origin?: string
}

export const createQueryProductPage: CreateQueryProductPage = ({
  fetch,
  parse,
}) => async link => {
  const response = await fetch<string>({
    method: 'GET',
    url: link,
  }).catch(throwQueryProductPageError)
  return parse(link, response.data)
}

// @ts-ignore
const throwQueryProductPageError = e => {
  throw new QueryProductPageError(e)
}

export class QueryProductPageError extends HttpError {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'QueryProductPageError'
    this.message = message
  }
}
