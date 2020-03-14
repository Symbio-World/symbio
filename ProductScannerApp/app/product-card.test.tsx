import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard } from './product-card';

describe('ProductCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ProductCard />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
