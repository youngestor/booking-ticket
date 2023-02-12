const express = require('express')
const { handleRead, handleCreate } = require('../controllers/MovieController')

const router = express.Router()

const movieRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)

    return app.use('/api/movie', router)
}

module.exports = movieRoutes
