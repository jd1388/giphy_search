import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

import Trending from './components/Trending';
import Search from './components/Search';

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
        <CircleButton
            active={props.activeScreen === Screen.trending}
            icon='fire'
            onClick={() => props.setScreenToTrending()}
        />
        <CircleButton
            active={props.activeScreen === Screen.random}
            icon='random'
            onClick={() => props.setScreenToRandom()}
        />
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
    <Button
        circular
        style={props.active ? Object.assign({}, Styles.circleButton, { color: '#FF6F00' }) : Styles.circleButton}
        icon={props.icon}
        onClick={props.onClick}
    />
);

class App extends Component {
    constructor() {
        super();

        this.state = {
            displayed: Screen.trending,
            search: '',
            updateSearch: false,
            serachToSend: '',
            updateTrending: false
        };

        this.setScreenToSearch = this.setScreenToSearch.bind(this);
        this.setScreenToTrending = this.setScreenToTrending.bind(this);
        this.setScreenToRandom = this.setScreenToRandom.bind(this);
        this.setSearchQuery = this.setSearchQuery.bind(this);
    }

    setScreenToSearch() {
        this.setState({ displayed: Screen.search, updateSearch: true, searchToSend: this.state.search });
    }

    setScreenToTrending() {
        this.setState({ displayed: Screen.trending, updateTrending: true });
    }

    setScreenToRandom() {
        this.setState({ displayed: Screen.random });
    }

    setSearchQuery(query) {
        this.setState({ search: query });
    }

    render() {
        const { displayed, searchToSend, updateSearch, updateTrending } = this.state;

        return (
            <div>
                <NavBar
                    setScreenToSearch={this.setScreenToSearch}
                    setScreenToTrending={this.setScreenToTrending}
                    setScreenToRandom={this.setScreenToRandom}
                    setSearchQuery={this.setSearchQuery}
                    activeScreen={displayed}
                />
                <div style={Styles.mainContent}>
                    <Trending screen={displayed} update={updateTrending}/>
                    <Search screen={displayed} search={searchToSend} update={updateSearch}/>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        if (this.state.updateSearch) {
            this.setState({ updateSearch: false });
        }

        if (this.state.updateTrending) {
            this.setState({ updateTrending: false });
        }
    }
}

export default App;
