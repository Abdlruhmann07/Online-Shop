const path = require('path')

const express = require('express')

const router = express.Router();

const productsController = require('../controllers/products')

router.get('/', productsController.getPorducts )


module.exports = router