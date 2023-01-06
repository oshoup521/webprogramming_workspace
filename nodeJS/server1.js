const { Console } = require("console");
const http = require("http");
var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'content-type':'text/html'});
    if(req.url=="/"){
        resp.write("<h1>welcome</h1>");
        resp.end();
    }
    else if(req.url=="/about"){
        resp.write("<h1>about</h1>");
        resp.end();
    }

});
server.listen(3000);
console.log("server is running at port 3000");