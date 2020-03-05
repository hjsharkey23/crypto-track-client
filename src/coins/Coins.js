import React, { Component, Fragment } from 'react'
// import axios from 'axios'
// import apiUrl from '../apiConfig'
import { Link, withRouter } from 'react-router-dom'
import { indexCoins } from './api'

// import Spinner from 'react-bootstrap/Spinner'

class Coins extends Component {
  constructor () {
    super()

    this.state = {
      coins: []
    }
  }
  componentDidMount () {
    const { user } = this.props

    indexCoins(user)
      .then(response => this.setState({
        coins: response.data.coins
      }))
      .catch(console.error)
  }

  render () {
    if (this.state.coins.length === 0) {
      return (
        <p>Add a coin!</p>
      )
    }

    return (
      <Fragment>
        <h4>Coins:</h4>
        <h5>{this.props.location.state ? this.props.location.state.message : '' }</h5>
        <ul>
          {this.state.coins.map(coin => (
            <li key={coin.id}>
              <Link to={'/coins/' + coin.id}>{coin.name}
              </Link></li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default withRouter(Coins)
