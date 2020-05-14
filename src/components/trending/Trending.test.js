import Chance from 'chance';
import { render } from '@testing-library/svelte';

import { getTrendingGifs } from '../../services/giphy-service/GiphyService';

import Trending from './Trending.svelte';

jest.mock('../../services/giphy-service/GiphyService');

describe('Trending', () => {
    const chance = new Chance();
    const createFakeGif = () => ({
        gif: chance.url(),
        source: chance.url(),
        still: chance.url() 
    });
    const fakeGifs = chance.n(createFakeGif, 50);

    getTrendingGifs.mockResolvedValue(fakeGifs);

    it('should display a "Trending" header', () => {
        const { getByText } = render(Trending);
        const trendingHeader = getByText('Trending');

        expect(trendingHeader).toBeVisible();
    });

    it('should display a loading spinner while loading gifs', () => {
        const loadingGifs = new Promise((resolve) => {
            setTimeout(resolve, 10000)
        });
        getTrendingGifs.mockResolvedValueOnce(loadingGifs);

        const { getByTestId } = render(Trending);
        const loadingSpinner = getByTestId('loading-trending');

        expect(loadingSpinner).toBeVisible();
    });

    it('should display the trending gifs after loading', async () => {
        const { findAllByTestId, queryByTestId } = render(Trending);
        const trendingGifs = await findAllByTestId('trending-gif');
        const loadingSpinner = queryByTestId('loading-trending');

        trendingGifs.forEach(trendingGif => {
            expect(trendingGif).toBeVisible();
        });
        expect(loadingSpinner).not.toBeInTheDocument();
    });
});
