import { Router } from 'express';

import rentalsRouter from './rentalsRouter.js';

const router = Router();

router.use(rentalsRouter);

export default router;
