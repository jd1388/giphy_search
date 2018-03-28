import React, { Component } from 'react';
import { Loader, Header } from 'semantic-ui-react';

import Gif from './Gif';

import Screen from '../enum/Screen';
import Routes from '../enum/Routes';

export default class Random extends Component {
    constructor() {
        super();

        this.state = {
            refresh: true,
            get: true,
            gif: {}
        };
    }

    parseGifData(giphyData) {
        const gifImages = giphyData.data.images;

        const gif = {
            gif: gifImages.fixed_height_small.url,
            still: gifImages.fixed_height_small_still.url,
            source: gifImages.source.url
        };

        this.setState({ gif, refresh: false });
    }

    getGif() {
        const randomRoute = Routes.random();

        fetch(randomRoute)
            .then(response => response.json())
            .then(data => this.parseGifData(data));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.update) {
            this.setState({ refresh: true, get: true });
        }
    }

    render() {
        const { screen } = this.props;
        const { refresh, gif, get } = this.state;

        if (screen !== Screen.random)
            return <div/>;

        if (refresh) {
            if (get)
                this.getGif();

            return (
                <Loader active size='massive'/>
            );
        }

        return (
            <div>
                <Header size='huge' dividing>Random</Header>
                <Gif gifUrl={gif}/>
            </div>
        )
    }

    componentDidUpdate() {
        if (this.state.get) {
            this.setState({ get: false });
        }
    }
}
