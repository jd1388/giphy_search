export const getTrendingGifs = () => {
    const testGif = {
        gif: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/100.gif',
        source: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/giphy.gif',
        still: 'https://media0.giphy.com/media/fUA19fi3gRyxmpLb8I/100_s.gif'
    };
    const testGifs = [...new Array(50)].fill(testGif);

    return Promise.resolve(testGifs);
};
