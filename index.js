import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bulma/css/bulma.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <section className="section">
       Welcome to Reactjs application
      </section>
    );
  }
}

render(<App />, document.getElementById('root'));
