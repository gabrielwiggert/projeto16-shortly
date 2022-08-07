import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import signinRepository from '../repositories/signinRepository.js';

export async function signin(req, res) {
  let {email, password} = req.body;
  let token = null;

  const result = await signinRepository.emailExists(email);

  if (result.rowCount === 0) {
    return res.sendStatus(401);
  }

  if (bcrypt.compareSync(password, result.rows[0].password)) {
    token = uuid();
  } else {
    return res.status(401).send('Senha ou email incorretos!');
  }

    try {
      await signinRepository.login(token, result.rows[0].id);
      return res.status(200).send({ token });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
}