const http = require("http");
const server = http.createServer((req, res) => {
  // console.log("hello from http first server with ES6 support");
  // console.log(req);
  const url = req.url;
  console.log(url);

  if (url == "/") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      '<body><form action="" method="POST"><input type="text" name="message"> <button>Send</button> </form> </body>'
    );
    res.write("</html>");
  }
  if (url === "/message") {
    res.write("<html>");
    res.write("<head><title>Response from server</title></head>");
    res.write("<body><h2>Response from server as About Route</h2></body>");
    res.write("</html>");
  }
  //   if (url == "/about") {
  //     res.setHeader("content-Type", "text/html");
  //     res.write("<html>");
  //     res.write("<head><title>Response from server</title></head>");
  //     res.write("<body><h2>Response from server as About Route</h2></body>");
  //     res.write("</html>");
  //   }
});
server.listen(3000);
