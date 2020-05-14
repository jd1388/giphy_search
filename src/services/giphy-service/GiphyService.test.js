import Chance from 'chance';

import { getTrendingGifs } from './GiphyService';

describe('Giphy Service', () => {
    const chance = new Chance();
    const createRandomGifData = () => ({
        images: {
            fixed_height_small: {
                url: chance.url()
            },
            fixed_height_small_still: {
                url: chance.url()
            },
            original: {
                url: chance.url()
            }
        }
    });

    global.fetch = jest.fn();

    describe('getTrendingGifs', () => {
        const fakeGifsData = {
            data: chance.n(createRandomGifData, 50)
        };
        const getFakeGifs = () => Promise.resolve(fakeGifsData);
        const fakeFetchResponse = Promise.resolve({
            json: getFakeGifs
        });

        beforeEach(() => {
            global.fetch.mockResolvedValueOnce(fakeFetchResponse);
        });

        it('gets the top 100 trending gifs from giphy', async () => {
            await getTrendingGifs();

            const expectedGiphyTrendingRoute = 'https://api.giphy.com/v1/gifs/trending?api_key=rgA4LYZjZAvQy5xlghCw1oJ6mnkAQ4HJ&limit=100';

            expect(global.fetch).toHaveBeenCalledWith(expectedGiphyTrendingRoute);
        });

        it('returns the trending gifs', async () => {
            const expectedGifs = fakeGifsData.data.map(gifData => ({
                gif: gifData.images.fixed_height_small.url,
                source: gifData.images.original.url,
                still: gifData.images.fixed_height_small_still.url
            }));
            const actualGifs = await getTrendingGifs();

            expect(actualGifs).toEqual(expectedGifs);
        });
    });
});
