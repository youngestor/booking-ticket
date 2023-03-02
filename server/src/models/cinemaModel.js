const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Cinema = new Schema({
    location: String,
    image: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Cinema', Cinema)
