import { Router } from 'express';
import {
  open
} from '../controllers/openController.js';

const openRouter = Router();

openRouter.get('/urls/open/:shortUrl', open);

export default openRouter;