import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Meets = db.define(
	'Meets',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		date: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		hour: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

export default Meets;
