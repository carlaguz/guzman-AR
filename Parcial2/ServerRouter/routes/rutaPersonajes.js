const express = require('express');
const router = express.Router();
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
router.get('/characters', (req, res) => {

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
router.post('/characters', (req, res) => {
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
router.delete('/characters/:Id', (req, res) => {
  try {
    const { Id } = req.params;
    connection.query(
      'DELETE FROM `Characters` WHERE `Id` = ?', [Id],
      function (err, results) {
        console.log(results); 
        res.status(202).send("char deleted successfully");
      })
    } catch(err) {
      res.status(500).send(err.message);
    }
})

// PUT
router.put('/characters/:Id', (req, res) => {
  try {
    const { Id } = req.params;
    const { Nombre, Especie, Genero, Alineamiento, Habilidad } = req.body;
    console.log(req.body);
    connection.query(
      'UPDATE `Characters` SET `Nombre` = ?, `Especie` = ?, `Genero` = ?, `Alineamiento` = ?, `Habilidad` = ? WHERE `Id` = ? ', 
      [Nombre, Especie, Genero, Alineamiento, Habilidad, Id],
      function (err, results) {
        console.log(results);
        res.status(202).send("char updated successfully");
      })
    } catch(err) {
      res.status(500).send(err.message)
    }
})

module.exports = router();