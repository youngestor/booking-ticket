const path = require('path')
const cors = require('cors')
const express = require('express')
const fileupload = require("express-fileupload")
const bodyParser = require('body-parser')
const connectDB = require('./config/mongoose')
const movieRoutes = require('./routes/movieRoutes')
const cinemaRoutes = require('./routes/cinemaRoutes')
const userRoutes = require('./routes/userRoutes')
const scheduleRoutes = require('./routes/scheduleRoutes')

const app = express()
const PORT = 7000

app.use(cors());

connectDB()

app.use(express.static(path.join(__dirname, 'uploads')))

app.use(fileupload({ createParentPath: true }))

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

movieRoutes(app)
cinemaRoutes(app)
userRoutes(app)
scheduleRoutes(app)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
