const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Schedule = new Schema({
    movie: String,
    cinema: String,
    datetime: String,
    number: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Schedule', Schedule)
