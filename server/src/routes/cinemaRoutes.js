const express = require('express')
const { handleRead, handleSearch, handleCreate, handleUpdate, handleDelete } = require('../controllers/CinemaController')

const router = express.Router()

const cinemaRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)
    router.put('/update', handleUpdate)
    router.post('/delete', handleDelete)
    router.get('/search', handleSearch)

    return app.use('/api/cinema', router)
}

module.exports = cinemaRoutes
