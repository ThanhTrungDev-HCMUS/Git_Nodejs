const students = [
    {
      name: 'Nam',
      age: 24,
      gender: 'male',
    },
    {
      name: 'Mai',
      age: 22,
      gender: 'female',
    },
    {
      name: 'Trang',
      age: 23,
      gender: 'female',
    },
    {
      name: 'An',
      age: 20,
      gender: 'male',
    },
    {
      name: 'Thien',
      age: 27,
      gender: 'male',
    },
  ];


//   let countedNames = students.reduce(function (allNames, name) { 
//     if (!allNames[name.gender]) {
//       allNames[name.gender]=1;
//     }
//     else {
//       allNames[name.gender] = allNames[name.gender]+1 ;
//     }

//     return allNames;
//   }, {});

//   console.log(countedNames)



//============= Task3
let male1 = 0;
let female1=0;

students.forEach(function(value){
     
     if(value.gender =='male'){
        return male1 +=1;
     }else(value.gender =='female') 
     {
        return female1 +=1
     }
});

     console.log(`male:${male1}`);
     console.log(`female:${female1}`);

// =============== Task4

let Namestudent = students.map(function(value){
    
    return value.name;
})

console.log(Namestudent)