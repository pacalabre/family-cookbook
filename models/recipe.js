var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  recipe: String,
  image: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
});

module.exports = mongoose.model('recipe', RecipeSchema);
