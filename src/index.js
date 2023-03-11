const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const path = require('path')

const app = express()
const port = 3000
const route = require('./routes')

// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//template engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources", "views"));


//define route
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})