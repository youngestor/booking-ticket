import axiosClient from './axios'

export const apiAccountCreate = data =>
    axiosClient.post('/api/accounts/create', data)

export const apiAccountRead = () =>
    axiosClient.get('/api/accounts/read')
