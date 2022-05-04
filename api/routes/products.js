var express = require("express");
var router = express.Router();
let getProducts = require('../controllers/getProducts.js')

router.get('/',getProducts)
router.post('/',(req,res)=>{
   const v1= 'hace tu mierda alexis'
})


module.exports = router;
