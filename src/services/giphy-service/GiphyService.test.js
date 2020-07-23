import Chance from 'chance';

import { getTrendingGifs, getGifsForSearchTerm } from './GiphyService';

describe('Giphy Service', () => {
    global.fetch = jest.fn();

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
        },
        title: chance.sentence()
    });

    const fakeGifsData = {
        data: chance.n(createRandomGifData, 50)
    };
    const getFakeGifs = () => Promise.resolve(fakeGifsData);
    const fakeFetchResponse = Promise.resolve({
        json: getFakeGifs
    });

    beforeEach(() => {
        fetch.mockClear();
        fetch.mockResolvedValueOnce(fakeFetchResponse);
    });

    describe('getTrendingGifs', () => {
        it('gets the top 100 trending gifs from giphy', async () => {
            await getTrendingGifs();

            const expectedGiphyTrendingRoute = 'https://api.giphy.com/v1/gifs/trending?api_key=rgA4LYZjZAvQy5xlghCw1oJ6mnkAQ4HJ&limit=100';

            expect(fetch).toHaveBeenCalledWith(expectedGiphyTrendingRoute);
        });

        it('returns the trending gifs', async () => {
            const expectedGifs = fakeGifsData.data.map(gifData => ({
                gif: gifData.images.fixed_height_small.url,
                source: gifData.images.original.url,
                still: gifData.images.fixed_height_small_still.url,
                title: gifData.title
            }));
            const actualGifs = await getTrendingGifs();

            expect(actualGifs).toEqual(expectedGifs);
        });
    });

    describe('getGifsForSearchTerm', () => {
        const fakeSearchTerm = chance.word();

        it('gets the first 100 results for the search term', async () => {
            await getGifsForSearchTerm(fakeSearchTerm);

            const expectedGiphySearchRoute = `https://api.giphy.com/v1/gifs/search?api_key=rgA4LYZjZAvQy5xlghCw1oJ6mnkAQ4HJ&q=${fakeSearchTerm}&limit=100`;

            expect(fetch).toHaveBeenCalledWith(expectedGiphySearchRoute);
        });

        it('returns the gifs matching the search term', async () => {
            const expectedGifs = fakeGifsData.data.map(gifData => ({
                gif: gifData.images.fixed_height_small.url,
                source: gifData.images.original.url,
                still: gifData.images.fixed_height_small_still.url,
                title: gifData.title
            }));
            const actualGifs = await getGifsForSearchTerm(fakeSearchTerm);

            expect(actualGifs).toEqual(expectedGifs);
        });
    });
});
