import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.appReducer
    }
}

export default connect(mapStateToProps)(App);
