const http=require("http");
// console.log(http);

 const server= http.createServer((req,res)=>{
    console.log("request coming from client");
    
    console.log(req.url);
    res.write("chandigarh punjab");
    res.write("rajpura ");
    res.end("g23 is not a good batch");
    
  });

server.listen(3000,()=>{
  console.log("server is running");
  
})
