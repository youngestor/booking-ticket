import axiosClient from './axios'

export const apiAccountCreate = data =>
    axiosClient.post('/api/accounts/create', data)

export const apiAccountRead = () =>
    axiosClient.get('/api/accounts/read')

export const apiAccountUpdate = data =>
    axiosClient.put('/api/accounts/update', data)

export const apiAccountDelete = id =>
    axiosClient.post('/api/accounts/delete', { _id: id })
