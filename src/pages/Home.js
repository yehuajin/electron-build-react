import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class App extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <div>electron + React</div>
          <Link key='2' to='/page1'>questionnaire survey</Link>
        </header>
      </div>
    );
  }
}
export default App;
