const express = require('express');
const { rutapersonajes } = require('./routes/rutaPersonajes');
const app = express();
const port = 8080;

app.use('/personajes', rutapersonajes);

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
})