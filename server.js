'use strict';
const express = require('express');
const exphbs = require('express-handlebars');
const http = require('http');
const mongoose = require('mongoose');
const Twitter = require('twitter');
const routes = require('./routes');
const config = require('./config');
const streamHandler = require('./utils/streamHandler');

// Create an express instance and set a port variable
const LOCAL_PORT = 8080;
const app = express();
const port = process.env.PORT || LOCAL_PORT;
const db = process.env.MONGOLAB_URI || 'mongodb://localhost/react-tweets';
const env = process.env.NODE_ENV || 'development';


// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
mongoose.connect(db);

// Create a new twitter instance
const twit = new Twitter(config.twitter);

// Index Route
app.get('/', routes.index);

// Page Route
app.get('/page/:page/:skip', routes.page);

// Set /public as our static content dir
app.use('/', express.static(__dirname + '/public/'));

// Fire this bitch up (start our server)
const server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port + ', in ' + env + ' mode.');
});

// Initialize socket.io
const io = require('socket.io').listen(server);

// Set a stream listener for tweets matching tracking keywords
twit.stream('statuses/filter', { track: 'deathpenalty' }, function(stream) {
    streamHandler(stream, io);
});
