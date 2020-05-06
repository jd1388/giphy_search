import { render } from '@testing-library/svelte';

import Header from './Header.svelte';

describe('Header', () => {
    describe('Search Bar', () => {
        it('has the correct placeholder text', () => {
            const {getByPlaceholderText} = render(Header);
            const searchBar = getByPlaceholderText('Search...');
    
            expect(searchBar).toBeInTheDocument();
        });

        it('is a search input', () => {
            const {getByTestId} = render(Header);
            const searchBar = getByTestId('search-input');

            expect(searchBar).toHaveAttribute('type', 'search');
        });
    });

    describe('Search Button', () => {
        it('has the correct label', () => {
            const {getByLabelText} = render(Header);
            const searchButton = getByLabelText('search');

            expect(searchButton).toBeInTheDocument();
        });

        it('has the correct title', () => {
            const {getByTitle} = render(Header);
            const searchButton = getByTitle('Search');

            expect(searchButton).toBeInTheDocument();
        });

        it('displays a search icon', () => {
            const {getByTestId} = render(Header);
            const searchButtonIcon = getByTestId('search-icon');

            expect(searchButtonIcon).toBeInTheDocument();
        });
    });

    describe('Trending Button', () => {
        it('has the correct label', () => {
            const {getByLabelText} = render(Header);
            const trendingButton = getByLabelText('trending');

            expect(trendingButton).toBeInTheDocument();
        });

        it('has the correct title', () => {
            const {getByTitle} = render(Header);
            const trendingButton = getByTitle('Trending');

            expect(trendingButton).toBeInTheDocument();
        });

        it('displays a fire icon', () => {
            const {getByTestId} = render(Header);
            const trendingButtonIcon = getByTestId('trending-icon');

            expect(trendingButtonIcon).toBeInTheDocument();
        });
    });

    // describe.todo('Random Button');
});
