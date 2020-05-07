import {render} from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
    it('runs this test', () => {
        expect(true).toBeTruthy();
    });

    describe('header', () => {
        it('renders the header components', () => {
            const {getByTestId} = render(App);
            const header = getByTestId('header');

            expect(header).toBeInTheDocument();
        });
    });

    describe('content', () => {
        it('renders the content components', () => {
            const {getByTestId} = render(App);
            const content = getByTestId('content');

            expect(content).toBeInTheDocument();
        });
    });
});
