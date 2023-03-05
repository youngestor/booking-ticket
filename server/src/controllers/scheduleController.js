const Schedule = require('../models/scheduleModel')

const handleRead = (req, res, next) => {
    Schedule.find()
        .then(schedule => res.status(200).json({
            schedule
        }))
        .catch(next)
}

const handleCreate = (req, res, next) => {
    const movie = req.body.movie
    const cinema = req.body.cinema
    const datetime = req.body.datetime
    const number = req.body.number
    if (!movie || !cinema || !datetime || !number)
        return res.status(500).json({
            errMessage: 'Please enter full information!'
        })

    const remaining = number

    const scheduleNew = new Schedule({ movie, cinema, datetime, number, remaining })
    scheduleNew.save()
        .then(() => {
            res.status(200).json({
                schedule: scheduleNew
            })
        })
        .catch(next)
}

const handleUpdate = (req, res, next) => {
    const _id = req.body._id
    if (!_id)
        return res.status(500).json({
            errMessage: 'Please enter full information!'
        })

    const movie = req.body.movie
    const cinema = req.body.cinema
    const datetime = req.body.datetime
    const number = req.body.number
    Schedule.updateOne({ _id }, { movie, cinema, datetime, number })
        .then(schedule => {
            res.status(200).json({
                schedule
            })
        })
        .catch(next)
}

const handleDelete = (req, res, next) => {
    const _id = req.body._id
    if (!_id)
        return res.status(500).json({
            errMessage: 'Please enter full information!'
        })

    Schedule.deleteOne({ _id })
        .then(schedule => res.status(200).json({
            schedule
        }))
        .catch(next)
}

module.exports = { handleRead, handleCreate, handleUpdate, handleDelete }