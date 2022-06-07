import './App.css';
import React, { Component } from 'react';
import Counters from './Counters';
import Total from './Total';

class App extends Component {
  state = {
    counters: [
      { id: 1, count: 4 },
      { id: 2, count: 0 }
    ]
  }

  increment = (counter) => {
    counter.count = counter.count + 1;

    this.setState({
      counters: this.state.counters
    });
  }

  render() {
    return (
      <div>
        <Total total={this.state.counters.reduce((pv, cv) => pv + cv.count, 0)}/>
        <Counters counters={this.state.counters} increment={this.increment}/>
      </div>
    );
  }
}

export default App;
