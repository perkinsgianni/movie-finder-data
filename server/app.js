// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

// import files and packages
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

// create app server
const app = express();
const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`;
let cache = {};

// middleware: morgan's dev format
app.use(morgan('dev'));

// routes for GET requests
app.get('/', (req, res) => {
  // assign request (ex. i=tt3896198) for url to movieKey
  let movieKey = req.url;
  
  // if request is movie stored in cache
  if ( cache[movieKey] ) {
    console.log("Retrieving movie from cache...");
    // send movie data from cache as response
    res.send(cache[movieKey]);
    // console.log(cache[movieKey])
  } else {
      console.log("Retrieving movie from OMDB...");
      // initiate axios GET request from OMDB API
      axios.get(`http://www.omdbapi.com${movieKey}&apikey=${process.env.API_KEY}`)
        // then() method returns response
        .then((response) => {
          // assign movie data in response to movieData
          let movieData = response.data;
          // assign movieData to cache object
          cache[movieKey] = movieData;
          // send movie data
          res.send(movieData);
          // console.log(movieData)
        })
    }
});

// export express application
module.exports = app;