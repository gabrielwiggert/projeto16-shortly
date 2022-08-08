import connection from '../db/pgsql.js';

async function sessionExists(token) {
	return connection.query(`SELECT * FROM sessions WHERE token= $1`, [token]);
}

const sessionRepository = {
	sessionExists
}
export default sessionRepository;