import './App.css';
import React, { Component } from 'react';
import Welcome, { WelcomeC } from './Welcome';
import Clock from './Clock';
import Student from './Student';

class App extends Component {
  /*state = {
    count: 0
  };*/

  /*componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }*/

  state = {
    students: [
      {
        //id: 1,
        name: 'Joe',
        address: {
          street: '1600 Pennsylvania Ave',
          city: 'Washington',
          state: 'D.C',
          zip: '12345'
        }
      },
      {
        //id: 1,
        name: 'Joe',
        address: {
          street: '1600 Pennsylvania Ave',
          city: 'Washington',
          state: 'D.C',
          zip: '12345'
        }
      },
      {
        //id:2,
        name: 'Kamala',
        address: {
          street: '1400 Pennsylvania Ave',
          city: 'Washington',
          state: 'D.C',
          zip: '12345'
        }
      }
    ]
  }

  getTheStudentsJsx() {
    return this.state.students.map((student, index) => <Student student={student} key={/*student.id*//*index*/student.name}/>);
  }

  render() {
    //const theStudents = this.state.students.map(student => <Student student={student} />);

    return (
      <div>
        <h4>Hello World!</h4> {/*this.state.count*/}
        <Welcome name="Joe" />
        <Welcome name="Kamala" />

        {/*this.state.count < 10 || this.state.count > 20 ? <WelcomeC name="Joe" /> : <div>Component should have unmounted</div>*/}
        <WelcomeC name="Joe" />
        <WelcomeC name="Kamala" />
        <Clock />

        {/*<Student student={this.state.students[0]} />
        <Student student={this.state.students[1]} />*/}

        {/*this.state.students.map(student => <Student student={student} />)*/}

        {/*theStudents*/}

        {this.getTheStudentsJsx()}
      </div>
    );
  }
}

export default App;
