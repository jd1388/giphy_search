import {render} from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
    it('runs this test', () => {
        expect(true).toBeTruthy();
    });

    describe('header', () => {
        it('renders the header components', () => {
            const {getByTestId} = render(App);
            const searchBar = getByTestId('search-bar');

            expect(searchBar).toBeInTheDocument();
        });
    });
});
