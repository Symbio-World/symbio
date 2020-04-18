import * as Core from '@symbio/barcode-processor-core'

export type Product = Omit<Core.ProductSearchData, 'links'>

export type Pagemap = {
  product?: Product[]
}

export type Item = {
  link: string
  pagemap: Pagemap
}

export type SearchResponse = {
  items: Item[]
}
