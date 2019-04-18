import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
// import axios from 'axios'

// import apiUrl from '../apiConfig'
import CoinForm from './CoinForm'

import { editCoin } from './api'

class CoinEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      coin: {
        name: '',
        quantity: ''
      },
      updated: false
    }
  }

  // componentDidMount () {
  //   axios(`${apiUrl}/coins/${this.props.match.params.id}`)
  //     .then(res => this.setState({ coin: res.data.coin }))
  //     .catch(console.error)
  // }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedCoin = Object.assign(this.state.coin, updatedField)

    this.setState({ coin: editedCoin })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { id } = this.props.match.params
    const { user } = this.props
    const { coin } = this.state

    editCoin(user, id, coin)
      .then(response => this.setState({
        updated: true,
        coin: response.data.coin
      }))
  }

  render () {
    const { coin, quantity, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/coins/${this.props.match.params.id}`} />
    }

    return (
      <CoinForm
        coin={coin}
        quantity={quantity}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    )
  }
}

export default withRouter(CoinEdit)
