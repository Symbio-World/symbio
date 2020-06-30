import { scrapePrisma, scrapeSelver, scrapeBarbora } from './scrapeProductPage'
import * as foodie from './scrapeProductPage.foodie.fixture'
import * as prisma from './scrapeProductPage.prisma.fixture'
import * as selver from './scrapeProductPage.selver.fixture'
import * as barbora from './scrapeProductPage.barbora.fixture'

describe('scrapeProductPage', () => {
  it('scrapes foodie', () => {
    expect(scrapePrisma(foodie.html)).toEqual({
      ingredients:
        'Vesi, rypsiöljy, kasvirasvat (palmu, kookos), suola, emulgointiaineet (E 471 kasviperäinen, E 476), säilöntäaine (E 202), happamuudensäätöaine (E 330, E 500), aromit, väri (E 160a), A- ja D-vitamiini.',
      allergens: [
        'Ei sisällä: Maito ja maitotuotteet, myös laktoosi, Soijapavut ja soijapaputuotteet',
      ],
      origin: 'Suomi',
      tags: ['Sydänmerkki', 'Kasvisruokaa', 'Vegaanista'],
    })
  })

  it('scrapes prisma', () => {
    expect(scrapePrisma(prisma.html)).toEqual({
      ingredients:
        'piim, juuretis, piimhappebakter Lactobacillus rhamnosus gg.',
      allergens: [],
      origin: 'Estonia',
      tags: ['Lactose free', 'Domestic products'],
    })
  })

  it('scrapes selver', () => {
    expect(scrapeSelver(selver.html)).toEqual({
      ingredients:
        'Vesi, porgand, kartul, suhkrumais, kanafilee 9%, sibul, rapsiõli, till. Aedviljade osakaal 61%.',
      allergens: ['', ''],
      origin: 'Eesti',
      tags: ['Gluten free', 'Lactose free'],
    })
  })

  it('scrapes barbora', () => {
    expect(scrapeBarbora(barbora.html)).toEqual({
      ingredients:
        'Meresool, glükoos-maisisiirup *, maisitärklis *, sheavõi *, kanapulbri puljong * (6,8%), kanarasv * (3,4%), pärmiekstrakt, küpsetatud sibul *, karamelliseeritud suhkur * , kurkum *, SELLER *, küüslauk *, petersell *, koriandri seemned *, rosmariin *, tüümian * (* loodusliku sertifikaadiga)',
      allergens: ['Sisaldab: seller ja selleritooted'],
      origin: 'Saksamaa',
      tags: ['Ökoloogiline toode'],
    })
  })
})
