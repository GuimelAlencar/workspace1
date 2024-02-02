const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("Hello wordl!")
});

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso na porta 3000:  ")
});

/*
Importa e executa uma função que é usada para criar uma rota raiz ("/")
com o objetivo de receber uma requisição e responder com a mensagem Olá mundo!
*/