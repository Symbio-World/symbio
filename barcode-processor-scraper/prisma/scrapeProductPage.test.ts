import { scrapePrisma } from './scrapeProductPage'
import * as foodie from './scrapeProductPage.foodie.fixture'
import * as prisma from './scrapeProductPage.prisma.fixture'
import * as prismaWithTags from './scrapeProductPage.prisma.tags.fixture'

describe('scrapePrismaProductPage', () => {
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
        'sealiha 55%,vesi,veiseliha 10%,seapekk,kanamuna,vadakupulber sh piim,sool,lihavalk,stabilisaator E450,tärklis,suhkur,happesuse regulaator E451,antioksüdant E316,lõhna-ja maitseained,säilitusaine E250',
      allergens: [
        'Sisaldab: Munad ja neist valmistatud tooted, Piim ja sellest valmistatud tooted (sealhulgas laktoos)',
        'Võib sisaldada: Sojaoad ja neist valmistatud tooted, Seller ja sellest valmistatud tooted, Sinep ja sellest valmistatud tooted',
      ],
      origin: 'Eesti',
      tags: ['Kodumaised tooted'],
    })
  })

  it('scrapes prisma with tags', () => {
    expect(scrapePrisma(prismaWithTags.html)).toEqual({
      ingredients:
        'piim, juuretis, piimhappebakter Lactobacillus rhamnosus gg.',
      allergens: [],
      origin: 'Estonia',
      tags: ['Lactose free', 'Domestic products'],
    })
  })
})
