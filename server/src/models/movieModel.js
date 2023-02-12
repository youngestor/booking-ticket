const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Movie = new Schema({
    title: String,
    image: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', Movie)
