const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/booking-ticket'

const connectDB = () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect successfully!')
    } catch (error) {
        console.log('Connect failure!')
    }
}

module.exports = connectDB
