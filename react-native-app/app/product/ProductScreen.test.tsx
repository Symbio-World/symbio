import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { ProductScreen } from './ProductScreen'
import { ProductViewContainer } from './ProductViewContainer'

describe('ProductScreen', () => {
  const barcode = 'barcode'
  const route: any = {
    params: {
      barcode,
    },
  }
  const navigation: any = {
    navigate: jest.fn(),
  }

  it('renders correctly', () => {
    const { toJSON } = render(
      <ProductScreen route={route} navigation={navigation} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('passes barcode', () => {
    const { getByType } = render(
      <ProductScreen route={route} navigation={navigation} />,
    )
    expect(getByType(ProductViewContainer).props.barcode).toEqual(barcode)
  })

  it('navigates out onFeedbackPress', () => {
    const title = 'title'
    const { getByType } = render(
      <ProductScreen navigation={navigation} route={route} />,
    )
    fireEvent(getByType(ProductViewContainer), 'onFeedbackPress', title)
    expect(navigation.navigate).toHaveBeenCalledWith('FeedbackScreen', {
      title,
    })
  })
})
