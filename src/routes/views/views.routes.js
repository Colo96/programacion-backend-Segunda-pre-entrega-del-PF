const { Router } = require('express');
const router = Router();

const productsModel = require('../../models/products/products.models');
const cartProductsModel = require('../../models/cart/cart.models');

router.get('/', async (req, res) => {
    const products = await productsModel.find().lean();
    res.render("home", { products });
});

router.get('/cart', async (req, res) => {
    res.render('cart', { cartData });
});


module.exports = router;