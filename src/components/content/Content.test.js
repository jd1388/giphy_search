import { render } from '@testing-library/svelte';

import Content from './Content.svelte';

describe('Content', () => {
    it('renders', () => {
        const { getByTestId } = render(Content);
        const contentContainer = getByTestId('content');

        expect(contentContainer).toBeInTheDocument();
    });

    it('displays trending', () => {
        const { getByText } = render(Content);
        const trendingContainer = getByText('Trending');

        expect(trendingContainer).toBeVisible();
    });

    it('displays random', () => {
        const { getByText } = render(Content);
        const randomContainer = getByText('Random');

        expect(randomContainer).toBeVisible();
    });

    it('displays search', () => {
        const { getByText } = render(Content);
        const searchContainer = getByText('Search');

        expect(searchContainer).toBeVisible();
    });
});
