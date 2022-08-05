import pkg from 'pg';

const { Pool } = pkg;

const connection = new Pool({
  host: 'localhost',
  port: 5000,
  user: 'postgres',
  password: 'password',
  database: 'shortly'
});

export default connection;
