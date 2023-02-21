const Cinema = require('../models/cinemaModel')

const handleRead = (req, res, next) => {
    Cinema.find()
        .then(cinema => res.status(200).json({
            cinema
        }))
        .catch(next)
}

const handleCreate = (req, res, next) => {
    const area = req.body.area
    const name = req.body.name
    const location = req.body.location
    const image = req.files.file.name
    if (!area || !image || !location || !name)
        return res.status(500).json({
            errMessage: 'Please enter full information!'
        })

    const cinemaNew = new Cinema({ area, image, name, location })
    cinemaNew.save()
        .then(() => {
            req.files.file.mv("./src/uploads/" + image)
            res.status(200).json({
                cinema: cinemaNew
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


    const area = req.body.area
    const name = req.body.name
    const location = req.body.location
    const image = req.files.file.name
    if (!area || !image || !location || !name)
        return res.status(500).json({
            errMessage: 'Please enter full information!'
        })
    Cinema.updateOne({ _id }, { area, image, location, name })
        .then(cinema => {
            req.files.file.mv("./src/uploads/" + image)
            res.status(200).json({
                cinema
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

    Cinema.deleteOne({ _id })
        .then(cinema => res.status(200).json({
            cinema
        }))
        .catch(next)
}

module.exports = { handleRead, handleCreate, handleUpdate, handleDelete }