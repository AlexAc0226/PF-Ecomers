module.exports= function init(){
    
    const user = require("./models/User.js");
    const category = require("./models/Category.js");
    const products = require("./models/Product.js");

    ////relaciones////


    user.belongsToMany(products,{ through: "user_product" })
    products.belongsToMany(user,{ through: "user_product" })

    products.belongsToMany(category,{ through: "product_category" })
    category.belongsToMany(products,{ through: "product_category" })

}