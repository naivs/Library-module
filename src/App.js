import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout'
import Book from './components/Book'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout/>
            </div>
        );
    }
}

export default App;
