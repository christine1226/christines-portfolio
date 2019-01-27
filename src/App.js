import React, { Component } from 'react';
import './App.css';
import 'semantic-ui/dist/semantic.min.css';
import LandingPage from './MainPages/Landing'


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
