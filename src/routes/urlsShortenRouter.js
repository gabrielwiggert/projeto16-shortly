import { Router } from 'express';
import validateSession from "../middlewares/validateSession.js";
import urlSchema from "../schemas/urlSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  shorten
} from '../controllers/shortenController.js';

const urlsShortenRouter = Router();

urlsShortenRouter.post('/urls/shorten', validateSchema(urlSchema), validateSession, shorten);

export default urlsShortenRouter;