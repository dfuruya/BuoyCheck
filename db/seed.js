const mongoose = require('mongoose');
const Favorites = require('../server/models/favoritesModel');
// using the 'async' module to chain events
const async = require('async');
const seedData = require('./data/data.json');

const mongoUri = 'mongodb://localhost/buoy_dev_db';
// start up mongo database
const startDB = callback => {
  mongoose.connect(mongoUri, () => {
    console.log('Database connected successfully...');
    callback();
  });
};

// drop old data
const clearDB = callback => {
  mongoose.connection.db.dropDatabase(() => {
    console.log('...Dropped database "buoy_dev"...');
    callback();
  });
};

// add records from `data.json`
const populateDB = callback => {
  Favorites.insertMany(seedData)
  .then(() => {
    console.log('...Seeded database...');
    callback();
  });
};

// truncate table
const truncateTable = callback => {
  Favorites.remove().exec()
  .then(() => {
    console.log('...Truncated table...');
    callback();
  });
};

// close mongo connection
const endSeed = function() {
  mongoose.connection.close(() => {
    console.log('...Database disconnected... seeding complete!');
    process.exit(0);
  });
};

// execute waterfall ops
async.waterfall([
  startDB,
  clearDB,
  populateDB,
  truncateTable,
  endSeed
]);
