const express = require('express')
const { handleRead, handleCreate, handleUpdate, handleDelete } = require('../controllers/CinemaController')

const router = express.Router()

const cinemaRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)
    router.put('/update', handleUpdate)
    router.post('/delete', handleDelete)

    return app.use('/api/cinema', router)
}

module.exports = cinemaRoutes
