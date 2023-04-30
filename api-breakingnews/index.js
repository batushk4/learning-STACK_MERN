const express = require("express");
const app = express();

// rota tem três coisa:
// 1: Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
//   GET - pega uma info
//   POST - cria uma info
//   PUT - altera toda a info
//   PATH - altera uma parte da info
//   DELETE - apaga uma info

// 2: name - Um identificador da rota

// 3: Function (Callback) - Responsável por executar algum comando

app.get("/route", (req, res) => {
    const soma = 100 + 1;

    // res.json(soma);
    res.send({ soma: soma });
});

app.listen(3000);

