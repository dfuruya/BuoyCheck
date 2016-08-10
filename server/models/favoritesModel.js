const mongoose = require('mongoose');

const FavoritesSchema = mongoose.Schema({
  title: String,
  date: String,
  link: String,
  description: [ String ],
});

module.exports = mongoose.model('Favorites', FavoritesSchema);
