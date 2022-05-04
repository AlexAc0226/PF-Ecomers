const { DataTypes } = require('sequelize');

const sequelize=require('../db')

 const User =sequelize.define('User', {
    id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }, 
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },        
  });

module.exports = User
