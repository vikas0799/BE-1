const fs=require("fs");
let data=  fs.readFileSync("content.txt","utf-8");
// console.log(data);
   
let obj={
    "name":"kartik",
    "age":25
};

console.log(typeof(obj));
 let jsonstring=JSON.stringify(obj);
 console.log(typeof(jsonstring));
 console.log(jsonstring);
 
 

