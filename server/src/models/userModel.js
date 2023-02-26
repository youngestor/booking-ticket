const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema({
    fullname: String,
    username: String,
    password: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User)
