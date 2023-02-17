const { Router } = require('express');
const cartModel = require('../../models/cart/cart.models');
const router = Router();
const util = require('util');

router.post('/', async (req, res, next) => {
    const cart = await cartModel.create({});
    res.json({
        status: 'success',
        payload: cart
    });
});

module.exports = router;