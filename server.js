var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var task = require('./api/models/todoListModel');
var routes = require('./api/routes/todoListRoute');
var controller = require('./api/controllers/todoListController');

//instanciate server
var app = express();
port = process.env.PORT || 3008;

//mongoose instance
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'DELETE');
    next();
});

routes(app);

app.listen(port);

console.log('Todo list started on port: ' + port);
