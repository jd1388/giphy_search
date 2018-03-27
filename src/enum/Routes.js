const createRequest = (endpoint, args) => {
    let url = `https://${process.env.REACT_APP_GIPHY_HOST}${endpoint}?api_key=${process.env.REACT_APP_GIPHY_KEY}`;

    if (!args)
        return url;

    const variables = Object.keys(args);

    variables.forEach(variable => url = `${url}&${variable}=${args[variable]}`);

    return url;
};

export default {
    trending: args => createRequest(process.env.REACT_APP_GIPHY_TRENDING_ENDPOINT, args),
    search: args => createRequest(process.env.REACT_APP_GIPHY_SEARCH_ENDPOINT, args),
    random: args => createRequest(process.env.REACT_APP_GIPHY_RANDOM_ENDPOINT, args),
};
