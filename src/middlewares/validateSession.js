import sessionRepository from '../repositories/sessionRepository.js';

async function validateSession(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace('Bearer ', '');
  const session = await sessionRepository.sessionExists(token);

  if (session.rowCount === 0) {
    return res.sendStatus(401);
  }

  res.locals.session = session;

  next();
}

export default validateSession;
