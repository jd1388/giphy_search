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
        const { native, gifUrl, style } = this.props;
        const { still, gif, source } = gifUrl;
        const { url } = this.state;

        return (
            <Image
                src={url}
                style={Object.assign({}, Styles.gif, style)}
                onMouseOver={() => this.setState({ url: native ? source : gif })}
                onMouseOut={() => this.setState({ url: still })}
            />
        );
    }
}
