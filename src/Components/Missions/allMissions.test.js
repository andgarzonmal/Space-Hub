import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AllMission from './AllMission';
import renderWithProviders from '../../helpers/test-utils';

describe(AllMission, () => {
  test('it should render missions correctly', async () => {
    renderWithProviders(<AllMission />);
    const firstTitle = await screen.findByRole('heading', { name: /Thaicom/i });
    expect(firstTitle).toBeInTheDocument();
  });

  test('renders mission page content', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <AllMission />,
    );
    let reservedBadge;
    let buttons;
    buttons = await screen.findAllByRole('button', { name: /Join Mission/i });
    expect(buttons.length).toBe(10);
    const firstButn = buttons[0];

    await user.click(firstButn);

    buttons = await screen.findAllByRole('button', { name: /Join Mission/i });
    expect(buttons.length).toBe(9);

    reservedBadge = screen.queryByText('Active Member');
    expect(reservedBadge).toBeInTheDocument();

    screen.debug();
    const cancelBtn = screen.getByRole('button', { name: /Leave Mission/i });
    expect(cancelBtn).toBeInTheDocument();

    await user.click(cancelBtn);
    reservedBadge = screen.queryByText('Active Member');
    expect(reservedBadge).toBeNull();

    buttons = await screen.findAllByRole('button', { name: /Join Mission/i });
    expect(buttons.length).toBe(10);
  });
});
