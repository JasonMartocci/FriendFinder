var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//set up routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//start server
app.listen(PORT, function(){
	console.log('You are running on port: '+ PORT);
});