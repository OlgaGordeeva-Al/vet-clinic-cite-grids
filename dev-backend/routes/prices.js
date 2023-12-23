const express = require('express');
const router = express.Router();
const  priceList = require('../models/price-list');


router.get('/', (req, res) => {
  console.log(priceList)
  res.send(priceList.priceList);
});



module.exports = router;