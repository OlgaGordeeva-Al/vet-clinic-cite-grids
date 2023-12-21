const express = require('express');
const router = express.Router();
const serviceData = require('../models/about-page-data');


router.get('/', (req, res) => {
  console.log(serviceData);
  res.send(serviceData.servicesData);
});



module.exports = router;