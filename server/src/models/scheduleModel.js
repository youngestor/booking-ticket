const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Schedule = new Schema({
    movie: Object,
    cinema: Object,
    datetime: String,
    number: String,
    remaining: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Schedule', Schedule)
