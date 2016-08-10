const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const app = express();
// Grab environment settings through start up script
const env = require('../env.json')[process.env.NODE_ENV];
const port = env['PORT'] || 8080;
const dbHost = env['DB_HOST'] || 'localhost';
const dbName = env['DB_NAME'] || 'buoy_dev_db';
// Connect to MongoDB instance
const mongoUri = `mongodb://${dbHost}/${dbName}`;
mongoose.connect(mongoUri);
// Middleware for JSON data between client/server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Serve index.html and bundled client files
app.use(express.static(__dirname + '/../public'));
// Add routing to 'app' server
routes(app);
// Open up server port
app.listen(port, () => {
  console.log('Server now listening on port:', port);
});
