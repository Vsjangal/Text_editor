const express = require("express");
const { connect } = require("./db");
const cors = require("cors");
const routerserver = require("./router");
const app = express();
var bodyParser = require("body-parser");

app.use(cors());
const port = 3000;
app.use(bodyParser.json());

app.use("/", routerserver);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

connect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
