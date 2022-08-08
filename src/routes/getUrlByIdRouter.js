import { Router } from 'express';
import {
  getUrlById
} from '../controllers/getUrlByIdController.js';

const getUrlByIdRouter = Router();

getUrlByIdRouter.get('/urls/:id', getUrlById);

export default getUrlByIdRouter;