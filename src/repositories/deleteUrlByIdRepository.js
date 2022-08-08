import connection from '../db/pgsql.js';

async function deleteUrlById(id) {
	return connection.query(`DELETE FROM urls WHERE id= $1`, [id]);
}

const deleteUrlByIdRepository = {
	deleteUrlById
}
export default deleteUrlByIdRepository;