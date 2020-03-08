import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard } from './product-card';

it('renders correctly', () => {
  renderer.create(<ProductCard name={'Margarin'} />);
});
