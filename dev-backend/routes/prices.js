const express = require('express');
const router = express.Router();
const { priceList } = require('../models/price-list');


router.get('/', (req, res) => {
  console.log('prices')
  res.send(priceList);
});



module.exports = router;