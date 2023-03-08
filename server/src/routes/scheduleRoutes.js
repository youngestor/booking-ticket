const express = require('express')
const { handleRead, handleCreate, handleUpdate, handleDelete, handleSearchMovie, handleSearchCinema } = require('../controllers/ScheduleController')

const router = express.Router()

const scheduleRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)
    router.put('/update', handleUpdate)
    router.post('/delete', handleDelete)
    router.get('/search/movie', handleSearchMovie)
    router.get('/search/cinema', handleSearchCinema)

    return app.use('/api/schedule', router)
}

module.exports = scheduleRoutes
