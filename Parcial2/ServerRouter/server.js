const express = require('express');
const { rutapersonajes } = require('./routes/rutaPersonajes');
const app = express();
const port = 8080;

app.use(express.json());

app.use('/', rutapersonajes);

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
});