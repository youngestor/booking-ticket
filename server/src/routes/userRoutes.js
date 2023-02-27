const express = require('express')
const { handleCreate, handleRead, handleUpdate, handleDelete } = require('../controllers/userController')

const router = express.Router()

const userRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)
    router.put('/update', handleUpdate)
    router.post('/delete', handleDelete)

    return app.use('/api/accounts', router)
}

module.exports = userRoutes
