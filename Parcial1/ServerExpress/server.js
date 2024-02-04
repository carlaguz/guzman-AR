const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Respondiendo a peticion get desde server express =)');
})

app.post('/'), (req, res) => {
    res.send('Respondiendo a peticion post desde server express =)')
}

app.listen(port, () => {
    console.log(`App listening on port ${port} =)`)
})