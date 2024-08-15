import express from 'express';
import { handlerGetMeets } from '../handler/hanlderGetMeets.js';

const router = express.Router();

router.get('/', handlerGetMeets);

export default router;
