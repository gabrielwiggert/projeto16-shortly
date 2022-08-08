import bcrypt from 'bcrypt';
import getUrlByIdRepository from '../repositories/getUrlByIdRepository.js';

export async function getUrlById(req, res) {
  const { id } = req.params;

  try {
    const result = await getUrlByIdRepository.getUrlById(id);
    if (result.rowCount === 0) {
      return res.sendStatus(404);
    }

    const { shortUrl, url } = result.rows[0];
    res.status(200).send({ id, shortUrl, url });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}