const {
    response,
    request
} = require('express');
const express = require('express')
const server = express()
const port = 3000

server.listen(port, () => {
    console.log(`Example server listening at http://localhost:${port}`)
})

server.get('/', (req, response) => {
    response
        .status(200)
        .send('{ status: "ok"}')
})

server.post('/', (request, response) => {
    response.status(201).send('ok post')
})


server.get('/banco/:nome/codigo/', (request, response) => {
    console.log(request.params.nome);

    response
        .status(200)
        .json({
            message: 'all users by account',
            users: [{
                name: 'arthur',
                codigo: '049',
                birthday: '02/07/2001'
            }]
        });
});

server.put('/banco/:nome/codigo/', (request, response) => {
    console.log(request.query.teste1);

    const newAccount = {
        name: request.params.nome,
        codigo: '045',
        birthday: request.query.birthday
    }

    console.log(newAccount)

    response
        .status(200)
        .json({
            message: 'user has been updated succefull'
        });
});

server.delete('/banco/:nome/codigo/', (request, response) => {
    console.log(request.params.nome);

    response
        .status(200)
        .json({
            message: `Voce deletou o usuario ${request.params.nome}!`
        });
});