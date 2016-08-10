const Favorites = require('../models/favoritesModel');

module.exports = {
  // Grab all favorited buoys
  allFavorites: (req, res, next) => {
    Favorites.find({})
    .then(favorites => {
      res.json(favorites);
    })
    .catch(err => next(err) );
  },

  // Add a buoy to the Favorites if not exists
  addFavorite: (req, res, next) => {
    Favorites.where({
      title: req.body.title,
    })
    .then(results => {
      if (results.length !== 0) {
        res.end();
      } else {
        Favorites.create(req.body)
        .then(() => {
          console.log('Added buoy to favorites: ', req.body.title);
          next();
        })
        .catch(err => next(err));
      }
    });
  },

  // Remove buoy from Favorites list
  deleteFavorite: (req, res, next) => {
    Favorites.findOneAndRemove({
      _id: req.params.id,
    })
    .then(removed => {
      console.log('Removed buoy from favorites: ', removed.title);
      Favorites.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => next(err));
    });
  },
};
