import './Clock.css';
import React, { Component } from 'react'

export default class Clock extends Component {
  state = {
    date: new Date()
  };

  /*constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }*/

  componentDidMount() {
    this.interval = setInterval(() => this.setState({date: new Date()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const theStyle = { backgroundColor: 'green' };
    return (
      <h4 className="clock" style={theStyle}>
        {this.state.date.toLocaleTimeString()}
      </h4>
    )
  }
}
