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
    })
  })

  it('scrapes selver', () => {
    expect(scrapeSelver(selver.html)).toEqual({
      ingredients:
        'PIIM, kirsikaste 19% (kirss, suhkur, vesi, paksendaja modifitseeritud tärklis, happesuse regulaator sidrunhape, säilitusaine kaaliumsorbaat), suhkur, PETT, tärklis, osaliselt hüdrogeenitud palmiõli, vähendatud rasvasisaldusega kakaopulber, RÕÕSK KOOR, PETIpulber, emulgaator (E433, E435, E471, E472b, E475), stabilisaator (E407, E410), sool, toiduvärv E160a, lõhna- ja maitseaine.',
      allergens: [
        'Piim',
        'Võib sisaldada vähesel määral erinevaid pähkleid. Võib sisaldada kirsikive.',
      ],
      origin: 'Eesti',
    })
  })

  it('scrapes barbora', () => {
    expect(scrapeBarbora(barbora.html)).toEqual({
      ingredients: 'Täistera KAERAhelbed',
      allergens: ['Sisaldab: gluteeni sisaldavad teraviljad'],
      origin: 'Soome',
    })
  })
})
