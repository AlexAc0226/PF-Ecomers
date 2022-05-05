module.exports= function init(){
    
    const User = require("./models/User.js");
    const Category = require("./models/Category.js");
    const Products = require("./models/Product.js");

    ////relaciones////


    User.belongsToMany(Products,{ through: "user_product" })
    Products.belongsToMany(User,{ through: "user_product" })

    Products.belongsToMany(Category,{ through: "product_category" })
    Category.belongsToMany(Products,{ through: "product_category" })
}