const favoritesController = require('./controllers/favoritesController');
const buoysController = require('./controllers/buoysController');

module.exports = function(app) {
  // Routing logic for Favorites view
  app.get('/favorites', favoritesController.allFavorites);
  app.post('/favorites', favoritesController.addFavorite, favoritesController.allFavorites);
  app.delete('/favorites/:id', favoritesController.deleteFavorite);

  // Routing logic for Main view
  app.get('/main', buoysController.fetchBuoys);
  app.put('/main', buoysController.getBuoys);
};
