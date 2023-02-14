const { Router } = require('express');
const router = Router();
const viewsRoutes = require('./views/views.routes');
const productsRoutes = require('./products/products.routes');

router.use('/', viewsRoutes);
router.use('/', productsRoutes);

module.exports = router;