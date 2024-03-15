const express = require('express');
const rutapersonajes = express.Router;

rutapersonajes.get('/', (req, res, next) => {
    res.send('GET request')
})

rutapersonajes.post('/', (req, res, next) => {
    res.send('POST request')
})

rutapersonajes.put('/', (req, res, next) => {
    res.send('PUT request')
})

rutapersonajes.delete('/', (req, res, next) => {
    res.send('DELETE request')
})

module.exports.rutapersonajes = rutapersonajes();