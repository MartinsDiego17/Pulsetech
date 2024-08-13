import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const db = new Sequelize(
	`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
);

export default db;
