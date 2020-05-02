import {render} from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
    it('runs this test', () => {
        expect(true).toBeTruthy();
    });

    it('renders', () => {
        const {getByText} = render(App);
        const headerText = getByText('Hello Jared!');

        expect(headerText).toBeDefined();
    });
});
