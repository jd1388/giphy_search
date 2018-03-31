import React, { Component } from 'react';
import { Image, Transition } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Styles from '../styles/components/Gif';

export default class Gif extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: props.gifUrl.still,
            visible: true
        };
    }

    render() {
        const { native, gifUrl, style, displayMessage } = this.props;
        const { still, gif, source } = gifUrl;
        const { url, visible } = this.state;

        return (
            <Transition animation='pulse' duration={500} visible={visible}>
                <CopyToClipboard
                    style={Object.assign({}, Styles.gif, style)}
                    text={source}
                    onCopy={() => {
                        this.setState({ visible: !visible });
                        displayMessage();
                    }}
                >
                    <Image
                        src={url}
                        onMouseOver={() => this.setState({ url: native ? source : gif })}
                        onMouseOut={() => this.setState({ url: still })}
                    />
                </CopyToClipboard>
            </Transition>
        );
    }
}
