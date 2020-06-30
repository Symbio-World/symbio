import * as R from 'ramda'
import cheerio from 'cheerio'
import * as Core from '@symbio/barcode-processor-core'

const PRISMA = 'prisma'
const FOODIE = 'foodie'
const SELVER = 'selver'
const BARBORA = 'barbora'

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

const scrapeBarboraTags = ($: CheerioStatic) => {
  return $('.b-product-goalgroups')
    .find('svg')
    .toArray()
    .map((t) => t.attribs['title'])
    .filter((v) => v !== 'Salvestatud ostukorvid')
}

export const scrapeBarbora = (html: string) => {
  const $ = cheerio.load(html)
  return {
    ingredients: $('dt:contains("Koostisosad")').next().text().trim(),
    allergens: [$('dt:contains("ALLERGEENID")').next().text().trim()],
    origin: $('dt:contains("Päritoluriik")').next().text().trim(),
    tags: scrapeBarboraTags($),
  }
}

const SELVER_TAGS_HREF = {
  /* eslint-disable  @typescript-eslint/naming-convention */

  // TODO: discuss which badges we need
  // 'parim_lihatoode_2019.jpg': 'The best meat product',
  'laktoosivaba_40x40.jpg': 'Lactose free',
  'gluteenivaba_40x40.jpg': 'Gluten free',
  'suhkruvaba_40x40.jp': 'Sugar free',
  'mahetoode_40x40.jpg': 'Organic product',
  // 'okotoode_40x40.jpg': '', // TODO: Ask Almas meaning
  'vegan_40x40.jpg': 'Vegan',
  // 'tunnustatud_eesti_maitse.jpg': 'Recognized Estonian taste',
  // 't_istera-m_rgis.jpg': '', // TODO: Ask Almas meaning
  // 'e-poe_margid_saaremaa.jpg': '', // TODO: Ask Almas meaning
  // 'eesti_parim_toiduaine_40x40.jpg': 'The best food in estonia',

  /* eslint-enable  @typescript-eslint/naming-convention */
}

const scrapeSelverTags = ($: CheerioStatic) => {
  return $('ul.product-badges')
    .find('img')
    .toArray()
    .map((t) => {
      const linkSplitted = t.attribs.src.split('/')
      const badgeLink = linkSplitted[linkSplitted.length - 1]
      const badge = (SELVER_TAGS_HREF as { [key: string]: string })[badgeLink]
      return badge
    })
    .filter((v) => v)
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
    tags: scrapeSelverTags($),
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
