const addata = require('../../service');

const getadminData = (req,res,next) =>{
    return Promise.all([
        addata.loadJSON(`${__dirname}/../../jsondata/users.json`),
        addata.loadJSON(`${__dirname}/../../jsondata/products.json`),
        addata.loadJSON(`${__dirname}/../../jsondata/categories.json`)    
    ])
    .then(admin => Promise.all([admin[0].pagination.total,admin[1].pagination.total,admin[2].pagination.total]))
    .then(total =>{
        res.render('admin',{productsTotal:total[0],categoriesTotal:total[1],usersTotal:total[2]});
    })
   .catch(err =>{
        console.log(err);
        next(err);
    })
}

module.exports={getadminData,}

// loadJSON(`${__dirname}/users.json`)
// .then(user =>{
//    console.log(user.body)
//    return loadJSON(`${__dirname}/products.json`);
// })
// .then(products =>{
//     console.log(products.body)
//     return loadJSON(`${__dirname}/categories.json`);
//  })
// .then(cate =>{
//     console.log(cate.body)
// })
// .catch(err =>{
//    console.log(err)
// });

// Promise.all([
//    loadJSON('./users.json'),
//    loadJSON('./products.json'),
//    loadJSON('./categories.json')
// ]).then(function(value){
//    console.log(value.body)
// }).catch(function(err) {
//    console.log(err)
// });

// console.log(loadJSON(`${__dirname}/users.json`));