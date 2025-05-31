const { Pool } = require("pg");
require('dotenv').config();
const role_name = process.env.role_name;
const role_password = process.env.role_password;
console.log(role_name);
console.log(role_password);

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: "postgresql://" + role_name + ":" + role_password + "@localhost:5432/top_users"
});
