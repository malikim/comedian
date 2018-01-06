import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import configureStore, {history} from "./store";
import Root from './root'


const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

ReactDOM.render(
  <AppContainer>
      <Root store={store} history={history}/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept("./root", () => {
      const NewRoot = require("./root").default;
      ReactDOM.hydrate(
          <AppContainer>
              <NewRoot  store={store} history={history}/>
          </AppContainer>,
          document.getElementById("app")
      )
  });
}