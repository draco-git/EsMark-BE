import { Client } from "pg";

const client = new Client();

client.connect();

let query = `Select * from "Users"`;

client.query(query, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
