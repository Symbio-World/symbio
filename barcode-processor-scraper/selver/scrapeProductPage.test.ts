import { scrapeSelver } from './scrapeProductPage'
import * as selver from './scrapeProductPage.selver.fixture'
import * as selverWithTags from './scrapeProductPage.selver.tags.fixture'

describe('scrapeSelverProductPage', () => {
  it('scrapes selver', () => {
    expect(scrapeSelver(selver.html)).toEqual({
      ingredients:
        'PIIM, kirsikaste 19% (kirss, suhkur, vesi, paksendaja modifitseeritud tärklis, happesuse regulaator sidrunhape, säilitusaine kaaliumsorbaat), suhkur, PETT, tärklis, osaliselt hüdrogeenitud palmiõli, vähendatud rasvasisaldusega kakaopulber, RÕÕSK KOOR, PETIpulber, emulgaator (E433, E435, E471, E472b, E475), stabilisaator (E407, E410), sool, toiduvärv E160a, lõhna- ja maitseaine.',
      allergens: [
        'Piim',
        'Võib sisaldada vähesel määral erinevaid pähkleid. Võib sisaldada kirsikive.',
      ],
      origin: 'Eesti',
      tags: [],
    })
  })

  it('scrapes selver with tags', () => {
    expect(scrapeSelver(selverWithTags.html)).toEqual({
      ingredients:
        'Vesi, porgand, kartul, suhkrumais, kanafilee 9%, sibul, rapsiõli, till. Aedviljade osakaal 61%.',
      allergens: [],
      origin: 'Eesti',
      tags: ['Gluten free', 'Lactose free'],
    })
  })
})
