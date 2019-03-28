import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import SignUp from './components/auth/SignUp'
import reducers from './reducers';
import { toHome, toLogin, toSignUp } from './routePaths'

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <Switch>
          <Route exact path={toHome} component={App} />
          <Route path={toSignUp} component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));
