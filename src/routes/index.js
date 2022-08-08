import { Router } from 'express';

import signinRouter from './signinRouter.js';
import signupRouter from './signupRouter.js';
import urlsShortenRouter from './urlsShortenRouter.js';

const router = Router();

router.use(signinRouter);
router.use(signupRouter);
router.use(urlsShortenRouter);

export default router;
