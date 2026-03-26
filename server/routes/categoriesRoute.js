const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/categoriesController');

//  == This route will ADD a category ==  //

router.post('/add', controller.add);


//  == This route will DELETE a category ==  //

router.post('/delete', controller.delete);


//  == This route will UPDATE a category ==  //

router.post('/update', controller.update);


//  == This route will SHOW ALL the categories ==  //

router.get('/', controller.showCategories);


//  == This route will DISPLAY ALL THE PRODUCTS from one category  ==  //

router.get('/:category', controller.findCategory)


module.exports = router;