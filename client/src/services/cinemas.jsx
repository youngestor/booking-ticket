import axiosClient from './axios'

export const apiCinemaCreate = data =>
    axiosClient.post('/api/cinema/create', data)

export const apiCinemaRead = () =>
    axiosClient.get('/api/cinema/read')

export const apiCinemaUpdate = data =>
    axiosClient.put('/api/cinema/update', data)

export const apiCinemaDelete = id =>
    axiosClient.post('/api/cinema/delete', { _id: id })
