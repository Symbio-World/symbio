import cheerio from 'cheerio'

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
