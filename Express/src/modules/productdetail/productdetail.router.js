const app = require('express');
const router = app.Router();

const controller = require('./productdetail.controller');

router.get('/admin/products/:_ID', (req, res, next) => {
    controller.getproductdetailData(req.params._ID,req, res, next);
});

module.exports = router;