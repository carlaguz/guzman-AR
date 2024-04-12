const express = require("express");
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.json());

app.post('/login', (req, res, next) => {
    var privateKey = fs.readFileSync(path.join(__dirname, '/llaves/privada.pem'));
    let token = jwt.sign(req.body, privateKey, { algorithm: 'RS256' });
    res.json({token: token});
});

function validarToken(req, res, next) {
    var cert = fs.readFileSync(path.join(__dirname, '/llaves/publica.pem'));  // get public key
    //console.log(req.headers.authorization);
    jwt.verify(req.headers.authorization, cert, function(err, decoded) {
        if(err) {
            res.json({error: "token invalido!"});
        } else {
            next();
        }
      });
}

app.get('/users', validarToken, (req, res) => {
    res.send('Contestando a get desde Server Express');
});

app.listen(port, () => {
    console.log('App listening on port 3000! =)');
});