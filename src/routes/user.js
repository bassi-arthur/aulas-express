const {
    Router
} = require('express');

const router = Router();

router.get('/', (request, response) => {
    const users = [{
            name: 'arthur',
            codigo: '049',
            birthday: '02/07/2001'
        }, {
            name: 'carlos',
            codigo: '089',
            birthday: '30/01/1968'
        }, {
            name: 'lucimar',
            codigo: '039',
            birthday: '25/07/1998'
        },
        {
            name: 'irineu',
            codigo: '050',
            birthday: '12/07/1987'
        }
    ]

    const slicedMovs = request.query.limit ? users.slice(0, request.query.limit) : users;

    response
        .status(200)
        .json({
            message: 'all users by account',
            data: slicedMovs,
        });

});

router.delete('/delete', (request, response) => {
    console.log(request.query.name, ' foi deletado.');

    response
        .status(200)
        .json({
            message: `O usuario ${request.query.name} foi deletado!`
        });
});

router.post('/add', (request, response) => {
    const name = (request.query.name);
    const codigo = (request.query.codigo);
    const birthday = (request.query.birthday);

    const newAccount = {
        name: name,
        codigo: codigo,
        birthday: birthday
    }

    console.log(newAccount)

    response
        .status(200)
        .json({
            message: 'user has been created succefull'
        });
});

router.put('/update', (request, response) => {
    const name = (request.query.name);
    const codigo = (request.query.codigo);
    const birthday = (request.query.birthday);
    
    response
        .status(200)
        .json({
            message: 'user has been updated succefull'
        });
})

module.exports = router;