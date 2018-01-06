import React from 'react';
import {Switch, Route, Redirect } from "react-router-dom";

import HomePage from './containers/HomePageContainer';
import ProjectsPageContainer from './containers/ProjectsPageContainer';

import 'assets/styles/index.scss';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/projects" component={ProjectsPageContainer}/>
      </Switch>
    );
  }
}

export default Routes;
