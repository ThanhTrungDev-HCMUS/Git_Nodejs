const fs = require('fs');
const path = require('path');
const format = require('date-fns/format')
const xlsx = require('json2xls')
fs.readFile(path.relative(__dirname,'./products.json','utf8'),(err,data)=>{
    if (err){
     console.error(err);
     return;
    };

   let Json = JSON.parse(data);

   Json.forEach((value) => {
     value.DateUpdated = new Date(value.DateUpdated);
     value.Update = format(value.DateUpdated, 'MM/dd/yy');
    console.log(value.Update);//Json Time
    delete(value.DateUpdated);
    console.log(value.DateUpdated);//undefined
   });

  let xls = xlsx(Json);//Use xlsx library to convert products.json to a Microsoft Excel file buffer
  fs.writeFileSync('products.xlsx', xls, 'binary')//Write the buffer to hard drive as products.xlsx and should be able to open in Excel.
});
