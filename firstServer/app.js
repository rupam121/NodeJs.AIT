const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    // res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      '<body><h1>Node 1st Server</h1></form> </body>'
    );
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"> <button>Send</button> </form> </body>'
    );
    res.write("</html>");
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunck) => {
      console.log(chunck);
      body.push(chunck);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
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
