const app = require('express');
const router = app.Router();

const controller = require('./products.controller');

router.get('/admin/products',controller.getproductData);

module.exports = router;