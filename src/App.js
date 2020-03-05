import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './layout/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

// import Layout from './layout/Layout'
import Coins from './coins/Coins'
import Coin from './coins/Coin'
import CoinCreate from './coins/CoinCreate'
import CoinEdit from './coins/CoinEdit'
import Home from './Home'

// import Alert from 'react-bootstrap/Alert'
import { AlertList } from 'react-bs-notifier'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      timeout: 2000,
      position: 'bottom-left'
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  // alert = (message, type) => {
  //   this.setState({ alerts: [...this.state.alerts, { message, type }] })
  // }

  alert = (message, type, headline = '', timeout = 2000) => {
    const newAlert = {
      id: (new Date()).getTime(),
      type: type,
      headline: headline,
      message: message
    }

    this.setState(prevState => ({
      alerts: [...prevState.alerts, newAlert]
    }), () => {
      setTimeout(() => {
        const index = this.state.alerts.indexOf(newAlert)
        if (index >= 0) {
          this.setState(prevState => ({
            // remove the alert from the array
            alerts: [...prevState.alerts.slice(0, index), ...prevState.alerts.slice(index + 1)]
          }))
        }
      }, timeout)
    })
  }

  render () {
    const { alerts, user, timeout, position } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        <AlertList
          position={position}
          alerts={alerts}
          timeout={timeout}
        />
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/coins' render={() => (
            <Coins alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/coin-create' render={() => (
            <CoinCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/coins/:id' render={({ match }) => (
            <Coin alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/coins/:id/edit' render={({ match }) => (
            <CoinEdit alert={this.alert} user={user} />
          )} />
          <Route exact path='/' render={() => (
            <Home />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
