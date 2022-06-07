import './App.css';
import React, { PureComponent } from 'react';
import Counters from './Counters';
import Total from './Total';

class App extends PureComponent {
  /*state = {
    counters: [
      { id: 1, count: 4 },
      { id: 2, count: 0 }
    ]
  }*/

  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { id: 1, count: 4 },
        { id: 2, count: 0 }
      ]
    };

    this.state.counters.forEach(counter => Object.freeze(counter));
    Object.freeze(this.state.counters);
  }

  increment = (counter) => {
    const counterCopy = { ...counter, count: counter.count + 1 };
    Object.freeze(counterCopy);

    const countersCopy = [...this.state.counters];
    countersCopy[this.state.counters.indexOf(counter)] = counterCopy;
    Object.freeze(countersCopy);

    this.setState({
      counters: countersCopy
    });
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    return nextState.counters !== this.state.counters;
  }*/

  render() {
    return (
      <div>
        <Total total={this.state.counters.reduce((pv, cv) => pv + cv.count, 0)} />
        <Counters counters={this.state.counters} increment={this.increment} />
      </div>
    );
  }
}

export default App;
