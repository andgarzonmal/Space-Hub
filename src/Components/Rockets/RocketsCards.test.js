/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { findByRole, screen } from '@testing-library/react';
import renderWithProviders from '../../helpers/test-utils';
import userEvent from '@testing-library/user-event';
import store from '../../configureStore';
import RocketsCards from './RocketsCards';

// test the rockets card
const rocket = {
  rocketId: 'falcon1',
  rocketName: 'Falcon 1',
  rocketDesc:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  rocketImg: 'https://imgur.com/DaCfMsj.jpg',
  rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
  rocketReserved: false,
};

const MockRockets = () => (
  <Provider store={store}>
    <RocketsCards rocket={rocket} />
  </Provider>
);

test('renders correctly', () => {
  const tree = renderer.create(<MockRockets />).toJSON();
  expect(tree).toMatchSnapshot();
});



