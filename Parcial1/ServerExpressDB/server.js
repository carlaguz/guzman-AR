const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql2');

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sonicAPI',
    port: '3306',
    password: 't33nt1t4n5'
  });

// GET
app.get('/characters', (req, res) => {

    console.log(req.query.Id)

    if (typeof req.query.Id == 'undefined') {
      connection.query(
        'SELECT * FROM Characters', function (err, results) {

          (results.length == 0) ? res.status(404).send("no chars fetched") : console.log(results); res.send(results)

        });
    }
    else {
    connection.query(
      'SELECT * FROM Characters WHERE Id = ' + req.query.Id,
      function (err, results) {
        
        (results.length == 0) ? res.status(404).send("no chars fetched") : console.log(results); res.send(results);
  
      });
    }
})

// POST
app.post('/characters', (req, res) => {
  try {
    const { Nombre, Especie, Genero, Alineamiento, Habilidad } = req.body;
    console.log(req.body);
    if(!Nombre || !Especie || !Genero || !Alineamiento || !Habilidad){
      res.status(400).send("missing fields!");
    }
    connection.query(
      'INSERT INTO `Characters` (`Nombre`, `Especie`, `Genero`, `Alineamiento`, `Habilidad`) VALUES (?, ?, ?, ?, ?)',
      [Nombre, Especie, Genero, Alineamiento, Habilidad],
      function (err, results) { 
        console.log(results);
        res.status(202).send("character created successfully");
      })
  } catch(err) {
    res.status(500).send(err.message)
  }
})

// DELETE
app.delete('/characters/:Id', (req, res) => {
  try {
    const { Id } = req.params.Id;
    connection.query(
      'DELETE FROM `Characters` WHERE `Id` = ?', [Id],
      function (err, results) {
        (results.affectedRows == 0 ? res.status(404).send("no chars fetched") : console.log(results), res.status(202).send("char deleted successfully"))
      })
    } catch(err) {
      res.status(500).send(err.message);
    }
})

// PATCH
app.patch('/characters/:Id', (req, res) => {
  try {
    const { Id } = req.params.Id;
    const { Nombre, Especie, Genero, Alineamiento, Habilidad } = req.body;
    console.log(req.body);
    connection.query(
      'UPDATE `Characters` SET `Nombre` = ?, `Especie` = ?, `Genero` = ?, `Alineamiento` = ?, `Habilidad` = ? WHERE `Id` = ? ', 
      [Nombre, Especie, Genero, Alineamiento, Habilidad, Id],
      function (err, results) {
        (results.affectedRows == 0 ? res.status(404).send("no chars fetched") : console.log(results), res.status(202).send("char updated successfully"))
      })
    } catch(err) {
      res.status(500).send(err.message)
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
})