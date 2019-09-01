import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import { Redirect } from 'react-router'
// import { Link } from 'react-router-dom'

// import Spinner from 'react-bootstrap/Spinner'

import { deleteCoin } from './api'

class Coin extends Component {
  constructor () {
    super()

    this.state = {
      coin: null,
      shouldRedirect: false
    }
  }

  componentDidMount () {
    console.log(this.props)
    const id = this.props.match.params.id
    axios.get(`${apiUrl}/coins/${id}`)
      .then(response => this.setState({ coin: response.data.coin }))
      .catch(console.log)

    // deleteCoin(user)
    //   .then(() => this.setState({ shouldRedirect: true }))
    //   .catch(console.log)
  }

  // deleteCoin = () => {
  //   axios.delete(`${apiUrl}/coins/${this.state.coin.id}`)
  //     .then(() => this.setState({ shouldRedirect: true }))
  //     .catch(console.log)
  // }

  handleDeleteCoin = () => {
    const { user } = this.props
    const { id } = this.props.match.params

    deleteCoin(user, id)
      .then(() => console.log('deleted'))
      .catch(console.error)
  }

  render () {
    if (!this.state.coin) {
      return (
        <p>...</p>
      )
    }

    if (this.state.shouldRedirect) {
      return <Redirect to={{
        pathname: '/coins', state: { message: 'Successfully deleted coin!' }
      }}/>
    }

    const { name, quantity } = this.state.coin

    return (
      <Fragment>
        <h4>{name}</h4>
        <p>Quantity: {quantity}</p>
        <button onClick={this.handleDeleteCoin}>Delete</button>
      </Fragment>
    )
  }
}

export default Coin
