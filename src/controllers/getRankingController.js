import getRankingRepository from '../repositories/getRankingRepository.js';

export async function getRanking(req, res) {

  try {
    const result = await getRankingRepository.getRanking();
    if (result.rowCount === 0) {
      return res.sendStatus(404);
    }

    res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
