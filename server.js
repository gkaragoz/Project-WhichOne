var mongoose = require('mongoose'),
    Models = require('./api/models/whichOneModels'), //created model loading here
    bodyParser = require('body-parser');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO=require('socket.io');
const port  =   process.env.PORT ||3000 ;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/whichOne');

//express stuff
app.use("/",express.static(path.join(__dirname, 'public')));
app.use("/css",express.static(path.join(__dirname, '/css')));
app.use("/js",express.static(path.join(__dirname, '/js')));

//body-parser stuff.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/whichOneRoutes'); //importing route
routes(app); //register the route

server.listen(port, function () {
    console.log('WhichOne - RESTful API and Socket server started on: ' + port);
});

var users = [];

io.on('connection', function(socket) {
    console.log("A user has been connected: " + socket.id);
    users.push(socket.id);

    io.emit('onlineUsers', users.length);

    socket.on('disconnect', function () {
        console.log("A user has been disconnected: " + socket.id);

        var indexOf = users.indexOf(socket.id);
        users.splice(indexOf, 1);
    
        io.emit('onlineUsers', users.length);
    });
});