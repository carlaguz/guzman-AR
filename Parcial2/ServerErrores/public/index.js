const express = require('express');
const app = express();
const port = 3000;

app.get("/gatos", (req, res, next) => {
    if (cosa){
        res.send('Respondiendo a peticion get desde server express =)');
    }
    else{
        res.send('Respondiendo a peticion get desde server express =)');
    }
});

app.get("/perros", (req, res, next) => {
    try{
        throw new Error("Ha ocurrido un error. D:");
    } catch(e){
        next(e)
    }
});

// Manejar el 404
app.use((req, res, next) => {
    res.status(404).send('Resource not found');
})

// Funcion manejadora de errores
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
})