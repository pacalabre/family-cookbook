var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  recipe: String,
  image: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);
