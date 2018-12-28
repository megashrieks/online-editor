var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var routes = require("./server/routes");

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, () => {
	console.log("Listening to port : ", PORT);
});
