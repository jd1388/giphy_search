import { render, fireEvent } from '@testing-library/svelte';
import { get } from 'svelte/store';

import { displayedView } from '../../stores';
import { Views } from '../../enums';

import Header from './Header.svelte';

describe('Header', () => {
    describe('Search Bar', () => {
        it('has the correct placeholder text', () => {
            const { getByPlaceholderText } = render(Header);
            const searchBar = getByPlaceholderText('Search...');
    
            expect(searchBar).toBeInTheDocument();
        });

        it('is a search input', () => {
            const { getByTestId } = render(Header);
            const searchBar = getByTestId('search-input');

            expect(searchBar).toHaveAttribute('type', 'search');
        });
    });

    describe('Search Button', () => {
        it('has the correct label', () => {
            const { getByLabelText } = render(Header);
            const searchButton = getByLabelText('search');

            expect(searchButton).toBeInTheDocument();
        });

        it('has the correct title', () => {
            const { getByTitle } = render(Header);
            const searchButton = getByTitle('Search');

            expect(searchButton).toBeInTheDocument();
        });

        it('displays a search icon', () => {
            const { getByTestId } = render(Header);
            const searchButtonIcon = getByTestId('search-icon');

            expect(searchButtonIcon).toBeInTheDocument();
        });

        it('changes the displayed view to SEARCH', () => {
            const { getByTestId } = render(Header);
            const searchButton = getByTestId('search-button');

            fireEvent.click(searchButton);

            expect(get(displayedView)).toEqual(Views.SEARCH);
        });
    });

    describe('Trending Button', () => {
        it('has the correct label', () => {
            const { getByLabelText } = render(Header);
            const trendingButton = getByLabelText('trending');

            expect(trendingButton).toBeInTheDocument();
        });

        it('has the correct title', () => {
            const { getByTitle } = render(Header);
            const trendingButton = getByTitle('Trending');

            expect(trendingButton).toBeInTheDocument();
        });

        it('displays a fire icon', () => {
            const { getByTestId } = render(Header);
            const trendingButtonIcon = getByTestId('trending-icon');

            expect(trendingButtonIcon).toBeInTheDocument();
        });

        it('changes the displayed view to TRENDING', () => {
            const { getByTestId } = render(Header);
            const trendingButton = getByTestId('trending-button');

            fireEvent.click(trendingButton);

            expect(get(displayedView)).toEqual(Views.TRENDING);
        });
    });

    describe('Random Button', () => {
        it('has the correct label', () => {
            const { getByLabelText } = render(Header);
            const randomButton = getByLabelText('random');

            expect(randomButton).toBeInTheDocument();
        });

        it('has the correct title', () => {
            const { getByTitle } = render(Header);
            const randomButton = getByTitle('Random');

            expect(randomButton).toBeInTheDocument();
        });

        it('displays a fire icon', () => {
            const { getByTestId } = render(Header);
            const randomButtonIcon = getByTestId('random-icon');

            expect(randomButtonIcon).toBeInTheDocument();
        });

        it('changes the displayed view to RANDOM', () => {
            const { getByTestId } = render(Header);
            const randomButton = getByTestId('random-button');

            fireEvent.click(randomButton);

            expect(get(displayedView)).toEqual(Views.RANDOM);
        });
    });
});
