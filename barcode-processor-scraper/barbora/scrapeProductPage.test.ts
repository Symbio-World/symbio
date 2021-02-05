import { scrapeBarbora } from './scrapeProductPage'

import * as barboraTags from './scrapeProductPage.barbora.tags.fixture'
import * as barbora from './scrapeProductPage.barbora.fixture'

describe('scrapeBarboraProductPage', () => {
  it('scrapes barbora', () => {
    expect(scrapeBarbora(barbora.html)).toEqual({
      ingredients: 'Täistera KAERAhelbed',
      allergens: ['Sisaldab: gluteeni sisaldavad teraviljad'],
      origin: 'Soome',
      tags: [],
    })
  })
  it('scrapes barbora with tags', () => {
    expect(scrapeBarbora(barboraTags.html)).toEqual({
      ingredients:
        'Meresool, glükoos-maisisiirup *, maisitärklis *, sheavõi *, kanapulbri puljong * (6,8%), kanarasv * (3,4%), pärmiekstrakt, küpsetatud sibul *, karamelliseeritud suhkur * , kurkum *, SELLER *, küüslauk *, petersell *, koriandri seemned *, rosmariin *, tüümian * (* loodusliku sertifikaadiga)',
      allergens: ['Sisaldab: seller ja selleritooted'],
      origin: 'Saksamaa',
      tags: ['Ökoloogiline toode'],
    })
  })
})
