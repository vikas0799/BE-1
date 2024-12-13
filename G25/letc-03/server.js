const http=require("http");
// console.log(http);

  const server=http.createServer((req,res)=>{
    // console.log(req);
    res.write("chitkara university");
    res.write(`<h1>rajpura punjab</>`);
    
    res.end("g25 is not good batch");
  });

  server.listen(3000,(err)=>{
      console.log("server is running at 3000 port");
      
  })



