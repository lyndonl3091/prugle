import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { Map } from 'immutable'
import rootReducer from './reducers'
import sagas from './sagas'
import * as routes from './routePaths'

import AppBar from './components/common/AppBar'

import ViewDeals from 'views/Deals/ViewDeals'
import AddDeal from 'views/Deals/AddDeal'
import App from './App'


const initialState = Map({})

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = applyMiddleware(logger, sagaMiddleware)

const enhancer = composeEnhancers(createStoreWithMiddleware)

const store = createStore(rootReducer, initialState, enhancer)

sagaMiddleware.run(sagas)
// import SignUp from '/components/auth/SignUp'


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div className="app">
          <AppBar />
          <Switch>
            <Route exact path={routes.toHome} component={App} />
            {/* <Route path={toSignUp} component={SignUp} /> */}
            <Route path={routes.toDeals} component={ViewDeals} />
            <Route path={routes.toAdd} component={AddDeal} />
          </Switch>
        </div>
      </Router>
  </Provider>
  </MuiThemeProvider>
  , document.getElementById('app'));
