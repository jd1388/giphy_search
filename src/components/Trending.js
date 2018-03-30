import React, { Component } from 'react';
import { Loader, Header } from 'semantic-ui-react';

import Gif from './Gif';

import Screen from '../enum/Screen';
import Routes from '../enum/Routes';

import Styles from '../styles/components/Trending';

export default class Trending extends Component {
    constructor() {
        super();

        this.state = {
            refreshGifs: true,
            gifs: []
        };
    }

    parseGifData(giphyData) {
        const gifs = [];
        const gifData = giphyData.data;

        gifData.forEach(data => {
            gifs.push({
                gif: data.images.fixed_height_small.url,
                still: data.images.fixed_height_small_still.url,
                source: data.images.original.url
            })
        });

        this.setState({ gifs, refreshGifs: false });
    }

    getGifs() {
        const trendingRoute = Routes.trending({ limit: 100 });

        fetch(trendingRoute)
            .then(response => response.json())
            .then(data => this.parseGifData(data));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.update) {
            this.setState({ refreshGifs: true });
        }
    }

    render() {
        const { screen, displayMessage } = this.props;
        const { refreshGifs, gifs } = this.state;

        if (screen !== Screen.trending)
            return <div/>;
        else {
            if (refreshGifs) {
                this.getGifs();

                return (
                    <Loader active size='massive' inline='centered'/>
                );
            }

            const gifComponents = [];

            gifs.forEach(gifUrl => {
                gifComponents.push(<Gif key={gifUrl.gif} gifUrl={gifUrl} displayMessage={displayMessage}/>);
            });

            return (
                <div>
                    <Header size='huge' dividing>Trending</Header>
                    <div style={Styles.gifContainer}>{gifComponents}</div>
                </div>
            );
        }
    }
}
