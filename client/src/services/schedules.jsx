import axiosClient from './axios'

export const apiScheduleCreate = data =>
    axiosClient.post('/api/schedule/create', data)

export const apiScheduleRead = () =>
    axiosClient.get('/api/schedule/read')

export const apiScheduleUpdate = data =>
    axiosClient.put('/api/schedule/update', data)

export const apiScheduleDelete = id =>
    axiosClient.post('/api/schedule/delete', { _id: id })

export const apiScheduleSearchMovies = id =>
    axiosClient.get('/api/schedule/search/movie?_id=' + id)

export const apiScheduleSearchCinemas = id =>
    axiosClient.get('/api/schedule/search/cinema?_id=' + id)
