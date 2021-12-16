const fs=require('fs');

//reading file Asynchronousally 

// fs.readFile("rohitData.txt","utf8",(err,data)=>{
//     console.log(data);
// })
// console.log("let see the async nature");

//reading file synchronousally 


// let data=fs.readFileSync("rohitData.txt");
// console.log(data.toString());
// console.log("let see the sync nature");


//writing in a file Asynchronousally
// fs.writeFile("rohitData.txt","let see this one first",()=>console.log("done"));
// console.log("let see the async nature");


//writing in a file synchronousally
fs.writeFileSync("rohitData.txt","let see this");
console.log("let see the async nature");