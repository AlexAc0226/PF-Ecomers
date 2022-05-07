module.exports = function init() {
  const User = require("./models/User.js");
  const Category = require("./models/Category.js");
  const Products = require("./models/Product.js");
  const Images = require("./models/Images.js");

  ////relaciones////

  User.belongsToMany(Products, { through: "user_product" });
  Products.belongsToMany(User, { through: "user_product" });

  Products.belongsToMany(Category, { through: "product_category" });
  Category.belongsToMany(Products, { through: "product_category" });

  //Products.belongsToMany(Images, { through: "product_images" });
  //Images.belongTo(Products);
};
