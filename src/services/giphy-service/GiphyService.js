export const getTrendingGifsOld = () => {
    const testGif = {
        gif: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/100.gif',
        source: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/giphy.gif',
        still: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/100_s.gif'
    };
    const testGifs = [...new Array(50)].fill(testGif);

    return Promise.resolve(testGifs);
};

export const getTrendingGifs = async () => {
    const trendingRoute = 'https://api.giphy.com/v1/gifs/trending?api_key=rgA4LYZjZAvQy5xlghCw1oJ6mnkAQ4HJ&limit=100';
    const trendingGifsResponse = await fetch(trendingRoute);
    const trendingGifsData = await trendingGifsResponse.json();
    
    return trendingGifsData.data.map(trendingGifData => ({
        gif: trendingGifData.images.fixed_height_small.url,
        source: trendingGifData.images.original.url,
        still: trendingGifData.images.fixed_height_small_still.url
    }));
};
