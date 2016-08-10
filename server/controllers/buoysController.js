'use strict';
const Buoys = require('../models/buoysModel');
// Module to parse through RSS feeds
const parser = require('node-feedparser');
// Module to perform XHR for Node.js
const axiosInstance = require('axios').create({
  baseURL: 'http://www.ndbc.noaa.gov'
});
// Helper function to parse description of xml
const parseDescription = (xmlString) => {
  const description = xmlString.split('\n        ');
  let descriptionArr = [];
  for (let line of description) {
    descriptionArr.push(line.replace(/<(?:.|\n)*?>/g, '').replace(/&#176;/g, '°'));
  }
  return descriptionArr;
};

module.exports = {
  // Fetch buoys from NDBC RSS feed and store into our Buoys table
  fetchBuoys: (req, res, next) => {
    const endpoint = '/rss/ndbc_obs_search.php?lat=40N&lon=73W&radius=100';
    axiosInstance.get(endpoint)
    .then(xml => {
      // Parse XML into JSON, then return result data
      parser(xml.data, (err, results) => {
        let buoyList = [];
        for (let item of results.items) {
          let itemDescription = parseDescription(item.description);
          let formattedBuoy = {
            title: item.title,
            date: item.date,
            description: itemDescription,
            link: item.link,
          };
          buoyList.push(formattedBuoy);
        }
        // Repopulate buoys in Buoys table
        Buoys.remove().exec()
        .then(() => {
          Buoys.insertMany(buoyList)
          .then(() => {
            console.log('Repopulated buoys', buoyList);
            res.json(buoyList);
          });
        })
        .catch(err => next(err));
      });
    })
    .catch(err => next(err));
  },

  // Grab all buoys from our Buoys table
  getBuoys: (req, res, next) => {
    Buoys.find({})
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
  }
};
