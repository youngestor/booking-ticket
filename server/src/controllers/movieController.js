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

module.exports = { handleRead, handleCreate }