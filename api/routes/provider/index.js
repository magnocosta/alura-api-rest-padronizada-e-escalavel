const router = require('express').Router();
const Model = require('./Model');
const Provider = require('./Provider');

router.get('/', async (req, res) => {
    const result = await Model.list();
    res.status(200).json(result);
});

router.post('/', async (req, res) => {
    const provider = new Provider(req.body);
    await provider.create();
    res.status(201).json(provider);
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const provider = new Provider({id});
        await provider.findById();
        res.status(200).json(provider);
    } catch (error) {
        res.status(200).json({
            error: error.message
        });
    }
})

router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const dataToUpdate = req.body;
        const provider = new Provider({... dataToUpdate, id});
        await provider.update();
        res.end();
    } catch (error) {
        res.status(200).json({
            error: error.message
        });
    }

})

module.exports = router;
