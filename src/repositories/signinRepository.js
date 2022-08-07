import connection from '../db/pgsql.js';

async function emailExists(email) {
	return connection.query(`SELECT * FROM users WHERE email= $1`, [email]);
}

async function login(token, id) {
	return connection.query(`INSERT INTO sessions ("token", "userId") VALUES ($1, $2);`, [token, id]);
}

const signinRepository = {
	emailExists,
	login
}
export default signinRepository;