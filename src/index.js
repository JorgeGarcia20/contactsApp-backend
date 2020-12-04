const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({ saludo: "Hello, you are in Home page" });
})

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my_secret',
  database: 'contacts'
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  }
  else {
    console.log('Connected to the database...');
  }
});

app.listen(port, () => { console.log("Server running on http://localhost:8080") });