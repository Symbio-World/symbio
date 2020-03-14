import cheerio from 'cheerio'
import { Parse } from 'fetcher-core'

// TODO to test
export const parse: Parse = (html) => {
  const $ = cheerio.load(html)

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
