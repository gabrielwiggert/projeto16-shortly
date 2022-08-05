import { Router } from 'express';
import {
  createRental
} from '../controllers/rentalController.js';

const rentalsRouter = Router();

rentalsRouter.post('/rentals', createRental);

export default rentalsRouter;
