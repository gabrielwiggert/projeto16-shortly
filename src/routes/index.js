import { Router } from 'express';

import signinRouter from './signinRouter.js';
import signupRouter from './signupRouter.js';
import urlsShortenRouter from './urlsShortenRouter.js';
import getUrlByIdRouter from './getUrlByIdRouter.js';
import openRouter from './openRouter.js';
import deleteUrlByIdRouter from './deleteUrlByIdRouter.js';
import getMeRouter from './getMeRouter.js';

const router = Router();

router.use(signinRouter);
router.use(signupRouter);
router.use(urlsShortenRouter);
router.use(getUrlByIdRouter);
router.use(openRouter);
router.use(deleteUrlByIdRouter);
router.use(getMeRouter);

export default router;
