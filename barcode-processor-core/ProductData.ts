import { t as PD } from '@symbio/ts-lib'

export const Barcode = PD.brand(
  PD.string,
  (s): s is PD.Branded<string, { readonly Barcode: unique symbol }> =>
    /\d+/.test(s),
  'Barcode',
)
export type Barcode = PD.TypeOf<typeof Barcode>

export const Link = PD.brand(
  PD.string,
  (s): s is PD.Branded<string, { readonly Link: unique symbol }> =>
    /^https?:\/\/.+/.test(s),
  'Link',
)
export type Link = PD.TypeOf<typeof Link>

export const Html = PD.brand(
  PD.string,
  (s): s is PD.Branded<string, { readonly Html: unique symbol }> => s.length > 0,
  'Html',
)
export type Html = PD.TypeOf<typeof Html>

export const ProductPage = PD.type({
  link: Link,
  html: Html,
})
export type ProductPage = PD.TypeOf<typeof ProductPage>

export const ProductSearchDataOptional = PD.partial({
  image: PD.string,
  name: PD.string,
  description: PD.string,
  sku: PD.string,
  category: PD.string,
  brand: PD.string,
})
export type ProductSearchDataOptional = PD.TypeOf<
  typeof ProductSearchDataOptional
>
export const ProductSearchDataRequired = PD.type({
  links: PD.nonEmptyArray(Link),
})
export type ProductSearchDataRequired = PD.TypeOf<
  typeof ProductSearchDataRequired
>
export const ProductSearchData = PD.intersection([
  ProductSearchDataOptional,
  ProductSearchDataRequired,
])
export type ProductSearchData = PD.TypeOf<typeof ProductSearchData>

export const ProductPageData = PD.partial({
  ingredients: PD.string,
  allergens: PD.array(PD.string),
  origin: PD.string,
})
export type ProductPageData = PD.TypeOf<typeof ProductPageData>

export const ProductData = PD.union([ProductSearchData, ProductPageData])
export type ProductData = PD.TypeOf<typeof ProductData>
