const addProduct = require("../services/createProduct");

const createProduct = async(req, res) => {
    try {        
        const product = {
            name: req.body.name,
            img: req.body.img,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category
        }

        if(!product.name || !product.img || !product.price || !product.description || !product.category) {
            res.status(400).json({
                msg: "Faltan datos..."
            })
        }else{
            await addProduct(product, req, res);
        }

    }catch(err) {
        console.log(err);
    }
}

module.exports = createProduct;