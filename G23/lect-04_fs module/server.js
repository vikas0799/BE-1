// // console.log("hello");
const http=require("http");

const server=http.createServer((req,res)=>{
  console.log("hello");
  res.end("chitkara university");

});


server.listen(3000);