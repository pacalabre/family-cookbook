var express = require('express');
var Recipe = require('../models/recipe');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Recipe.find().populate('author').exec(function(err, recipes) {
      if (err) return res.status(500).send(err);
      res.send(recipes);
    });
  })
  .post(function(req, res) {
    // console.log(req.body);
    console.log(req.user);
    req.body.author=req.user._doc._id;
    Recipe.create(req.body, function(err, recipe) {
      if (err) return res.status(500).send(err);
      res.send(recipe);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
      if (err) return res.status(500).send(err);
      res.send(recipe);
    });
  })
  .put(function(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Recipe.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;
