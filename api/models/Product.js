const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
    description: {
    type: DataTypes.STRING,
    allowNull: false
  },
   
});

module.exports = Product;
