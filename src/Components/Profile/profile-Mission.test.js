import { screen } from '@testing-library/react';
import renderWithProviders from '../../helpers/test-utils';
import '@testing-library/jest-dom';
import ProfileContainer from './Profile';

describe(ProfileContainer, () => {
  test('it should render correctly', async () => {
    renderWithProviders(<ProfileContainer />,
      {
        preloadedState: {
          missions: [{
            mission_name: 'MockMission',
            mission_id: '546sdf',
            description: 'Description',
            reserved: true,
          }],
        },
      });
    const profile = await screen.findByRole('heading', { name: /My profile/i });
    expect(profile).toBeInTheDocument();
    screen.debug();
    const title = await screen.findByText('MockMission');
    expect(title).toBeInTheDocument();
  });
});
