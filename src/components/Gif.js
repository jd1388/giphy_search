import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import Styles from '../styles/components/Gif';

export default class Gif extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: props.gifUrl.still
        };
    }

    render() {
        const { still, gif } = this.props.gifUrl;
        const { url } = this.state;

        return (
            <Image
                src={url}
                style={Styles.gif}
                onMouseOver={() => this.setState({ url: gif })}
                onMouseOut={() => this.setState({ url: still })}
            />
        );
    }
}
