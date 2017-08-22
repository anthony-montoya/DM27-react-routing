import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the main landing</h1>
        <p>So happy to see you friend :D</p>
        {/* Link is like an href tag */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/about/faq'>FAQ</Link>
        <Link to='/people'>People</Link>
        { router }
      </div>
    );
  }
}

export default App;
