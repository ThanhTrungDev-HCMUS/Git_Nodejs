
const language = require('date-fns/locale/vi')
const fs = require('fs');
const path = require('path');
const formatDistance = require('date-fns/formatDistance');

//Price 
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

//Readfile
fs.readFile(path.relative(__dirname,'./products.json'),(err,data)=>{
   if (err){
    console.error(err);
    return;
   }
   let json = JSON.parse(data);
   console.log("The element in the array is: "+json.length);

   //    console.log(data.toString( 'utf8'))
   json.forEach((value) => {
    var result = formatDistance(
        new Date(value.DateUpdated),
        new Date(Date.now()),
            {locale:language} 
   );
       console.log(`${value.name}`+' - '+formatNumber(`${value.Price}`)+'VND -  Cập nhật cách đây: '+result);
   });

});



// try{
//   const data = fs.readdirSync('./products.json','utf8');
// }catch (err){
//     console.log(err);
// };
// https://blog.abelotech.com/posts/number-currency-formatting-javascript/
