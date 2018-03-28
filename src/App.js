import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

import Trending from './components/Trending';

import Screen from './enum/Screen';

import Styles from './styles/App';
import 'semantic-ui-css/semantic.min.css';

const NavBar = props => (
    <div style={Styles.navBarContainer}>
        <SearchBar
            style={Styles.searchBar}
            inverted
            setScreenToSearch={props.setScreenToSearch}
            setSearchQuery={props.setSearchQuery}
        />
        <CircleButton icon='fire' onClick={() => props.setScreenToTrending()}/>
        <CircleButton icon='random' onClick={() => props.setScreenToRandom()}/>
    </div>
);

const SearchBar = props => (
    <Input
        action={{ icon: 'search', onClick: () => props.setScreenToSearch() }}
        placeholder='Search...'
        style={props.style}
        inverted={props.inverted}
        onChange={event => props.setSearchQuery(event.target.value)}
    />
);

const CircleButton = props => (
    <Button circular style={Styles.circleButton} {...props}/>
);

class App extends Component {
    constructor() {
        super();

        this.state = {
            displayed: Screen.trending,
            search: ''
        };

        this.setScreenToSearch = this.setScreenToSearch.bind(this);
        this.setScreenToTrending = this.setScreenToTrending.bind(this);
        this.setScreenToRandom = this.setScreenToRandom.bind(this);
        this.setSearchQuery = this.setSearchQuery.bind(this);
    }

    setScreenToSearch() {
        this.setState({ displayed: Screen.search });
    }

    setScreenToTrending() {
        this.setState({ displayed: Screen.trending });
    }

    setScreenToRandom() {
        this.setState({ displayed: Screen.random });
    }

    setSearchQuery(query) {
        this.setState({ search: query });
    }

    render() {
        return (
            <div>
                <NavBar
                    setScreenToSearch={this.setScreenToSearch}
                    setScreenToTrending={this.setScreenToTrending}
                    setScreenToRandom={this.setScreenToRandom}
                    setSearchQuery={this.setSearchQuery}
                />
                <div style={Styles.mainContent}>
                    <Trending screen={this.state.displayed}/>
                </div>
            </div>
        );
    }
}

export default App;
