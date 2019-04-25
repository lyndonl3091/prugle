import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createSagaMiddleware from 'redux-saga'
import { Map } from 'immutable'
import rootReducer from './reducers'
import sagas from './sagas'
import * as routes from './routePaths'

const initialState = Map()
// const initialState = []

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, initialState, createStoreWithMiddleware)

// import SignUp from '/components/auth/SignUp'
import { ViewDeals } from 'pages/Deals'
import App from './App'

sagaMiddleware.run(sagas)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={routes.toHome} component={App} />
          {/* <Route path={toSignUp} component={SignUp} /> */}
          <Route path={routes.toDeals} component={ViewDeals} />
        </Switch>
      </Router>
  </Provider>
  </MuiThemeProvider>
  , document.getElementById('app'));


// ReactDOM.render(<App />, document.getElementById("app"))