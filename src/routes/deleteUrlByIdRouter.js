import { Router } from 'express';
import validateSession from "../middlewares/validateSession.js";
import {
  deleteUrlById
} from '../controllers/deleteUrlByIdController.js';

const deleteUrlByIdRouter = Router();

deleteUrlByIdRouter.delete('/urls/:id', validateSession, deleteUrlById);

export default deleteUrlByIdRouter;