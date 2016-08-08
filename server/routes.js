const favoritesController = require('./controllers/favoritesController');

module.exports = function(app) {
  app.get('/favorites', favoritesController.allBuoys);
  // TODO: fill out routes
};
