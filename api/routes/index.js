var express = require('express');
var router = express.Router();

let routerProducts = require("./products.js");
let routerCategory = require("./category.js");

router.use("/products", routerProducts)
router.use("/category", routerCategory)



module.exports = router;
