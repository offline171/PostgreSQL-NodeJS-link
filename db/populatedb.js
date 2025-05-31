#! /usr/bin/env node
require('dotenv').config();
const role_name = process.env.role_name;
const role_password = process.env.role_password;
console.log(role_name);
console.log(role_password);

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://" + role_name + ":" + role_password + "@localhost:5432/top_users",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
