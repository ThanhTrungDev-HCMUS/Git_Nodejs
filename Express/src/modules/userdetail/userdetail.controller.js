const addata = require('../../service');


const getuserdetailData = (ID,req,res,next) =>{
    return addata.loadJSON(`${__dirname}/../../jsonData/users.json`)
    .then(userall => userall.body)
    .then(userfind => userfind.find(p => p._id === ID)) //return object
    // .then(userfind => userfind.filter(p => p._id === ID)) return array
    .then(users =>{
        res.render('usersDetails',{user:users});
    })
   .catch(err =>{
        console.log(err);
        next(err);
    })
}

module.exports={getuserdetailData,}