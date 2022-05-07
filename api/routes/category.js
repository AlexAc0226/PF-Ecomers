var express = require("express");
var router = express.Router();

let createCategory = require('../controllers/postCategory.js')

router.post('/', createCategory)


module.exports = router;
