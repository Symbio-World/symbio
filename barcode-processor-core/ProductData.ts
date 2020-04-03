export type Barcode = string
export type Link = string
export type Html = string

export type ProductPage = {
  link: Link,
  html: Html
}

export type ProductSearchData = {
  image?: Link,
  name?: string,
  description?: string,
  sku?: string,
  category?: string,
  brand?: string,
  links: Link[]
}

export type ProductPageData = {
  ingredients?: string,
  allergens?: string[],
  origin?: string,
}

export type ProductData = ProductSearchData & ProductPageData
