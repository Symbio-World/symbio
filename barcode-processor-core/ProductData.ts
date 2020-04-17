export type ProductPage = {
  link: string,
  html: string
}

export type ProductSearchData = {
  image?: string,
  name?: string,
  description?: string,
  sku?: string,
  category?: string,
  brand?: string,
  links: string[]
}

export type ProductPageData = {
  ingredients?: string,
  allergens?: string[],
  origin?: string,
}

export type ProductData = ProductSearchData & ProductPageData
