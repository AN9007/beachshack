const Products = require('../models/productsModel');

class ProductController {
    // POST ADD ONE
    async add (req, res) {
        let {category, product} = req.body;
        let {image, name, price, description, stock, isPopular, productType } = product;

            try{
                let matchProducts = await Products.findOne({name});

                if (matchProducts) {
            
                    return res.send({ ok: true, data: `product ${name} already exists` })     
                }
             
                const newProduct = await Products.create({image, name, price, description, stock, category, isPopular, productType});
                res.send({ok: true, data: `product ${newProduct.name} added successfully`})
            }
            catch(e){
                res.send({e})
            }
    }

     // DELETE PRODUCT
     async delete (req, res){
        
        let {image, name, price, description, stock, isPopular } = req.body.product;

        try{
            let matchProducts = await Products.findOne({name});

            if (matchProducts) {
                await Products.deleteOne({ image, name, price, description, stock, isPopular, productType });
                return res.send({ ok: true, data: `product ${name} deleted successfully`});  
            }

            res.send({ok: true, data: `product ${name} doesn't exist`})

        }
        catch(error){
            res.send({error});
        };
    }


       // UPDATE PRODUCT

       async update (req, res){
        let { old_product, new_product } = req.body;
        try{
            let matchProducts = await Products.findOne({name: old_product.name});

            if(matchProducts){
                const updateProduct = await Products.updateOne(
                    { name: old_product.name },
                    { $set: 
                        {name: new_product.name,
                        image: new_product.image,
                        price: new_product.price,
                        despcription: new_product.description,
                        stock: new_product.stock,
                        isPopular: new_product.isPopular,
                        productType: new_product.productType
                        }});
                return res.send({ ok: true, data: `product ${new_product.name} updated successfully` });
            }
            res.send({ ok: true, data: `product ${old_product.name} doesn't exist` });

        }
        catch(error){
            res.send({error});
        };
    }


       // GET ALL PRODUCTS
       async showAll(req, res){
        try{
            const allProducts = await Products.find({});
            res.send({ ok: true, data: allProducts.map(item => ({
                id: item._id.toString(),
                image: item.image,
                name: item.name, 
                price: item.price, 
                description: item.description,
                stock: item.stock, 
                category: item.category,
                isPopular: item.isPopular,
                productType: item.productType
            })

                )});
        }
        catch(e){
            res.send({e})
        }
    }


    // FIND ONE PRODUCT
    async findProduct(req ,res){
        let {id} = req.params;
        try{
            let matchProducts = await Products.findById(id);

            if(matchProducts){
                return res.send({ ok: true, data: 
                    {
                    id: matchProducts._id,
                    name: matchProducts.name, 
                    price: matchProducts.price, 
                    color: matchProducts.color, 
                    description: matchProducts.description, 
                    category: matchProducts.category,
                    isPopular: matchProducts.isPopular,
                    productType: matchProducts.productType
                }});
            }

            res.send({ ok: true, data: `Product ${matchProducts.name} doesn't exist`});



        }
        catch(e){
            res.send({e})
        }

    }

}


module.exports = new ProductController();