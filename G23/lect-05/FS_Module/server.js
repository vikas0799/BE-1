const http=require("http");
const fs=require("fs");
const {students}=require("./students.js");
// console.log(students);

const server=http.createServer((req,res)=>{
    if(req.method=="GET"){
        // let data="vikas patel";
        // let data=true;
        let data=JSON.stringify(students);
        console.log(data);
        res.write(data);
          res.end("data send successfully");
    }
    if(req.method=="POST"){
        res.end("data saved successfuly");
    }
})

server.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is running at 4000");
    
})
