import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    current: '0'
  }

  handleInput = (e) => {
    this.setState({
      current: e.target.value
    });
  }

  calculate() {
    const left = Number(this.state.last);
    const right = Number(this.state.current);
    let answer;
    switch (this.state.operator) {
      case '+':
        answer = left + right;
        break;
      case '-':
        answer = left - right;
        break;
      case '*':
        answer = left * right;
        break;
      case '/':
        answer = left / right;
        break;
      default:
        //console.error('Unknown operator...');
        return;
    }

    this.setState({
      last: '',
      operator: null,
      current: answer.toString()
    });
  }

  handleClick(btn) {
    // console.log('clicked', this, btn);
    switch (btn) {
      case '*':
      case '/':
      case '-':
      case '+':
        this.setState({
          last: this.state.current,
          operator: btn,
          current: ''
        })
        break;
      case '=':
        this.calculate();
        break;
      case 'C':
        this.setState({
          last: '',
          current: '0',
          operator: null
        })
        break;
      case '.':
        if (this.state.current.includes('.')) {
          break;
        }
        // falls through
      default:
        this.setState({
          current: (this.state.current !== '0' ? this.state.current : '') + btn
        })
        break;
    }
  }

  render() {
    return (
      <div className="calculator">
        <input value={this.state.current} onChange={this.handleInput}/>
        {
          [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', '.', '0', 'C', '/', '='].map(btn => <button key={btn} onClick={() => this.handleClick(btn)}>{btn}</button>)
        }
      </div>
    );
  }
}

export default App;
