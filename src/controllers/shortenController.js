import shortenRepository from '../repositories/shortenRepository.js';
import { nanoid } from 'nanoid'

export async function shorten(req, res) {
  const { url } = req.body;

  const shortUrl = nanoid();
  try {
      await shortenRepository.shortenRegister(url, shortUrl);
      return res.status(201).send({ shortUrl });

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}