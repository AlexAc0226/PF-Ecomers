const { DataTypes } = require('sequelize');

const sequelize=require('../db')

const User = sequelize.define('user', {
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone_number:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol:{
    type: DataTypes.ENUM("admin", "user"),
    //sin rol es invitado
  },
  birthday:{
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = User
