const express = require('express')
const { handleRead, handleSearch, handleCreate, handleUpdate, handleDelete } = require('../controllers/MovieController')

const router = express.Router()

const movieRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)
    router.put('/update', handleUpdate)
    router.post('/delete', handleDelete)
    router.get('/search', handleSearch)

    return app.use('/api/movie', router)
}

module.exports = movieRoutes
