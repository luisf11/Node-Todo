// Initial setup
var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// connect to mongoDB database on modulus.io
// TODO: change this connection to a local one
// mongoose.connect('...');


 // set the static files location /public for use
app.use(express.static(__dirname + '/public'));

// log every request to the console
app.use(morgan('dev'));

 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 'extended': 'true'}));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// Lets you use HTTP verbs such as PUT or DELETE
app.use(methodOverride());

// Start app with node server.js listening on the specified port
app.listen(8080);

console.log("Node server listening on port 8080...");