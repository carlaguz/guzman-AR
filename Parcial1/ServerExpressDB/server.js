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
    //console.log(req.query.IdVideojuego)
    console.log(req.query.IdVideojuego)
    if (typeof req.query.IdVideojuego == 'undefined') {
      connection.query(
        'SELECT * FROM videojuego', function (err, results, fields) {
          console.log(results);
          //console.log(fields);
          res.send(results)
        });
    }
    
    else {
    connection.query(
      'SELECT * FROM videojuego WHERE IdVideojuego = ' + req.query.IdVideojuego,
      function (err, results, fields){
        res.send(results)
      }
    )}

    if (results.length > 0)
    {
      return res.json("Oki")
    }
    else
    {
      res.status(500).json("no oki")
    }
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