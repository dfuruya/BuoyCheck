const favoritesController = require('./controllers/favoritesController');
const buoysController = require('./controllers/buoysController');

module.exports = function(app) {
  // routing logic for favorite buoys
  app.get('/favorites', favoritesController.allFavorites);
  app.post('/favorites', favoritesController.addFavorite, favoritesController.allFavorites);
  app.delete('/favorites/:id', favoritesController.deleteFavorite);

  // routing logic for buoy list on NDBC feed
  app.get('/main', buoysController.getBuoys);
  app.put('/main', buoysController.fetchBuoys);
};
