import { render } from '@testing-library/svelte';

import Header from './Header.svelte';

describe('Header', () => {
    describe('search bar', () => {
        it('has the correct placeholder text', () => {
            const {getByPlaceholderText} = render(Header);
            const searchBar = getByPlaceholderText('Search...');
    
            expect(searchBar).toBeInTheDocument();
        });

        it('is a search input', () => {
            const {getByTestId} = render(Header);
            const searchBar = getByTestId('search-bar');

            expect(searchBar).toHaveAttribute('type', 'search');
        });
    });

    describe('search button', () => {
        it('has the correct label', () => {
            const {getByLabelText} = render(Header);
            const searchButton = getByLabelText('search');

            expect(searchButton).toBeInTheDocument();
        });

        it('displays a search icon', () => {
            const {getByRole} = render(Header);
            const searchButtonIcon = getByRole('presentation');

            expect(searchButtonIcon).toBeInTheDocument();
        });
    })
});
