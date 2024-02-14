const http = require("http");

const routes = require("./routes");
// const reqResHandler = require("../routes");

console.log("console in App.js", routes.text);
// const server = http.createServer((req, res) => {
// });

// const server=http.createServer(reqResHandler);
const server = http.createServer(routes);
server.listen(3000);
