import connection from '../db/pgsql.js';

export async function createRental(req, res) {
 /* const rental = req.body;
  try {
    const customersResult = await connection.query(
      `
      SELECT id FROM customers WHERE id = $1
    `,
      [rental.customerId]
    );
    if (customersResult.rowCount === 0) {
      return res.sendStatus(400); // bad request
    }

    const gameResult = await connection.query(
      `
      SELECT * FROM games WHERE id=$1
    `,
      [rental.gameId]
    );
    if (gameResult.rowCount === 0) {
      return res.sendStatus(400); // bad request
    }
    const game = gameResult.rows[0];

    const result = await connection.query(
      `
      SELECT id
      FROM rentals 
      WHERE "gameId" = $1 AND "returnDate" IS null
    `,
      [rental.gameId]
    );

    if (result.rowCount > 0) {
      if (game.stockTotal === result.rowCount) {
        return res.sendStatus(400); // bad request
      }
    }

    const originalPrice = rental.daysRented * game.pricePerDay;
    await connection.query(
      `
      INSERT INTO 
        rentals (
          "customerId", "gameId", "rentDate", 
          "daysRented", "returnDate", "originalPrice", "delayFee"
        )
        VALUES ($1, $2, NOW(), $3, null, $4, null); 
      `,
      [rental.customerId, rental.gameId, rental.daysRented, originalPrice]
    );

    res.sendStatus(201); // created
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // internal server error
  } */
}