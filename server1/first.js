console.log("Hello, World!");
const fs= require('fs');
fs.writeFile("output.txt","writing file",err=>{
  if(err)
    console.log('err found');
    else console.log('run succesfull');
  
})