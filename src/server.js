const express = require('express');
const{ movRouter, userRouter, bancoRouter} = require('./routes');
const { PORT } = require('./config')

const server = express();

const middJson = express.json();
server.use(middJson);

server.use('/movimentacoes', movRouter);
server.use('/users', userRouter);
server.use('/banco', bancoRouter);

server.listen(PORT, () => {
    console.log(`Example server listening at http://localhost:${PORT}`)
})