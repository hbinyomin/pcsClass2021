import React, { PureComponent } from 'react'
import Counter from './Counter'

export default class Counters extends PureComponent {
  render() {
    return (
      <div>
        {this.props.counters.map(counter => <Counter key={counter.id} counter={counter} increment={this.props.increment}/>)}
      </div>
    )
  }
}
