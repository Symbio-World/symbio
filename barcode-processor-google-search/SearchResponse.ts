import { t } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'

export const Product = Core.ProductSearchDataOptional
export type Product = t.TypeOf<typeof Product>

export const Pagemap = t.intersection([
  t.partial({
    product: t.array(Product)
  }),
  t.UnknownRecord
])
export type Pagemap = t.TypeOf<typeof Pagemap>

export const Item = t.intersection([
  t.type({
    link: Core.Link,
    pagemap: Pagemap
  }),
  t.UnknownRecord
])
export type Item = t.TypeOf<typeof Item>


export const SearchResponse = t.intersection([
  t.type({
    items: t.nonEmptyArray(Item)
  }),
  t.UnknownRecord
])
export type SearchResponse = t.TypeOf<typeof SearchResponse>
