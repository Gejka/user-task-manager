console.log("hi from index.js")
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')
const app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
//const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
//hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))




const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded());
app.use(userRouter)
app.use(taskRouter)


app.get('', (req, res) => {
    res.render('index', {
        title: 'form',
    })
  })


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})