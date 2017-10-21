var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var task = require('./api/models/todoListModel');
var routes = require('./api/routes/todoListRoute');
var controller = require('./api/controllers/todoListController');

//instanciate server
var app = express();
port = process.env.PORT || 3000;

//mongoose instance
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

app.listen(port);

console.log('Todo list started on port: ' + port);
