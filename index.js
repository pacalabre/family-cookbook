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


app.use('/api/users', expressJWT({secret: secret})
.unless({path: ['/api/users'], method: 'post'}));
app.use('/api/recipes', require('./controllers/recipes'));
app.use('/api/users', require('./controllers/users'));

app.post('/api/auth', function(req, res) {
  var search = {email: req.body.email};
  console.log("searching for:", search);

  User.findOne(search, function(err, user) {
    if (err || !user) {
      console.log('user not found');
      return res.status(401).send({message: 'User not found'});
    }

    user.authenticated(req.body.password, function(err, result) {
      if (err || !result) {
        console.log('user not authenticated');
        return res.status(401).send({message: 'User not authenticated'});
      }
      var token = jwt.sign(user, secret);
      res.send({user: user, token: token});
    });
  });
});



// http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

app.get('/recipe-search', function(req, res) {
  // res.send({results: [1,2,3]});
});

app.get('/recipe-search/results', function(req, res) {
  //Food2Fork API
  console.log("here")
  var urlFoodSearch = 'http://food2fork.com/api/search?key=';
  var query = '&q=' +  q;
  console.log('query = '+ query);
  var key = "APPID=" + process.env.Food2Fork_KEY;

  request(urlFoodSearch+key+query, function(err,response,body) {
    var data=JSON.parse(body);
    if(!err && response.statusCode === 200 && data){
      res.render('results',{conditions:data,q:query})
    } else {
      console.log(err);
      res.render("error");
    }
  })
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Redirect any URL that doesn't match previous routes
// to be sent the index page.
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen( process.env.PORT || 3000);


// things to add:
// - OAuth / Login: Angular vs Node? - done
// - All Things Mongo / Database - database done
//   - Add / Edit Food - in process of adding CRUD
        // - hide add button if the user is not logged in
        // - add individual recipe pages
// - Cloudinary Images
// - API

// nice to have:
// - comments
// - tags
