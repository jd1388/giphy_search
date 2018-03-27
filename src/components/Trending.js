import React from 'react';

import Screen from '../enum/Screen';

const Trending = props => {
    const { screen } = props;

    if (screen !== Screen.trending)
        return <div/>;

    return (
        <div>Hello, I'm trending!!!</div>
    );
};

export default Trending;
