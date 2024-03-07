const express = require('express');
const app = express();
const path = require("path");
const basicAuth = require('express-basic-auth');
//const bearerToken = require('express-bearer-token');
const port = 3000;

app.use("/public", express.static(path.join(__dirname,'public')));

app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

/*app.use(bearerToken());
app.use(function (req, res) {
  res.send('Token '+req.token);
})*/

app.get('/', (req, res) => {
    res.send('Respondiendo a peticion get desde server express =)');
})

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
})