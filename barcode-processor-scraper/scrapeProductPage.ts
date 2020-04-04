import * as R from 'ramda'
import cheerio from 'cheerio'
import * as Core from '@symbio/barcode-processor-core'

const PRISMA = 'prisma'
const FOODIE = 'foodie'
const SELVER = 'selver'
const BARBORA = 'barbora'

const scrapePrismaOrigin = ($: CheerioStatic) => {
  const byId = $('#origin').find('p').text()
  if (byId !== '') return byId
  return $('#info').find('h3').last().next().text().trim()
}

const scrapePrismaAllergens = ($: CheerioStatic) => {
  const allergensRaw = $('#info')
    .find('table')
    .eq(0)
    .find('td')
    .toArray()
    .map((el) => $(el).text())

  return R.splitEvery(2, allergensRaw).map(
    ([label, statement]) => `${label}: ${statement}`,
  )
}


export const scrapePrisma = (html: string) => {
  const $ = cheerio.load(html)

  return {
    ingredients: $("[id$='ingredients']").text(),
    allergens: scrapePrismaAllergens($),
    origin: scrapePrismaOrigin($),
  }
}

export const scrapeBarbora = (html: string) => {
  const $ = cheerio.load(html)
  return {
    ingredients: $('dt:contains("Koostisosad")').next().text().trim(),
    allergens: [$('dt:contains("ALLERGEENID")').next().text().trim()],
    origin: $('dt:contains("Päritoluriik")').next().text().trim(),
  }
}

export const scrapeSelver = (html: string) => {
  const $ = cheerio.load(html)
  return {
    ingredients: $('h5:contains("Koostis")').next().text().trim(),
    allergens: [
      $('h5:contains("Allergeenid")').next().text().trim(),
      $('h5:contains("Hoiatused")').next().text().trim(),
    ],
    origin: $('th:contains("Päritolumaa")').next().text().trim(),
  }
}

export const scrapeProductPage: Core.ScrapeProductPage = ({ link, html }) => {
  if (link.includes(PRISMA) || link.includes(FOODIE)) {
    return scrapePrisma(html)
  }
  if (link.includes(SELVER)) {
    return scrapeSelver(html)
  }
  if (link.includes(BARBORA)) {
    return scrapeBarbora(html)
  }
  return {}
}
