const app = require('express');
const router = app.Router();

const controller = require('./userdetail.controller');

router.get('/admin/users/:_ID', (req, res, next) => {
    controller.getuserdetailData(req.params._ID,req, res, next);
});

module.exports = router;