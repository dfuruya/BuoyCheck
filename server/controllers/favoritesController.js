const Favorites = require('../models/favoritesModel');

module.exports = {
  allFavorites: (req, res, next) => {
    Favorites.find({})
    .then(favorites => {
      res.json(favorites);
    })
    .catch(err => next(err) );
  },

  addFavorite: (req, res, next) => {
    Favorites.create(req.body)
    .then(() => {
      console.log('Added buoy to favorites: ', req.body.title);
      res.end();
    })
    .catch(err => next(err) );
  },

  deleteFavorite: (req, res, next) => {
    // TODO: delete buoy from favorites
  },
};
