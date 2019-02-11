import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import AboutMe from './MainPages/AboutMe'
import LandingPage from './MainPages/Landing'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={AboutMe} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
