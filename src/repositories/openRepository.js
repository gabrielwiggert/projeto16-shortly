import connection from '../db/pgsql.js';

async function open(shortUrl) {
	return connection.query(`SELECT * FROM urls WHERE "shortUrl"= $1`, [shortUrl]);
}

async function iterateViewCount(viewCount, shortUrl) {
	return connection.query(`UPDATE urls SET "visitCount"=$1 WHERE "shortUrl"= $2`, [(viewCount+1), shortUrl]);
}

const openRepository = {
	open,
	iterateViewCount
}
export default openRepository;