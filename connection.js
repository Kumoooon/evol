const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "dydghks1!",
  database: "postgres",
});
module.exports = client;
