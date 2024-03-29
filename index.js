// load up the express framework and body-parser helper and dotenv variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// import the stripe related libraris
const Stripe = require('stripe');
//const stripe = Stripe(process.eventNames.SECRET_KEY, {apiVersion: "2020-08-27"});
const stripe = Stripe(`${process.env.SECRET_KEY}`, {apiVersion: "2020-08-27"});

// create an instance of express to serve our end point
// use cors to enable cors requests without restriction
const app = express();
app.use(cors());

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static('./public'));

// include the functions in the ./routes/main.js file
require("./routes/main") (app);

// create a pool of connections to the mysql db
const mysql = require("mysql2");
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// make the connection available globally
global.db = db;

// use port 3000 or port assigned by local environment for the server
const port = process.env.PORT || 3000;

// finally, launch our server on port assigned port.
const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
});
