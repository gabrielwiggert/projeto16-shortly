import { Router } from 'express';

import signinRouter from './signinRouter.js';

const router = Router();

router.use(signinRouter);

export default router;
