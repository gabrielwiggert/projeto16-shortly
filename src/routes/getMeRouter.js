import { Router } from 'express';
import validateSession from "../middlewares/validateSession.js";
import {
  getMe
} from '../controllers/getMeController.js';

const getMeRouter = Router();

getMeRouter.get('/users/me', validateSession, getMe);

export default getMeRouter;