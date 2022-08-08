import getMeRepository from '../repositories/getMeRepository.js';

export async function getMe(req, res) {
  const session = res.locals.session;
  const id = session.rows[0].userId;

  try {
    const result = await getMeRepository.getMe(id);
    if (result.rowCount === 0) {
      return res.sendStatus(404);
    }

    const name = result.rows[0].name;
    let totalVisitCount = 0;
    result.rows.forEach(row => totalVisitCount+=row.visitCount)
    const shortenedUrls = result.rows;
    res.status(200).send({ id, name, totalVisitCount, shortenedUrls});
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}