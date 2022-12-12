const express = require('express');

const cartController = require ('../controllers/Control cart')

const router = express.Router()

router.get('/cart',cartController.Getcart);

module.exports = router
