import axiosClient from './axios'

export const apiMovieCreate = data =>
    axiosClient.post('/api/movie/create', data)

export const apiMovieRead = () =>
    axiosClient.get('/api/movie/read')

export const apiMovieDelete = id =>
    axiosClient.post('/api/movie/delete', { _id: id })
