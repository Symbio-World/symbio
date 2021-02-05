import * as R from 'ramda'
import cheerio from 'cheerio'

const scrapePrismaOrigin = ($: CheerioStatic) => {
  const byId = $('#origin').find('p').text().trim()
  if (byId !== '') return byId
  return $('#info').find('h3').last().next().text().trim()
}

const scrapePrismaAllergens = ($: CheerioStatic) => {
  const allergensRaw = $('#info')
    .find('table')
    .eq(0)
    .find('td')
    .toArray()
    .map((el) => $(el).text().trim())

  return R.splitEvery(2, allergensRaw).map(
    ([label, statement]) => `${label}: ${statement}`,
  )
}

const scrapePrismaTags = ($: CheerioStatic) => {
  return $('.preferences')
    .find('div')
    .toArray()
    .map((t) => t.attribs.title)
}

export const scrapePrisma = (html: string) => {
  const $ = cheerio.load(html)
  return {
    ingredients: $("[id$='ingredients']").text().trim(),
    allergens: scrapePrismaAllergens($),
    origin: scrapePrismaOrigin($),
    tags: scrapePrismaTags($),
  }
}
