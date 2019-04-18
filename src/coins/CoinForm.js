import React, { Fragment } from 'react'
import Alert from 'react-bootstrap/Alert'

const CoinForm = ({ message, name, quantity, handleChange, handleSubmit }
) => (
  <Fragment>
    {message && <Alert variant="danger" dismissible>{message}</Alert>}
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input required value={name} name="name" onChange={handleChange} />
      <label htmlFor="quantity">Quantity</label>
      <input required value={quantity} type="number" name="quantity" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  </Fragment>
)

export default CoinForm
