import connection from '../db/pgsql.js';

async function getMe(id) {
		return connection.query(`
		SELECT urls.id, urls.url, urls."shortUrl", urls."visitCount"
		FROM urls
		JOIN users ON urls."userId" = users.id
		WHERE users.id = $1`, [id]);
}

const getMeRepository = {
	getMe
}
export default getMeRepository;