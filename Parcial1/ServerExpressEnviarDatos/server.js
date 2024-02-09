const express = require('express');
const app = express();
const morgan = require("morgan");
const port = 3000;

// Funciones middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(express.text());

app.use((req, res, next)=>{
    console.log("hi")
    next();
})

// Envio de parametros en las peticiones. Revision el dia de mañana.
// Enviar parametros en la query string
app.get('/alumnos', (req, res, next) => {
    console.log(req.query);
    res.send('Respondiendo a peticion get desde server express =)');
})

// Recibiendo parametros como parte de la ruta
app.get('/maestros/:carrera', (req, res, next) => {
    console.log(req.params.carrera);
    res.send('Respondiendo a peticion get desde server express =)');
})

// Recibiendo parametros como json en el body
app.get('/administrativos', (req, res, next) => {
    // console.log(req.body);

    for (const campo in req.body) {
        console.log(req.body[campo]);
    }
    res.send('Respondiendo a peticion get desde server express =)');
})

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
})