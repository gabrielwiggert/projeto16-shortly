import { Router } from 'express';
import loginSchema from "../schemas/loginSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  signin
} from '../controllers/signinController.js';

const signinRouter = Router();

signinRouter.post('/signin', validateSchema(loginSchema), signin);

export default signinRouter;