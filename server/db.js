const Pool = require("pg").Pool;
const pool = new Pool({
  host: "138.68.182.30",
  user: "postgres",
  password: "White43534423?ghhjhh",
  port: 5432,
  database: "trelloclone",
});

module.exports = pool;
