const http = require("http");
const fs = require("fs");
var server = http.createServer(function(req,resp){
    rs=fs.createReadStream("./public/hello.html");
    rs.pipe(resp);
});

server.listen(3000);
console.log("server started at 3000");