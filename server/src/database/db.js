require('dotenv').config();
const pg = require('pg');
const { Sequelize } = require('sequelize');
const { DB_URL } = process.env;

console.log("URL-DATABASE: ", DB_URL);

const UsersModel = require("../models/Users");
const MeetsModel = require("../models/Meets");

const sequelize = new Sequelize(
   DB_URL,
   {
      logging: false,
      native: false,
      dialectModule: pg
   }
);

UsersModel(sequelize);
MeetsModel(sequelize);

const { user, meet } = sequelize.models;

user.hasMany(meet, { foreignKey: 'userId', as: 'meets' });
meet.belongsTo(user, { foreignKey: 'userId', as: 'user' });

module.exports = {
   user,
   meet,
   conn: sequelize,
};
