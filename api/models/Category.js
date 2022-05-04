const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Category;
