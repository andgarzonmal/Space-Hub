import { screen } from '@testing-library/react';
import renderWithProviders from '../../helpers/test-utils';
import '@testing-library/jest-dom';
import ProfileContainer from './Profile';

describe(ProfileContainer, () => {
  test('it should render correctly', async () => {
    renderWithProviders(<ProfileContainer />,
      {
        preloadedState: {
          rockets: [{
            rocketId: 'afjasjn',
            rocketName: 'Falcon 1',
            rocketDesc:
            'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
            rocketImg: 'https://imgur.com/DaCfMsj.jpg',
            rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
            rocketReserved: true,
          }],
        },
      });
    const profile = await screen.findByRole('heading', { name: /My profile/i });
    expect(profile).toBeInTheDocument();
    screen.debug();
    const title = await screen.findByText('Falcon 1');
    expect(title).toBeInTheDocument();
  });
});
