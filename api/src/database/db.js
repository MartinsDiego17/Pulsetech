require('dotenv').config();
const pg = require('pg');
const { Sequelize } = require('sequelize');
/* const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
 */
const DB_USER = "postgres";
const DB_PASSWORD = 1234;
const DB_HOST = "localhost";
const DB_PORT = 5432;

const UsersModel = require("../models/Users");
const MeetsModel = require("../models/Meets");

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/pulsetech`,
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
