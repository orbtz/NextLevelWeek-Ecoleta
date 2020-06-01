import express from "express";

const app = express();

app.get('/users', (request, response) => {
    console.log("Teste da Rota /users");
    
    response.json([
        'Fábio',
        'Rafael',
        'Barbosa'
    ]);
});

app.listen(3333);