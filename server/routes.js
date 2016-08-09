const favoritesController = require('./controllers/favoritesController');
const buoysController = require('./controllers/buoysController');

module.exports = function(app) {
  // TODO: >>>>>>>>>>>>>>>> fill out routes

  // routing logic for favorite buoys
  app.get('/favorites', favoritesController.allFavorites);
  app.post('/favorites', favoritesController.addFavorite);
  // app.delete('/favorites', favoritesController.deleteFavorite);

  // routing logic for buoy list on NDBC feed
  app.get('/main', buoysController.getBuoys);
  app.put('/main', buoysController.fetchBuoys);
};
