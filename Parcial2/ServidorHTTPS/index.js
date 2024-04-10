const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const https = require('https');
const port = 3000;

const options = {
    key: fs.readFileSync(path.join(__dirname, 'certificado/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certificado/cert.pem')),
  };

app.get('/', (req, res) => {
    res.json("Hello World!");
})

https.createServer(options, app).listen(port, () => {
    console.log("Servidor Express escuchando en puerto 3000!")
});
