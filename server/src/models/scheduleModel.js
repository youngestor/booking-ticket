const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Schedule = new Schema({
    movie: {
        title: String,
        image: String
    },
    cinema: {
        location: String,
        image: String
    },
    datetime: String,
    number: String,
    remaining: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Schedule', Schedule)
