const Favorites = require('../models/favoritesModel');

module.exports = {
  allBuoys: (req, res, next) => {
    Favorites.find({})
    .then(favorites => {
      res.json(favorites);
    })
    .catch(err => { next(err) });
  },

  addBuoy: (req, res, next) => {
    Favorites.create(req.body)
    .then(() => {
      console.log('Added buoy to favorites: ', req.body.title);
      res.end();
    })
    .catch(err => { next(err) });
  },

  deleteBuoy: (req, res, next) => {
    // TODO: remove buoy from db
  },
};
