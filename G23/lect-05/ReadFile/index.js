const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  let { method } = req;
  if (method == "GET") {
    if (req.url === "/") {
      // console.log("inside / route and Get rquest");
      fs.readFile("form.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Server Error");
        } else {
          console.log(data);
          res.end(data);
        }
      });
      //   res.end("welcome to home route");
      //   res.write("i am vika spatel ");
    } else if (req.url === "/allstudent") {
      fs.readFile("allstudent.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Server Error");
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/jsondata") {
      fs.readFile("User.json", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Server Error");
        } else {
          res.end(data);
        }
      });
    } else {
      //error handlings of others route
      console.log(req.url);

      res.writeHead(404);
      res.end("Not Found");
    }
  } else {
    // method is post/put/patch/delete, handle request ........
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
