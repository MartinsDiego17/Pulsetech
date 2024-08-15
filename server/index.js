import express from 'express';
import db from './config/db.js';
import cors from 'cors';
import Meets from './model/meet.js';
import router from './routes/routes.js';
const app = express();

const PORT = 3001;

try {
	await db.authenticate();
	db.sync({ force: true });
	console.log('Conexion correcto a la base de datos', Meets);
} catch (error) {
	console.log(error);
}

app.use(cors());
app.use('/', router);
app.listen(PORT, () => {
	console.log(`el servidor esta funcionando en el puerto ${PORT}`);
});
