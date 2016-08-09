const mongoose = require('mongoose');

const BuoysSchema = mongoose.Schema({
  title: String,
  date: String,
  link: String,
  description: String,
});

module.exports = mongoose.model('Buoys', BuoysSchema);
