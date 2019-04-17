import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexCoins = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/coins',
    headers: { 'Authorization': `Token token=${user.token}` }
  })
}

export const createCoin = (user, coin) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/coins',
    headers: { 'Authorization': `Token token=${user.token}` },
    data: { coin }
  })
}
