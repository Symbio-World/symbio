import { TranslateResponse } from './TranslateResponse'

export const productData = {
  image:
    'https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/e22528194101337ecff1b3e4c5f7c792.png',
  name: 'Tatar 1 kg',
  description: 'Tatar 1 kg',
  sku: '4750020030919',
  category: 'Kuivained / Helbed ja tangud / Tangud',
  brand: 'TARTU MILL',
  links: [
    'https://www.prismamarket.ee/entry/tatar-1-kg/4750020030919',
    'https://tartumill.ee/et/tooted/kuivained/',
    'https://www.selver.ee/tatar-tartu-mill-1-kg',
    'https://tartumill.ee/en/tooted/kuivained/',
    'https://www.selver.ee/ru/tatar-tartu-mill-1-kg',
    'https://issuu.com/aldar/docs/aldar_cc_kliendileht_oktoober-novem',
  ],
  ingredients: '',
  allergens: [],
  origin: 'Euroopa liit',
}

export const translateResponse: TranslateResponse = {
  data: {
    translations: [
      {
        translatedText: 'Tatars 1 kg',
      },
      {
        translatedText: 'Tatars 1 kg',
      },
      {
        translatedText: '4750020030919',
      },
      {
        translatedText: 'Solids / Flakes and groats / Groats',
      },
      {
        translatedText: 'European Union',
      },
    ],
  },
}
