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


// app.get("/greet/:name/:lastname", function(req, res) {
//   res.send("Hello " + req.params.name + " " + req.params.lastname);
// });

// app.get("/multiply/:x/:y", function(req, res) {
//   res.send("The answer is: " + (req.params.x * req.params.y));
// });

// app.get("/add/:x/:y", function(req, res) {
//   res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
// });


app.listen(3000);


