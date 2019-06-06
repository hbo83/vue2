var http = require('http');
var port = process.env.port || 1337;
var express = require('express');
// var handlebars = require('express3-handlebars');
var path = require('path');

var application = express();

application.use("/public", express.static(path.join(__dirname, 'public')));



application.get('/', function(req, res){
    res.render({ someProp: 3 });
});

application.listen(port);
