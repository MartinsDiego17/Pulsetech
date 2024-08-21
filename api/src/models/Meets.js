const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('meet', {
    id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
    date: { type: DataTypes.STRING, allowNull: false },
    hour: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    userName: { type: DataTypes.STRING },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    userId: { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' }, onDelete: 'CASCADE' }
  }, { tableName: 'meets', timestamps: false });
};
