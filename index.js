var express = require('express'),
app = express();
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
// var mongoose = require('mongoose');
// var session = require('express-session');

// app.use(express.static(__dirname, + '/public'));
app.use(express.static(path.join(__dirname, 'public')))

// add app.use session here

app.set('view engine', 'ejs');

app.use( bodyParser.urlencoded({extended: false }) );

// add mongoose here

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);


// things to add:
// - OAuth
// - Login
// - All Things Mongo / Database
//   - Add / Edit Food
// - Cloudinary Images
// - API

// nice to have:
// - comments
// - tags
