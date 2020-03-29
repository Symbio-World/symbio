import * as t from 'io-ts'

export const Barcode = t.brand(
  t.string,
  (s): s is t.Branded<string, { readonly Barcode: unique symbol }> =>
    /\d+/.test(s),
  'Barcode',
)
export type Barcode = t.TypeOf<typeof Barcode>

export const Link = t.brand(
  t.string,
  (s): s is t.Branded<string, { readonly Link: unique symbol }> =>
    /^https?:\/\/.+/.test(s),
  'Link',
)
export type Link = t.TypeOf<typeof Link>

export const Html = t.brand(
  t.string,
  (s): s is t.Branded<string, { readonly Html: unique symbol }> => s.length > 0,
  'Html',
)
export type Html = t.TypeOf<typeof Html>

export const ProductPage = t.type({
  link: Link,
  html: Html,
})
export type ProductPage = t.TypeOf<typeof ProductPage>

export const ProductSearchDataOptional = t.partial({
  image: t.string,
  name: t.string,
  description: t.string,
  sku: t.string,
  category: t.string,
  brand: t.string,
})
export type ProductSearchDataOptional = t.TypeOf<
  typeof ProductSearchDataOptional
>
export const ProductSearchDataRequired = t.type({
  links: t.array(Link),
})
export type ProductSearchDataRequired = t.TypeOf<
  typeof ProductSearchDataRequired
>
export const ProductSearchData = t.intersection([
  ProductSearchDataOptional,
  ProductSearchDataRequired,
])
export type ProductSearchData = t.TypeOf<typeof ProductSearchData>

export const ProductPageData = t.partial({
  ingredients: t.string,
  allergens: t.array(t.string),
  origin: t.string,
})
export type ProductPageData = t.TypeOf<typeof ProductPageData>

export const ProductData = t.union([ProductSearchData, ProductPageData])
export type ProductData = t.TypeOf<typeof ProductData>
