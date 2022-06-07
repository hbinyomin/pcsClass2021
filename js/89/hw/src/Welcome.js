import React, { Component } from 'react';

export default function Welcome(props) {
  return (
    <div>
      Hello {props.name}, Welcome to React!
    </div>
  );
}

export class WelcomeC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 100,
      foo: 'bar'
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000);

    this.interval = setInterval(() => {
      this.setState({ count2: this.state.count2 - 1 })
    }, 2000);
  }

  componentWillUnmount() {
    console.log('welcome component unmounting');
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Hello {this.props.name}, Welcome to React! - {this.state.count} {this.state.foo} {this.state.count2}
      </div>
    )
  }
}