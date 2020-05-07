import { render } from '@testing-library/svelte';

import Content from './Content.svelte';

describe('Content', () => {
    it('renders', () => {
        const {getByTestId} = render(Content);
        const contentContainer = getByTestId('content');

        expect(contentContainer).toBeInTheDocument();
    });
});
