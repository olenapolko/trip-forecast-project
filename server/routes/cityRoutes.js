import express from 'express';
import { getAllCities } from '../controllers/citiesController.js';

const router = express.Router();

router.get('/', getAllCities);

export default router;
