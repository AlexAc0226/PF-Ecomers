const { DataTypes } = require('sequelize');

const sequelize=require('../db')

 const User =sequelize.define('user', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    }, 
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },        
  });

module.exports = User
