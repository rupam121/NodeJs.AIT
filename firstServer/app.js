const http = require("http");
const server = http.createServer((req, res) => {
    // console.log("hello from http first server with ES6 support");
    // console.log(req);
  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Response from server</title></head>");
  res.write("<body><h2>Response from server as HTML</h2></body>");
  res.write("</html>");
});
server.listen(3000);
