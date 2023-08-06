const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  user: process.env.DATABASE_USER,        // Replace with your PostgreSQL username
  host: process.env.DATABASE_HOST,            // Replace with your PostgreSQL host
  database: process.env.DATABASE,    // Replace with your PostgreSQL database name
  password: process.env.DATABASE_PASSWORD,    // Replace with your PostgreSQL password
  port: process.env.DATABASE_PORT,                   // Replace with the port your PostgreSQL server is running on (default: 5432)
});

module.exports = pool;