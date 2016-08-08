const favoritesController = require('./controllers/favoritesController');

module.exports = function(app) {
  app.get('/favorites', favoritesController.allBuoys);
  app.post('/favorites', favoritesController.addBuoy);
  // TODO: fill out routes
};
