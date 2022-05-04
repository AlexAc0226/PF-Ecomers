const getById = require('../services/productsID')
const getCategory =require('../services/productCategory')
const allProducts =require('../services/allProducts')
async function getProducts (req,res){
    const {id,category}= req.query;
    
    if(id){await getById(id,req,res)}
    if(category){await getCategory(category,req,res)}
    else{
        await allProducts(res)
    }
    
    
}

module.exports= getProducts