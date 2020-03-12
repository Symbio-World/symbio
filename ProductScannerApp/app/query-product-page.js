import axios from 'axios'
import { ApiError } from './api-error'
import cheerio from 'cheerio'

export const queryProductPage = async link => {
  const response = await axios.get(link).catch(throwQueryProductPageError)
  const $ = cheerio.load(response.data)
  return {
    ingridients: $("[id$='ingredients']").text()
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