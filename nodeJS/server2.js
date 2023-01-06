const http = require("http");
var server = http.createServer(function (req, resp) {
  resp.writeHead(200, { "content-type": "text/html" });
  switch (req.url) {
    case "/":
      resp.write("<h1>index page</h1>");
      break;

    case "/home":
      resp.write("<h1>switch home</h1>");
      break;

    case "/about":
      resp.write("<h1>switch about</h1>");
      break;

    default:
      resp.write("<h1>wrong url</h1>");
  }
});
server.listen(3000);
console.log("server started on port number 3000");
