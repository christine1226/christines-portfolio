import React, { Component } from 'react';
import './App.css';
import 'semantic-ui/dist/semantic.min.css';
import { Route, Switch} from 'react-router-dom'
import AllProjects from './proj-data'

import LandingPage from './MainPages/Landing'
import AboutMe from './MainPages/AboutMe'
import Projects from './MainPages/Projects'
import DisplayProject from './MainPages/DisplayProject'
import NoRoute from './MainPages/NoRoute'


class App extends Component {
  state={
    projects: AllProjects
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path ="/bio" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route exact path='/project/1' render={(props) => <DisplayProject {...props} location={this.state.projects[0]} />} />
          <Route exact path="/project/2" render={(props) => <DisplayProject {...props} location={this.state.projects[1]} />} />
          <Route exact path="/project/3" render={(props) => <DisplayProject {...props} location={this.state.projects[2]} />} />
          <Route exact path="/project/4" render={(props) => <DisplayProject {...props} location={this.state.projects[3]} />} />
          <Route component={NoRoute} />
        </Switch>
        <LandingPage />
      </div>
    );
  }
}

export default App;
