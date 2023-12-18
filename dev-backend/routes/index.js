const express = require('express');
const router = express.Router();
const { serviceData } = require('../models/about-page-data');


router.get('/', (req, res) => {
  console.log('main page request')
  res.send(serviceData);
});



module.exports = router;