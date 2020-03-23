import * as R from 'ramda'
import cheerio from 'cheerio'
import { Parse } from 'fetcher-core'

const PRISMA = 'prisma'
const FOODIE = 'foodie'
const SELVER = 'selver'
const BARBORA = 'barbora'

export const parse: Parse = (link, html) => {
  if (link.includes(PRISMA) || link.includes(FOODIE)) {
    return parsePrisma(html)
  }
  if (link.includes(SELVER)) {
    return parseSelver(html)
  }
  if (link.includes(BARBORA)) {
    return parseBarbora(html)
  }
  return {}
}

export const parseBarbora = (html: string) => {
  const $ = cheerio.load(html)
  return {
    ingredients: $('dt:contains("Koostisosad")').next().text().trim(),
    allergens: [$('dt:contains("ALLERGEENID")').next().text().trim()],
    origin: $('dt:contains("Päritoluriik")').next().text().trim(),
  }
}

export const parseSelver = (html: string) => {
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

export const parsePrisma = (html: string) => {
  const $ = cheerio.load(html)

  return {
    ingredients: $("[id$='ingredients']").text(),
    allergens: parsePrismaAllergens($),
    origin: parsePrismaOrigin($),
  }
}

const parsePrismaOrigin = ($: CheerioStatic) => {
  const byId = $('#origin')
    .find('p')
    .text()
  if (byId !== '') return byId
  return $('#info')
    .find('h3')
    .last()
    .next()
    .text()
    .trim()
}

const parsePrismaAllergens = ($: CheerioStatic) => {
  const allergensRaw = $('#info')
    .find('table')
    .eq(0)
    .find('td')
    .toArray()
    .map(el => $(el).text())

  return R.splitEvery(2, allergensRaw).map(([label, statement]) => `${label}: ${statement}`)
}
