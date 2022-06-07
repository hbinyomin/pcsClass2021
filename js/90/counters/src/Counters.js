import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
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
        {this.state.counters.map(counter => <Counter key={counter.id} counter={counter} increment={this.increment}/>)}
      </div>
    )
  }
}
