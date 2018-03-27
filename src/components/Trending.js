import React, { Component } from 'react';

import Screen from '../enum/Screen';

export default class Trending extends Component {
    render() {
        const { screen } = this.props;

        if (screen !== Screen.trending)
            return <div/>;

        return (
            <div>Hello, I'm trending!!!</div>
        );
    }
}
