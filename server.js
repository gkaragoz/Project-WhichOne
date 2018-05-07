var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path'),
    http = require('http'),
    mongoose = require('mongoose'),
    Models = require('./api/models/whichOneModels'), //created model loading here
    bodyParser = require('body-parser'),
    socketIO=require('socket.io'),
    server = http.createServer(app);
    io = socketIO(server);

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

app.listen(port);

console.log('WhichOne - RESTful API and Socket server started on: ' + port);