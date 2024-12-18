// console.log("hello g24");

const http=require("http");
const server=http.createServer((req,res)=>{
   // task instruction
   console.log("hello g24");
   
    res.end("chitkara university");
})

server.listen(3000);
