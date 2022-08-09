import connection from '../db/pgsql.js';

async function getRanking(id) {
	return connection.query(`
		SELECT users.id, users.name, COUNT(urls.id) as "linksCount", SUM(urls."visitCount") as "visitCount" FROM urls
		JOIN users ON urls."userId" = users.id
		GROUP BY users.id ORDER BY "visitCount" DESC LIMIT 10
  	`);
}

const getRankingRepository = {
	getRanking
}
export default getRankingRepository;