const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, Express!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});