import React, { Component, Fragment } from 'react'
import SplashPage from 'components/SplashPage'
// import Aux from './hoc/Aux';
// import Nav from './components/common/Navbar';
import AppBar from './components/common/AppBar'

export class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar />
        <SplashPage />
      </Fragment>
    )
  }
}

export default App;
