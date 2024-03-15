const express = require('express');
const { rutapersonajes } = require('./routes/rutaPersonajes');
const app = express();
const port = 8080;

app.use('/personajes', rutapersonajes);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
  });

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
});