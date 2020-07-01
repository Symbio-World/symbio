import cheerio from 'cheerio'

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
    ].filter((f) => f),
    origin: $('th:contains("Päritolumaa")').next().text().trim(),
    tags: scrapeSelverTags($),
  }
}
