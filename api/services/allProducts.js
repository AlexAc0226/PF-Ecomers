const product = require('../models/Product')

async function allProducts(res){
    const response =await product.findAll()

    res.send(response)
}
module.exports = allProducts;