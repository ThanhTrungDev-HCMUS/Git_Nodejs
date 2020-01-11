const addata = require('../../service');


const getproductdetailData = (ID,req,res,next) =>{
    return addata.loadJSON(`${__dirname}/../../jsonData/products.json`)
    .then(productall => productall.body)
    .then(productfind => productfind.find(p => p._id === ID)) //return object
    // .then(userfind => userfind.filter(p => p._id === ID)) return array
    .then(products =>{
        res.render('productDetails',{product:products});
    })
   .catch(err =>{
        console.log(err);
        next(err);
    })
}

module.exports={getproductdetailData,}