const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('../utils/forecast')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

app.use(express.static('public'))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Dynamic page',
        name: 'Daryna'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Daryna'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        body: 'Here to help',
        name: 'Daryna'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'Please fill in the address'
        })
    }
    forecast(req.query.address, (data) => {
        res.send(data)
    })
})

app.get('/help/*', (req, res) => {
    res.render('404help', {
        name: 'Daryna',
        message: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        name: 'Daryna',
        message: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})