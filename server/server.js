var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./database/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Controllers
var userController = require("./controllers/user-controller");

// Routes
app.post('/api/user/create', userController.createUser);

var PORT = process.env.PORT || 3000;

db.sync()
	.then(function() {
		app.listen(PORT, function() {
			console.log("Abby calling! " + PORT);
		});
	});