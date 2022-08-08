import connection from '../db/pgsql.js';

async function shortenRegister(url, shortUrl) {
	return connection.query(`INSERT INTO urls ("url","shortUrl") VALUES ($1, $2);`, [url, shortUrl]);
}

const shortenRepository = {
	shortenRegister
}
export default shortenRepository;