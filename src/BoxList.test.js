import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

describe('<BoxList /> rendering', function () {
    describe('inital BoxList', function () {
        it('renders without crashing', function () {
        render(<BoxList />);
        });

        it('matches snapshot', function () {
        const { asFragment } = render(<BoxList />);
        expect(asFragment()).toMatchSnapshot();
        });

    });
});

describe('delete box', function () {
    it('delete box', function () {
        const boxList = render(<BoxList />);

        const btn = boxList.queryByText('x');
      
        // Assert that the box is initially in the document
        // const box = boxList.querySelector('.Box');
      
        // Click on the delete button
        fireEvent.click(btn);

        // box to not be on List
        expect(btn).not.toBeInTheDocument();

    });
});


describe('create box', function () {
    it('create box', function () {
        const { getByLabelText,getByPlaceholderText, queryByText, container } = render(<BoxList />);
        
        const heightInput = getByPlaceholderText('height')
        const widthInput = getByPlaceholderText('width')
        const colorInput = getByPlaceholderText('color')
        const button = queryByText('Submit')

        fireEvent.change(heightInput, {target: {value: '50px'}})
        fireEvent.change(widthInput, {target: {value: '50px'}})
        fireEvent.change(colorInput, {target: {value: 'green'}})

        fireEvent.click(button)

        expect(container.querySelectorAll('.Box')).toHaveLength(2)


    });
});


