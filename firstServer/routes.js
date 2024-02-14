const fs = require("fs");

// const routes = require("./routes");
// console.log(routes);

const reqResHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body><h1>Node 1st Server</h1></form> </body>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"> <button>Send</button> </form> </body>'
    );
    res.write("</html>");
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunck) => {
      body.push(chunck);
    });

    // Even Driven Approach
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody; //.split("=")[1]
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

// module.exports = reqResHandler;

module.exports = {
  handler: reqResHandler,
  // text: "The is some Dummy text message"
};


/* 
npm:node package manager
npx:node package execute
*/