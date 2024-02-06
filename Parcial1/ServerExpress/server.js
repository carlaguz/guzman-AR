const express = require('express');
const app = express();
const morgan = require("morgan");
const port = 3000;

app.use(morgan('combined'));

app.use((req, res, next)=>{
    console.log("hi")
    next();
})

app.get('/', (req, res) => {
    res.send('Respondiendo a peticion get desde server express =)');
})

app.post('/'), (req, res) => {
    res.send('Respondiendo a peticion post desde server express =)')
}

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
})