var db =  require('../database/database');
var bcrypt = require('bcryptjs');

module.exports.createUser = function(req, res){
	var query = "INSERT INTO users (username, user_password, email) VALUES ('" + 
	req.body.username + "', '" + req.body.user_password + "', '" + req.body.email + "')";

	db.query(query).spread (function(result, metadata){
		res.status(200).send("User was successfully created.");
	}).catch(function(err){
		res.status(500).send("User was not created Abby!");
	})
}