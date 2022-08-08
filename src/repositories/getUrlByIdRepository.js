import connection from '../db/pgsql.js';

async function getUrlById(id) {
	return connection.query(`SELECT * FROM urls WHERE id= $1`, [id]);
}

const getUrlByIdRepository = {
	getUrlById
}
export default getUrlByIdRepository;