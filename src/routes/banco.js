const {
    Router
} = require('express');

const router = Router();

router.get('/', (request, response) => {

    const bankOptions = {
        'contas': ['corrente', 'poupanca'],
        'pouponca': ['tipos', 'regras', 'rendimentos', 'resgates'],
        'taxas': ['credito', 'emprestimo', 'selic'],
        'cartoes': ['limites', 'cheque especial', 'milhas']

    }

    response
        .status(200)
        .json({
            status: 'All services suported',
            data: bankOptions
        });
});

module.exports = router;