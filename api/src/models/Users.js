const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false }
  }, { timestamps: false });
};