const user = require('../../service')

const getuserData = (req,res,next) =>{
    return user.loadJSON(`${__dirname}/../../jsondata/users.json`)
    // .then(userall => userall.body\
    .then(userall => userall.body)
    .then(users =>{
        res.render('users',{users});
    })
   .catch(err =>{
        console.log(err);
        next(err);
    })
}

module.exports={getuserData,}