import { Router } from 'express';
import {
  getRanking
} from '../controllers/getRankingController.js';

const getRankingRouter = Router();

getRankingRouter.get('/ranking', getRanking);

export default getRankingRouter;