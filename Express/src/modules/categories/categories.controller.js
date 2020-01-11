const cate = require('../../service')

const getcateData = (req,res,next) =>{
    return cate.loadJSON(`${__dirname}/../../jsonData/categories.json`)
    .then(categoriesall => categoriesall.body)
    .then(categories =>{
        res.render('categories',{categories});
    })
   .catch(err =>{
        console.log(err);
        next(err);
    })
}

module.exports={getcateData,}