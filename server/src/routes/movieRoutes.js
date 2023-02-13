const express = require('express')
const { handleRead, handleCreate, handleDelete } = require('../controllers/MovieController')

const router = express.Router()

const movieRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)
    router.post('/delete', handleDelete)

    return app.use('/api/movie', router)
}

module.exports = movieRoutes
