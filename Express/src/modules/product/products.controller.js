const product = require('../../service')

const getproductData = (req,res,next) =>{
    return product.loadJSON(`${__dirname}/../../jsondata/products.json`)
    // .then(userall => userall.body\
    .then(productall => productall.body)
    .then(products =>{
        res.render('products',{products});
    })
   .catch(err =>{
        console.log(err);
        next(err);
    })
}

module.exports={getproductData,}