import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import LandingPage from './MainPages/Landing'
import Projects from './MainPages/Projects'
import Contact from './MainPages/Contact'
import DisplayProject from './MainPages/DisplayProject'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/project" component={DisplayProject} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
