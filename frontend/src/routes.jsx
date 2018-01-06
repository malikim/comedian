import React from 'react';
import {Switch, Route } from "react-router-dom";

import HomePage from './containers/HomePageContainer';

import 'assets/styles/index.scss';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={HomePage}/>
      </Switch>
    );
  }
}

export default Routes;
