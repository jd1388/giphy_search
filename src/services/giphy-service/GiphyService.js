export const getTrendingGifsOld = () => {
    const testGif = {
        gif: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/100.gif',
        source: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/giphy.gif',
        still: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/100_s.gif'
    };
    const testGifs = [...new Array(50)].fill(testGif);

    return Promise.resolve(testGifs);
};

const mapGifDataToGifObject = gifData => ({
    gif: gifData.images.fixed_height_small.url,
    source: gifData.images.original.url,
    still: gifData.images.fixed_height_small_still.url,
    title: gifData.title
});

export const getTrendingGifs = async () => {
    const trendingRoute = 'https://api.giphy.com/v1/gifs/trending?api_key=rgA4LYZjZAvQy5xlghCw1oJ6mnkAQ4HJ&limit=100';
    const trendingGifsResponse = await fetch(trendingRoute);
    const trendingGifsData = await trendingGifsResponse.json();
    
    return trendingGifsData.data.map(mapGifDataToGifObject);
};

export const getGifsForSearchTerm = async (searchTerm) => {
    const searchRoute = `https://api.giphy.com/v1/gifs/search?api_key=rgA4LYZjZAvQy5xlghCw1oJ6mnkAQ4HJ&q=${searchTerm}&limit=100`;
    const searchGifsResponse = await fetch(searchRoute);
    const searchGifsData = await searchGifsResponse.json();
    
    return searchGifsData.data.map(mapGifDataToGifObject);
};
