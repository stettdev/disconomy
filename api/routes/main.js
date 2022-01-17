const express = require('express');
const globalMiddleware = require('../middleware/globalMiddleware');
const accountsRouter = require('./accounts');

const router = new express.Router();

router.use(globalMiddleware);
router.get('/', (req, res) => res.send('0'));
router.use('/accounts', accountsRouter);

module.exports = router;
