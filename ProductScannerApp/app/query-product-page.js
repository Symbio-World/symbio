import axios from 'axios'
import { ApiError } from './api-error'
import cheerio from 'cheerio'

export const queryProductPage = async link => {
  const response = await axios.get(link).catch(throwQueryProductPageError)
  const $ = cheerio.load(response.data)

  return {
    ingredients: $("[id$='ingredients']").text(),
    allergens: $('#info').find('table').find('td').eq(1).text(),
    origin: $('#origin').find('p').text(),
  }
}

const throwQueryProductPageError = e => {
  throw new QueryProductPageError(e)
}

export class QueryProductPageError extends ApiError {
  constructor(message) {
    super(message)
    this.name = 'QueryProductPageError'
    this.message = message
  }
}