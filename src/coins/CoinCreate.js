import React, { Component } from 'react'
// import axios from 'axios'
// import apiUrl from '../apiConfig'
import { Redirect } from 'react-router'

import CoinForm from './CoinForm'

import { createCoin } from './api'

class CoinCreate extends Component {
  constructor () {
    super()

    this.state = {
      coin: {},
      created: false,
      message: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { coin } = this.state
    const { user } = this.props

    createCoin(user, coin)
      .then(response => this.setState({
        created: true,
        coin: response.data.coin
      }))
      .catch(() => this.setState({
        coin: { ...coin, name: '', quantity: '' },
        message: 'Create failed. Please fill out forms and try again.'
      }))
  }

  handleChange = event => {
    const inputName = event.target.name
    const updatedInputValue = event.target.value

    const updatedCoin = { ...this.state.coin, [inputName]: updatedInputValue }

    this.setState({ coin: updatedCoin })
  }

  render () {
    const { coin, created } = this.state

    if (created) {
      return <Redirect to={`/coins/${coin.id}`} />
    }

    const { name, quantity } = coin

    return (
      <CoinForm
        name={name}
        quantity={quantity}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default CoinCreate
