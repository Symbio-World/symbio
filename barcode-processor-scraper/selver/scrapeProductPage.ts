import cheerio from 'cheerio'

const SELVER_TAGS_HREF = {
  /* eslint-disable  @typescript-eslint/naming-convention */
  'laktoosivaba_40x40.jpg': 'Lactose free',
  'gluteenivaba_40x40.jpg': 'Gluten free',
  'suhkruvaba_40x40.jp': 'Sugar free',
  'mahetoode_40x40.jpg': 'Organic product',
  'vegan_40x40.jpg': 'Vegan',
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
    ].filter((f) => f),
    origin: $('th:contains("Päritolumaa")').next().text().trim(),
    tags: scrapeSelverTags($),
  }
}
