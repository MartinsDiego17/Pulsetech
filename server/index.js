import express from 'express';
import db from './config/db.js';
import cors from 'cors';

const app = express();

const PORT = 3001;

try {
	await db.authenticate();
	db.sync({ force: false });
	console.log('Conexion correcto a la base de datos');
} catch (error) {
	console.log(error);
}

app.use(cors());

app.listen(PORT, () => {
	console.log(`el servidor esta funcionando en el puerto ${PORT}`);
});
