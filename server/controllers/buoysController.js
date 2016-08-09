'use strict';
const Buoys = require('../models/buoysModel');
// module to parse through RSS feeds
const parser = require('node-feedparser');
// module to perform XHR for Node.js
const axios = require('axios').create({
  baseURL: 'http://www.ndbc.noaa.gov'
});

module.exports = {
  // fetch buoys from NDBC RSS feed
  fetchBuoys: (req, res, next) => {
    const endpoint = '/rss/ndbc_obs_search.php?lat=40N&lon=73W&radius=100';
    axios.get(endpoint)
    .then(xml => {
      // parse XML into JSON, then return result data
      parser(xml.data, (err, results) => {
        let buoyList = [];
        for (let item of results.items) {
          let formattedBuoy = {
            title: item.title,
            date: item.date,
            description: item.description,
            link: item.link,
          };
          buoyList.push(formattedBuoy);
        }
        // repopulate buoys in db
        Buoys.remove().exec()
        .then(() => {
          Buoys.insertMany(buoyList);
          console.log('Repopulated buoys');
          res.end();
        })
        .catch(err => next(err));
      });
    })
    .catch(err => next(err));
  },

  getBuoys: (req, res, next) => {
    Buoys.find({})
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
  }
};
