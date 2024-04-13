const express = require("express");
const jwt = require('jsonwebtoken');
const port = 3000;
const app = express();

app.use(express.json());

app.post('/login', (req, res, next) => {
    let token = jwt.sign(req.body, 'secret');
    res.json({token: token});
});

function validarToken(req, res, next) {
    console.log(req.headers.authorization);
    jwt.verify(req.headers.authorization, 'secret', function(err, decoded) {
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