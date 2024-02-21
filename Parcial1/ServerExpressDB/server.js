const express = require('express');
const app = express();
const morgan = require("morgan");
const port = 8080;
const mysql = require('mysql2');

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sonic_crud',
    port: '3306',
    password: 't33nt1t4n5'
  });

  // GET
  // /videojuego?var=66
app.get('/videojuego', (req, res) => {

    console.log(req.query.IdVideojuego)

    if (typeof req.query.IdVideojuego == 'undefined') {
      connection.query(
        'SELECT * FROM videojuego', function (err, results) {
          if (err) {
            console.error("no work");
            res.status(500).send("no data fetched");
            return;
          }
          if (results.length == 0) {
            res.status(404).send("no games fetched");
          }
          else {
            console.log(results);
            res.send(results);
          }
        });
    }

    else {
    connection.query(
      'SELECT * FROM videojuego WHERE IdVideojuego = ' + req.query.IdVideojuego, 
      function (err, results) {
        if (err) {
          console.error("no work");
          res.status(500).send("no data fetched");
          return;
        }
        if (results.length == 0) {
          res.status(404).send("no games fetched");
        }
        else {
          console.log(results);
          res.send(results);
        }
      }
    )}
    // Mostrar cuando no hay ningun dato
    // res.status(400).json("")
})

// POST
app.post('/videojuego', (req, res) => {
  console.log(req.body);
  res.send(req.body);
  // Insert
  // affectedRows
})

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
})