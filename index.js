var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var User = require('./models/user');
var app = express();

var secret = "thisisthepassword";


if(!mongoose.connection.db) mongoose.connect('mongodb://localhost/cookbook')
  const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', console.log.bind(console, 'connected to mongodb'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// add app.use session here


app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({message: 'You need an authorization token to view this information.'})
  }
});

app.use('/api/recipes', require('./controllers/recipes'));
app.use('/api/users', require('./controllers/users'));

app.post('/api/auth', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err || !user) return res.status(401).send({message: 'User not found'});
    user.authenticated(req.body.password, function(err, result) {
      if (err || !result) return res.status(401).send({message: 'User not authenticated'});

      var token = jwt.sign(user, secret);
      res.send({user: user, token: token});
    });
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// app.get('/results', function (req, res) {
//   var foodKey = process.env.Food2Fork_KEY;
//   request("http://food2fork.com/api/search?key="+foodKey, function(err,response,body) {
//     var data=JSON.parse(body);
//     // console.log(urlWorld+keyWorld+queryWorld+endWorld);
//     console.log("data = "+data);
//     console.log("Error = "+err);
//     // if(!err && response.statusCode === 200 && data){
//     //   res.render('weather',{conditions:data,q:query})
//     // } else {
//     //   console.log(err);
//     //   res.render("error");
//     // }

//     res.render("results.html");
//   })

// });



app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen( process.env.PORT || 3000);


// things to add:
// - OAuth / Login: Angular vs Node?
// - All Things Mongo / Database
//   - Add / Edit Food
// - Cloudinary Images
// - API

// nice to have:
// - comments
// - tags
