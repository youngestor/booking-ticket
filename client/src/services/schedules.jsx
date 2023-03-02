import axiosClient from './axios'

export const apiScheduleCreate = data =>
    axiosClient.post('/api/schedule/create', data)

export const apiScheduleRead = () =>
    axiosClient.get('/api/schedule/read')

export const apiScheduleUpdate = data =>
    axiosClient.put('/api/schedule/update', data)

export const apiScheduleDelete = id =>
    axiosClient.post('/api/schedule/delete', { _id: id })
