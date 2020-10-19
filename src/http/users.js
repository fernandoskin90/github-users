// @vendors
import axios from 'axios'
// @constans
import { USER_ENDPOINTS } from 'constants/endpoinst'

export function getInfoUser (userName) {
    return axios.get(`${USER_ENDPOINTS.GET_INFO}/${userName}`).then(({ data }) => data)
}

export function getReposByUSer (url) {
    return axios.get(`${url}`).then(({ data }) => data)
}
