const Categories = require('../models/categoriesModel');
const Products = require('../models/productsModel');
 

class CategoryController {
    // POST ADD ONE
    async add (req, res) {
        let { category } = req.body;

            try{
                let matchCategories = await Categories.findOne({category});

                if (matchCategories) {
                    return res.send({ ok: true, data: `Category ${category} already exists` })     
                }

                const newCategory = await Categories.create({category});
                res.send({ok: true, data: `Category ${newCategory.category} added successfully`})
            }
            catch(e){
                res.send({e})
            }
    }

     // DELETE CATEGORY
     async delete (req, res){
       
        let { category } = req.body;

        try{
            let matchCategories = await Categories.findOne({category});

            if (matchCategories) {
                await Categories.deleteOne({ category });
                return res.send({ ok: true, data: `Category ${category} deleted successfully`});  
            }

            res.send({ok: true, data: `Category ${category} doesn't exist`})

        }
        catch(error){
            res.send({error});
        };
    }


       // UPDATE CATEGORY

       async update (req, res){
        let { new_category, old_category } = req.body;
        try{
            let matchCategories = await Categories.findOne({category: old_category});

            if(matchCategories){
                const updateCategory = await Categories.updateOne({ category: old_category },{ category: new_category });
                return res.send({ ok: true, data: `Category ${new_category} updated successfully` });
            }
            res.send({ ok: true, data: `Category ${old_category} doesn't exist` });

        }
        catch(error){
            res.send({error});
        };
    }


       // GET ALL CATEGORIES
       async showCategories(req, res){
        try{
            const allCategories = await Categories.find({});
            res.send({ ok: true, data: allCategories.map(item => ({category: item.category}))});
        }
        catch(e){
            res.send({e})
        }
    }


    // FIND ONE CATEGORY
    async findCategory(req ,res){
        let {category} = req.params;
        
        try{
            let categoryProducts = await Products.find({ category: category });

            if(categoryProducts.length > 0){
                return res.send({ 
                 ok: true, 
                 data: categoryProducts.map(product => ({
                     name: product.name,
                     price: product.price,
                     color: product.color,
                     description: product.description,
                     category: product.category
                 }))
             });         
            }

            res.send({ ok: true, data: `Category ${category} doesn't exist`});



        }
        catch(e){
            res.send({e})
        }

    }

}


module.exports = new CategoryController();