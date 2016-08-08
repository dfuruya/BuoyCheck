const mongoose = require('mongoose');

const FavoritesSchema = mongoose.Schema({
  title: String,
  date: String,
  description: String,
  link: String,
});

module.exports = mongoose.model('Favorites', FavoritesSchema);
