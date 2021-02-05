import * as Core from '@symbio/barcode-processor-core'

import { scrapePrisma } from './prisma'
import { scrapeBarbora } from './barbora'
import { scrapeSelver } from './selver'

const PRISMA = 'prisma'
const FOODIE = 'foodie'
const SELVER = 'selver'
const BARBORA = 'barbora'

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
