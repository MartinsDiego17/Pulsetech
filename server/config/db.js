import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const db = new Sequelize(
	`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

export default db;
