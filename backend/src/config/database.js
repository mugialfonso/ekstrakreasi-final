const mysql = require("mysql2");

//connect to DB
const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  // password: "",
  database: "ekstrakreasi",
});

module.exports = dbPool.promise()