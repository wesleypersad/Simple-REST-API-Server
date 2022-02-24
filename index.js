// load up the express framework and body-parser helper and dotenv variables
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// create an instance of express to serve our end point
const app = express();

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static('public'));

// connect to the mysqldb
const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to qrcodeshopperdb");
});

global.db = db;

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

// use port 3000 or port assigned by local environment for the server
//const port = 3000;
const port = process.env.port || 3000;

// finally, launch our server on port assigned port.
const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
});
