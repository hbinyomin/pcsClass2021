import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: '',
    age: 21,
    email: 'jbiden@whitehouse.gov'
  };

  /*handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };*/

  handleInputChange = (event) => {
    //const newState = {};
    //newState[event.target.name] = event.target.value;
    //this.setState(newState);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>PCS Class</h1>
        <form onSubmit={this.handleSubmit}>
          Name: <input name="name" required value={this.state.name} onChange={/*this.handleNameChange*/this.handleInputChange}/><br/>
          Age: <input name="age" type="number" min="0" max="120" required value={this.state.age} onChange={/*this.handleAgeChange*/this.handleInputChange} /><br />
          Email: <input name="email" type="email" required value={this.state.email} onChange={/*this.handleEmailChange*/this.handleInputChange} /><br />
          <button>register!</button>
        </form>
      </div>
    )
  }
}
