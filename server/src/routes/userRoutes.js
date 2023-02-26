const express = require('express')
const { handleCreate, handleRead } = require('../controllers/userController')

const router = express.Router()

const userRoutes = app => {
    router.post('/create', handleCreate)
    router.get('/read', handleRead)

    return app.use('/api/accounts', router)
}

module.exports = userRoutes
