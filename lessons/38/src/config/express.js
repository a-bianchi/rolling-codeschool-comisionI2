const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("../../index.routes");
const config = require("./config");

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());

app.use("/", routes);

module.exports = app;
