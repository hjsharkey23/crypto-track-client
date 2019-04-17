import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexCoins = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/coins',
    headers: { 'Authorization': `Token token=${user.token}` }
  })
}
