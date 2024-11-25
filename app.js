const http = require("http");
const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3005);
app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/app/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/app/views/index.html");
});

http.createServer(app).listen(app.get("port"), function () {
  console.log("System " + app.get("port") + " run in a port 3005");
});
