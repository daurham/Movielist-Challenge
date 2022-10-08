const mysql2 = require('mysql2');

const { PASS, USER, DATABASE } = require('dotenv').config().parsed;

console.log('db:', DATABASE);


module.exports = mysql2.createConnection({
  host: 'localhost',
  user: USER,
  database: DATABASE,
  password: PASS
});