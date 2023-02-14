const Movie = require('../models/movieModel')

const handleRead = (req, res, next) => {
    Movie.find()
        .then(movie => res.status(200).json({
            movie
        }))
        .catch(next)
}

const handleCreate = (req, res, next) => {
    const title = req.body.title
    const image = req.files.file.name
    if (!title || !image)
        return res.status(500).json({
            errMessage: 'Please enter full information!'
        })

    const movieNew = new Movie({ title, image })
    movieNew.save()
        .then(() => {
            req.files.file.mv("./src/uploads/" + image)
            res.status(200).json({
                movie: movieNew
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

    const title = req.body.title
    const image = req.files.file.name
    Movie.updateOne({ _id }, { title, image })
        .then(movie => {
            req.files.file.mv("./src/uploads/" + image)
            res.status(200).json({
                movie
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

    Movie.deleteOne({ _id })
        .then(movie => res.status(200).json({
            movie
        }))
        .catch(next)
}

module.exports = { handleRead, handleCreate, handleUpdate, handleDelete }