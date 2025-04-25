var express = require("express");
var path = require("path");

var app = express();

var indexRouter = require("./src/routes.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen("5173", function () {
    console.log("Server is running on port 5173");
});