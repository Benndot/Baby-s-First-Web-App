// Will contain the routes to pages not related to the Chair component of the application

// Reminder: On a route, each address contains the route specification, so all addresses to the get requests here
// have an implied /misc before them. Ex: To reach the "hockey" page in this route, you must input /misc/hockey

const { response } = require('express');
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', (request, response, next) => {
    response.send("Hello, you have reached the misc section of my webapp!");
});

router.get('/friend', (request, response, next) => {
    response.render('friendly');
});

router.get('/form', (req, res) => {
    res.render('user_form', {nom: 'Pierre', prenom: 'Roche'})
})

router.post('/', (req, res) => {
    // For the inteactivity added to the bottom bar of the friendly.ejs page
    console.log(`${req.body.fileSelect || 'No input'}, ${typeof(req.body.fileSelect)}.${req.body.inputDate || 'No input'}`)
})

module.exports = router