const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/productsController');

//  == This route will SHOW ALL the products and their category ==  //

router.get('/', controller.showAll);

//  == This route will FIND a product by the products name ==  //



module.exports = router;