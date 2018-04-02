const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://fzdbdqvcsbxxnx:642b7242b56c1be0bea176bc456db038d85e2bdbaf941a62fe0d98974a1d4ec7@ec2-54-243-63-13.compute-1.amazonaws.com:5432/drq1nrcp0o4mq';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)',
  'CREATE TABLE users(email VARCHAR(100) not null, name VARCHAR(100) not null, password text not null)');
  
  return query;
//query.on('end', () => { client.end(); });
