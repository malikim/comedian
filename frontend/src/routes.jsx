import React from 'react';
import {Switch, Route, Redirect } from "react-router-dom";

import HomePageContainer from './containers/HomePageContainer';
import ProjectsPageContainer from './containers/ProjectsPageContainer';
import UsersPageContainer from './containers/UsersPageContainer';

import 'assets/styles/index.scss';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={HomePageContainer}/>
          <Route exact path="/projects" component={ProjectsPageContainer}/>
          <Route exact path="/users" component={UsersPageContainer}/>
      </Switch>
    );
  }
}

export default Routes;
