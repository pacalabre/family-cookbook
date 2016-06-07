var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  recipe: String,
  image: String,
  author: String
});

module.exports = mongoose.model('recipe', RecipeSchema);
