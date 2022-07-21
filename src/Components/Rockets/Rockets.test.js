/* eslint-disable */

import renderWithProviders from "../../helpers/test-utils";
import {screen, logRoles, waitFor, getByText} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import Rockets from "../../Components/Rockets/Rockets";
import { useImperativeHandle } from "react";


describe(Rockets, () =>{
    test('it should render correctly', async ()=>{
        const rockets = renderWithProviders(<Rockets />);
        const firstTitle = await screen.findByRole('heading', {name: /falcon 1/i})

        expect(firstTitle).toBeInTheDocument();

    })

    test('should render rockets page content', async () => {
        const user = userEvent.setup()
        renderWithProviders(
          <Rockets />
        );
        let reservedBadge;
        let buttons;
        
       buttons = await screen.findAllByRole('button', {name: /Reserve Rocket/i})
       expect(buttons.length).toBe(4);
       const firstButn = buttons[0]

       await user.click(firstButn)

       buttons = await screen.findAllByRole('button', {name: /Reserve Rocket/i})
       expect(buttons.length).toBe(3);

       reservedBadge = screen.queryByText('Reserved')
        expect(reservedBadge).toBeInTheDocument()
        
        const cancelBtn = screen.getByRole('button', {name: /Cancel Reservation/i})
        expect(cancelBtn).toBeInTheDocument()
        
       await user.click(cancelBtn)
       reservedBadge = screen.queryByText('Reserved')
       expect(reservedBadge).toBeNull()

       buttons = await screen.findAllByRole('button', {name: /Reserve Rocket/i})
       expect(buttons.length).toBe(4);

      });

      test('if the store has items, dont render', async ()=>{
        const rockets = renderWithProviders(<Rockets />, {preloadedState: {rockets: [{
            rocketId: 'falcon1',
            rocketName: 'Falcon 1',
            rocketDesc:
                'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
            rocketImg: 'https://imgur.com/DaCfMsj.jpg',
            rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
            rocketReserved: false,
          }]}});
          
        const firstTitle = await screen.findByRole('heading', {name: /falcon 1/i})

        expect(firstTitle).toBeInTheDocument();

    })
})