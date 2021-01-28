const { Pool } = require("pg");

const pool = new Pool({
  user: "dbsjffgqesetwa",
  host: "ec2-18-235-109-97.compute-1.amazonaws.com",
  database: "d9t1os9b6p3til",
  password: "1fe1fb24710724998f33af35c8b79f48134cf30a979b5e93178459868ba26b6f",
  port: 5432,
});

module.exports = pool;
