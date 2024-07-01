// models/profileModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  extensionPath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  proxy: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  services: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

module.exports = Profile;
