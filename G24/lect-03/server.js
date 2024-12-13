    const http=require("http");
    // console.log(http);

        const server=http.createServer((req,res)=>{
            // console.log(req);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write("backend engineering");
            res.write("chitkara")
            res.end("g24 batch bekar h")
            
        });
    

        server.listen(3000,()=>{
            console.log("server is lisning");
            
        })