const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const app = express();
// grab environment settings through start up script
const env = require('../env.json')[process.env.NODE_ENV];
const port = env['PORT'] || 8080;
const dbHost = env['DB_HOST'] || 'localhost';
const dbName = env['DB_NAME'] || 'buoy_dev_db';
// connect to MongoDB instance
const mongoUri = `mongodb://${dbHost}/${dbName}`;
mongoose.connect(mongoUri);
// middleware for JSON data between client/server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// serve index.html and bundled client files
// TODO: set path for static files
app.use(express.static(__dirname + '/../public'));
// add routing
routes(app);
// open up server port
app.listen(port, () => {
  console.log('Server now listening on port:', port);
});
