var express = require('express');
var router = express.Router();

let routerProducts = require("./products.js");

router.use("/products", routerProducts)

module.exports = router;
