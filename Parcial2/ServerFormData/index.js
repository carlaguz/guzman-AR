const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: "uploads/" });
const port = 3000;

app.post("/upload", upload.single("image"), (req, res, next) => {
    res.send("Subida exitosa");
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