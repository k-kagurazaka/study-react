import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="App">
                <h2>Click Counter</h2>
                <div>Count: {this.state.count}</div>
                <button type="button" onClick={this.onClick}>Click me!</button>
            </div>
        );
    }
}

export default App;
