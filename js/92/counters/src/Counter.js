import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
  /*state = {
    count: this.props.counter.count
  }*/

  /*increment = () => {
    this.setState({
      count: this.state.count + 1
    });
    this.props.counter.count = this.props.counter.count + 1;
  }*/

  handleIncrement = () => {
    this.props.increment(this.props.counter);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>{this.props.counter.count}</button>
      </div>
    )
  }
}
