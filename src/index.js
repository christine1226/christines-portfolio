import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import LandingPage from './MainPages/Landing'
import AboutMe from './MainPages/AboutMe'
import Projects from './MainPages/Projects'
import Contact from './MainPages/Contact'
import DisplayProject from './MainPages/DisplayProject'
import NoRoute from './MainPages/NoRoute'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path ="/bio" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/project" component={DisplayProject} />
      <Route component={NoRoute} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
