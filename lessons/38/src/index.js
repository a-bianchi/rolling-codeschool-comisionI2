const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("../config/config");
const turnos = require("./models/turnos");

app.use(express.json());

const uri = `mongodb://${config.db.username}:${config.db.password}@${config.db.ip}:${config.db.port}/${config.db.name}`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then((item) => console.log("Se conecto a la base de datos!!!"))
  .catch((err) => console.log(err));

app.get("/turnos", async function (req, res) {
  const todosLosTurnos = await turnos.find();
  res.send({ turno: todosLosTurnos });
});

app.get("/turnos/:id", async function (req, res) {
  res.send({});
});

app.post("/turnos", async function (req, res) {
  const response = await new turnos(req.body).save();
  res.send(response);
});

app.put("/turnos", async function (req, res) {
  res.send({});
});

app.delete("/turnos", async function (req, res) {
  res.send({});
});

app.listen(config.server.port, function () {
  console.log(`Mi app esta corriendo en el puerto: ${config.server.port}!`);
});
