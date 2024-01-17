require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const server = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const database = mongoose.connection
database.on('error', function(error) {
    console.log(error);})
database.once('open', function() {
    console.log('Connected to database.');})

/*const basicAuth = require('express-basic-auth')

server.use(basicAuth({
    users: { 'user': 'b6aw9ol' }
}))*/

server.use(express.json())


server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const methods = require('./routes/routes')
server.use('/', methods)

server.listen(3000,  function() {
    console.log('Server running at http://localhost:' + 3000+'/');})

     
