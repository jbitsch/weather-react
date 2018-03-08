const express = require('express');
const router = express.Router();
const responseHelper = require("../helper/response");
const City = require('../models/city');

router.get('/:name', function(req, res) {
  const city = req.params.name;
  getWeather(res,city);
});

router.get('/', function(req, res) {
  const city = "Copenhagen";
  getWeather(res,city);
});

function getWeather(res,city) {
  City.get(city)
    .then(data => {
      responseHelper.sendResponse(res,data);
    }, function (err) {
      responseHelper.notFound(res);
    }).catch(err => {
    responseHelper.serverError(res,err.message);
  });
}

module.exports = router;