import { createTranslateObject, replaceValueWithInd, replaceIndWithValue } from './translate-object'

describe('TranslateObject', () => {
  // test helpers
  it('replace array with string and obj where index instead of value where value only typeof string', async () => {
    const obj = {
      stringValue: 'firstValue'
    }
    const translatedObj = replaceValueWithInd(obj, [])
    expect(translatedObj).toEqual({
      array: ['firstValue'],
      obj: { stringValue: 0 }
    })
  })

  it('replace array with string and obj where index instead of value where value only typeof string and object', async () => {
    const obj = {
      stringValue: 'firstValue',
      nestedObject: {
        secondStringValue: 'secondValue',
        secondsNestedObject: {
          thirdStringValue: 'thirdValue',
          thirdStringNestedObject: {
            fourthStringValue: 'fourthStringValue',
          }
        }
      }
    }
    const translatedObj = replaceValueWithInd(obj, [])
    expect(translatedObj).toEqual({
      array: ['firstValue', 'secondValue', 'thirdValue', 'fourthStringValue'],
      obj: {
        stringValue: 0,
        nestedObject: {
          secondStringValue: 1,
          secondsNestedObject: {
            thirdStringValue: 2,
            thirdStringNestedObject: {
              fourthStringValue: 3,
            }
          }
        }
      }
    })
  })
  
  it('replace index with value from array', async () => {
    const obj = {
      stringValue: 0,
    }
    const translatedObj = replaceIndWithValue(obj, ['firstValue'])
    expect(translatedObj).toEqual({
      stringValue: 'firstValue'
    })
  })
  
  it('replace index with value from array nested', async () => {
    const obj = {
      stringValue: 0,
      nestedObject: {
        secondStringValue: 1,
        secondsNestedObject: {
          thirdStringValue: 2,
          thirdStringNestedObject: {
            fourthStringValue: 3,
          }
        }
      }
    }
    const translatedObj = replaceIndWithValue(obj, ['firstValue', 'secondValue', 'thirdValue', 'fourthStringValue'],)
    expect(translatedObj).toEqual({
      stringValue: 'firstValue',
      nestedObject: {
        secondStringValue: 'secondValue',
        secondsNestedObject: {
          thirdStringValue: 'thirdValue',
          thirdStringNestedObject: {
            fourthStringValue: 'fourthStringValue',
          }
        }
      }
    })
  })
  
  it('replace value with index where value typeof array', async () => {
    const obj = {
      stringValue: ['firstValue', 'secondValue']
    }
    const translatedObj = replaceValueWithInd(obj, [])
    expect(translatedObj).toEqual({
      array: ['firstValue', 'secondValue'],
      obj: { stringValue: [0,1] }
    })
  })
  
  it('replace array with string and obj where index instead of value where value only typeof string and object', async () => {
  
    const obj = {
      stringValue: [
        { firstValue: 'firstValue' },
        { secondValue: 'secondValue' },
        'thirdValue',
        {
          fourthStringValue: 'fourthStringValue',
          nestedObject: {
            fifthStringValue: 'fifthStringValue',
          }
        }
      ]
    }
    const translatedObj = replaceValueWithInd(obj, [])
    expect(translatedObj).toEqual({
      array: ['firstValue', 'secondValue', 'thirdValue', 'fourthStringValue', 'fifthStringValue'],
      obj: {
        stringValue: [
          { firstValue: 0 }, { secondValue: 1 }, 2, {
            fourthStringValue: 3,
            nestedObject: {
              fifthStringValue: 4,
            }
          }
        ]
      }
    })
  })
  it('replace index with value where value typeof array', async () => {
    const obj = {
      stringValue: [0,1]
    }
    const translatedObj = replaceIndWithValue(obj, ['firstValue', 'secondValue'])
    expect(translatedObj).toEqual({
      stringValue: ['firstValue', 'secondValue']
    })
  })

  it('replace array with string and obj where index instead of value where value only typeof string and object', async () => {
    const obj = {
        stringValue: [
          { firstValue: 0 }, { secondValue: 1 }, 2, {
            fourthStringValue: 3,
            nestedObject: {
              fifthStringValue: 4,
            }
          }
        ]
      }

    const translatedObj = replaceIndWithValue(obj, ['firstValue', 'secondValue', 'thirdValue', 'fourthStringValue', 'fifthStringValue'])
    expect(translatedObj).toEqual({
      stringValue: [
        { firstValue: 'firstValue' },
        { secondValue: 'secondValue' },
        'thirdValue',
        {
          fourthStringValue: 'fourthStringValue',
          nestedObject: {
            fifthStringValue: 'fifthStringValue',
          }
        }
      ]
    })
  })

  it('returns translated object', async () => {
    const translate = jest.fn(() =>
      Promise.resolve(['ingredients', 'allergens1Title', 'allergens1Description', 'allergens2Title', 'allergens2Description', 'nutrients1Title', 'nutrients1Desctiption', 'nutrients2Title', 'nutrients2Desctiption', 'origin']),
    )
    const translatedObj = await createTranslateObject({ translate })(({
      ingredients: 'sealiha 55%,vesi',
      allergens: [
        { title: 'Ei sisällä', description: '	Maito ja maitotuotteet, myös laktoosi, Soijapavut ja soijapaputuotteet' },
        { title: 'Ei sisällä', description: '	Maito ja maitotuotteet, myös laktoosi, Soijapavut ja soijapaputuotteet' },
      ],
      nutrients: [
        { title: 'Energy', value: '984 kJ / 235 kcal' },
        { title: 'Fat', value: 'asd',  },
      ],
      origin: 'Mundo',
    } as any))
    expect(translatedObj).toEqual({
      ingredients: 'ingredients',
      allergens: [
        { title: 'allergens1Title', description: 'allergens1Description' },
        { title: 'allergens2Title', description: 'allergens2Description' },
      ],
      nutrients: [
        { title: 'nutrients1Title', value: 'nutrients1Desctiption' },
        { title: 'nutrients2Title', value: 'nutrients2Desctiption',  },
      ],
      origin: 'origin',
    })
  })
})
