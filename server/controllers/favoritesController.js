const Favorites = require('../models/favoritesModel');

module.exports = {
  allBuoys: (req, res, next) => {
    Favorites.find({})
    .then(favorites => {
      res.json(favorites);
    })
    .catch(err => {
      next(err);
    });
  },

  addBuoy: (req, res, next) => {
    // TODO: add a buoy to db
  },

  deleteBuoy: (req, res, next) => {
    // TODO: remove buoy from db
  },
};
