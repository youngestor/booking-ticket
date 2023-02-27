const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

const handleCreate = (req, res, next) => {
    const fullname = req.body.fullname
    const username = req.body.username
    const password = req.body.password

    if (!fullname || !username || !password)
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Please enter full information!'
        })

    User.findOne({ username })
        .then(user => {
            if (user)
                return res.status(500).json({
                    errMessage: 'User account already exists!'
                })

            const passwordHash = bcrypt.hashSync(password, 8)
            const newUser = new User({
                fullname,
                username,
                password: passwordHash,
            })

            newUser.save()
                .then(user => {
                    const userInfo = user.toObject()
                    delete userInfo.password
                    return res.status(200).json({
                        user: userInfo
                    })
                })
                .catch(next)
        })
        .catch(next)
}

const handleRead = (req, res, next) => {
    User.find()
        .then(user => res.status(200).json({
            user
        }))
        .catch(next)
}

const handleUpdate = (req, res, next) => {
    const _id = req.body._id
    if (!_id)
        return res.status(500).json({
            errMessage: 'Please enter full information!'
        })

    const fullname = req.body.fullname
    const username = req.body.username
    User.updateOne({ _id }, { fullname, username })
        .then(user => res.status(200).json({
            errCode: 0
        }))
        .catch(next)
}

const handleDelete = (req, res, next) => {
    const _id = req.body._id
    if (!_id)
        return res.status(500).json({
            errMessage: 'Please enter full information!'
        })

    User.deleteOne({ _id })
        .then(user => res.status(200).json({
            user
        }))
        .catch(next)
}

module.exports = { handleCreate, handleRead, handleUpdate, handleDelete }