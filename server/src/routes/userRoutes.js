const express = require('express')
const { handleCreate, handleRead, handleUpdate, handleDelete, handleLogin } = require('../controllers/userController')

const router = express.Router()

const userRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)
    router.put('/update', handleUpdate)
    router.post('/delete', handleDelete)
    router.post('/login', handleLogin)

    return app.use('/api/accounts', router)
}

module.exports = userRoutes
