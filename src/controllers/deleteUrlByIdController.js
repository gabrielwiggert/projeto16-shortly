import deleteUrlByIdRepository from '../repositories/deleteUrlByIdRepository.js';
import getUrlByIdRepository from '../repositories/getUrlByIdRepository.js';

export async function deleteUrlById(req, res) {
  const { id } = req.params;

  try {
    const result = await getUrlByIdRepository.getUrlById(id);
      if (result.rowCount === 0) {
      return res.sendStatus(404);
    } 
    if (res.locals.session.rows[0].userId === result.rows[0].userId) {
      await deleteUrlByIdRepository.deleteUrlById(id);
      return res.sendStatus(204);
    } else {
      return res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}