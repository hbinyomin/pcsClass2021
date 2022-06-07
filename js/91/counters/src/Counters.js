import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map(counter => <Counter key={counter.id} counter={counter} increment={this.props.increment}/>)}
      </div>
    )
  }
}
