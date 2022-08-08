import openRepository from '../repositories/openRepository.js';

export async function open(req, res) {
  const { shortUrl } = req.params;

  try {
    const result = await openRepository.open(shortUrl);
    if (result.rowCount === 0) {
      return res.sendStatus(404);
    }

    const { url, visitCount } = result.rows[0];
    await openRepository.iterateViewCount(visitCount, shortUrl);
    res.redirect(`${url}`);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}