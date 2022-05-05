var express = require("express");
var router = express.Router();

let getProducts = require('../controllers/getProducts.js')
let createProduct = require('../controllers/postProduct.js')

router.get('/:id', getProducts)
router.get('/', getProducts)
router.post('/', createProduct)


module.exports = router;
