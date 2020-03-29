import * as t from 'io-ts'
import * as Core from '@symbio/barcode-processor-core'

export const Product = Core.ProductSearchDataOptional
export type Product = t.TypeOf<typeof Product>

export const Pagemap = t.type({
  product: t.array(Product)
})
export type Pagemap = t.TypeOf<typeof Pagemap>

export const Item = t.type({
  link: Core.Link,
  pagemap: Pagemap
})
type Item = t.TypeOf<typeof Item>


export const SearchResponse = t.type({
  items: t.array(Item)
})
export type SearchResponse = t.TypeOf<typeof SearchResponse>
