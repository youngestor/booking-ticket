const express = require('express')
const { handleRead, handleCreate, handleUpdate, handleDelete } = require('../controllers/ScheduleController')

const router = express.Router()

const scheduleRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)
    router.put('/update', handleUpdate)
    router.post('/delete', handleDelete)

    return app.use('/api/schedule', router)
}

module.exports = scheduleRoutes
