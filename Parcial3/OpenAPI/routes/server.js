const express = require('express');
//const app = express();
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sonicAPI',
    port: '3306',
    password: 't33nt1t4n5'
  });

/**
 * @swagger
 * components:
 *  schemas:
 *    Character:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        nombre:
 *          type: string
 *        especie:
 *          type: string
 *        genero:
 *          type: char
 *        alineamiento:
 *          type: string
 *        habilidad:
 *          type: string
 * 
 * paths:
 *   /characters:
 *     get:
 *       tags:
 *         - characters
 *       summary: obtener informacion del personaje especifico
 *       parameters:
 *         - in: query
 *           name: id
 *           description: id del personaje
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: oki
 *         404:
 *           description: not found
 *         500:
 *           description: connection error
 */
  router.get('/characters', (req, res) => {

    console.log(req.query.id)

    if (typeof req.query.id == 'undefined') {
      connection.query(
        'SELECT * FROM Characters', 
        function (err, results) {

          (results.length == 0) ? res.status(404).send("no chars fetched") : console.log(results); res.send(results)

        });
    }
    else {
    connection.query(
      'SELECT * FROM Characters WHERE Id = ' + req.query.id,
      function (err, results) {
        
        (results.length == 0) ? res.status(404).send("no chars fetched") : console.log(results); res.send(results);
  
      });
    }
})

router.get('/', (req, res) => {
  res.send('Welcome to the Sonic API =)!');
});

/**
 * @swagger
 * /characters:
 *   post:
 *     tags:
 *       - characters
 *     summary: agregar un personaje nuevo
 *     requestBody: 
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Character'
 *           example:
 *             Nombre: Vector
 *             Especie: Cocodrilo
 *             Genero: M
 *             Alineamiento: Hero
 *             Habilidad: Power
 *     responses:
 *       200:
 *         description: character created successfully
 *       404:
 *         description: missing fields!
 *       500:
 *         description: connection error
 */
router.post('/characters', (req, res) => {
  try {
    const { Nombre, Especie, Genero, Alineamiento, Habilidad } = req.body;
    console.log(req.body);
    if(!Nombre || !Especie || !Genero || !Alineamiento || !Habilidad){
      res.status(404).send("missing fields!");
    }
    connection.query(
      'INSERT INTO `Characters` (`Nombre`, `Especie`, `Genero`, `Alineamiento`, `Habilidad`) VALUES (?, ?, ?, ?, ?)',
      [Nombre, Especie, Genero, Alineamiento, Habilidad],
      function (err, results) { 
        console.log(results);
        res.status(200).send("character created successfully");
      })
  } catch(err) {
    res.status(500).send(err.message)
  }
})

/**
 * @swagger
 * /characters/{id}:
 *   delete:
 *     tags:
 *       - characters
 *     summary: eliminar un personaje
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del personaje
 *         schema:
 *           type: integer
 *     responses:
 *       202:
 *         description: char deleted successfully
 *       404:
 *         description: personaje no encontrado, no se pudo eliminar
 *       500:
 *         description: error de conexion !
 */
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

/**
 * @swagger
 * /characters/{id}:
 *   put:
 *     tags:
 *       - characters
 *     summary: modificar todos los datos de un personaje
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del personaje
 *         schema:
 *           type: integer
 *     requestBody: 
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Character'
 *           example:
 *             Nombre: Vector
 *             Especie: Cocodrilo
 *             Genero: M
 *             Alineamiento: Hero
 *             Habilidad: Power
 *     responses:
 *       202:
 *         description: char updated succesfully
 *       404:
 *         description: bad request
 *       500:
 *         description: error de conexion !
 */
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
        res.status(200).send("char updated successfully");
      })
    } catch(err) {
      res.status(500).send(err.message)
    }
})

module.exports = router;