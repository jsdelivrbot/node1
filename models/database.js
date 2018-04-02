const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:SoujanyaVishnu1@localhost:5432/db1';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)',
  'CREATE TABLE users(email VARCHAR(100) not null, name VARCHAR(100) not null, password text not null)');
  
  return query;
//query.on('end', () => { client.end(); });