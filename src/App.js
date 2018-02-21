import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

import Screen from './enum/Screen';

import Styles from './styles/App';
import 'semantic-ui-css/semantic.min.css';

const NavBar = () => (
    <div style={Styles.navBarContainer}>
        <SearchBar style={Styles.searchBar} inverted/>
        <CircleButton icon='fire'/>
        <CircleButton icon='random'/>
    </div>
);

const SearchBar = props => (
    <Input icon='search' placeholder='Search...' {...props}/>
);

const CircleButton = props => (
    <Button circular {...props}/>
);

class App extends Component {
    constructor() {
        super();

        this.state = {
            displayed: Screen.trending
        }
    }

    render() {
        return (
            <div>
                <NavBar/>
            </div>
        );
    }
}

export default App;
