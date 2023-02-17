const { Router } = require('express');
const router = Router();
const viewsRoutes = require('./views/views.routes');
const productsRoutes = require('./products/products.routes');
const cartRoutes = require('./cart/cart.routes');


router.use('/', viewsRoutes);
router.use('/', productsRoutes);
router.use('/cart', cartRoutes);

module.exports = router;