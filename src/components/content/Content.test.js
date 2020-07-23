import { render } from '@testing-library/svelte';

import { displayedView } from '../../stores';

import Content from './Content.svelte';
import { Views } from '../../enums';

describe('Content', () => {
    it('renders', () => {
        const { getByTestId } = render(Content);
        const contentContainer = getByTestId('content');

        expect(contentContainer).toBeInTheDocument();
    });

    it('displays trending when it is the displayed view', () => {
        displayedView.set(Views.TRENDING);

        const { getByTestId, queryByText, queryByTestId } = render(Content);
        const trendingContainer = getByTestId('trending-container');
        const randomContainer = queryByText('Random');
        const searchContainer = queryByTestId('search-results-container');

        expect(trendingContainer).toBeVisible();
        expect(randomContainer).not.toBeInTheDocument();
        expect(searchContainer).not.toBeInTheDocument();
    });

    it('displays random', () => {
        displayedView.set(Views.RANDOM);

        const { getByText, queryByTestId } = render(Content);
        const randomContainer = getByText('Random');
        const trendingContainer = queryByTestId('trending-container');
        const searchContainer = queryByTestId('search-results-container');

        expect(randomContainer).toBeVisible();
        expect(trendingContainer).not.toBeInTheDocument();
        expect(searchContainer).not.toBeInTheDocument();
    });

    it('displays search', () => {
        displayedView.set(Views.SEARCH);

        const { getByTestId, queryByTestId, queryByText } = render(Content);
        const searchContainer = getByTestId('search-results-container');
        const trendingContainer = queryByTestId('trending-container');
        const randomContainer = queryByText('Random');

        expect(searchContainer).toBeVisible();
        expect(trendingContainer).not.toBeInTheDocument();
        expect(randomContainer).not.toBeInTheDocument();
    });
});
