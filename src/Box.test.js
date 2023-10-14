import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

    it('renders without crashing', function () {
    render(<Box />);
    });

    it('matches snapshot', function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
    });


    // it('shows win state when lights are out', function () {
    // const { getByText } = render(<Box chanceLightStartsOn={0} />);
    // expect(getByText('You Win!')).toBeInTheDocument();
    // });



    // it('toggles lights correctly', function () {
    // const { getAllByRole } = render(
    //     <Box nrows={3} ncols={3} chanceLightStartsOn={1} />,
    // );
    // const cells = getAllByRole('button');
    
    // // all cells start out as lit
    // cells.forEach(cell => {
    //     expect(cell).toHaveClass('Cell-lit');
    // });

    // // click on the middle cell
    // fireEvent.click(cells[4]);

    // // now only cells at the corners should be lit
    // let litIndices = [0, 2, 6, 8];
    // cells.forEach((cell, idx) => {
    //     if (litIndices.includes(idx)) {
    //     expect(cell).toHaveClass('Cell-lit');
    //     } else {
    //     expect(cell).not.toHaveClass('Cell-lit');
    //     }
    // });
    // });

    // it('says that you won when you click the Box', function () {
    // // create a Box that can be completed in one click
    // const { queryByText, getAllByRole } = render(
    //     <Box nrows={1} ncols={3} chanceLightStartsOn={1} />,
    // );

    // // the game isn't won yet
    // expect(queryByText('You Win!')).not.toBeInTheDocument();

    // // clicking on the middle cell wins the game
    // const cells = getAllByRole('button');
    // fireEvent.click(cells[1]);
    // expect(queryByText('You Win!')).toBeInTheDocument();
    // });

