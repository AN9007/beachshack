const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/productsController');

//  == This route will SHOW ALL the products and their category ==  //

router.get('/', controller.showAll);


//  == This route will ADD a product ==  //

router.post('/add', controller.add);


//  == This route will DELETE a product ==  //

router.post('/delete', controller.delete);


//  == This route will UPDATE a product ==  //

router.post('/update', controller.update);


//  == This route will FIND a product by the products name ==  //

router.get('/:id', controller.findProduct);




module.exports = router;