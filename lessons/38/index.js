const express = require("express");
const app = express();
const db = require("./db/db.json");

app.use(express.json());

function generarId() {
  return;
}

app.get("/turnos", function (req, res) {
  res.send(db.turnos);
});

app.post("/turnos", function (req, res) {
  res.send(req.body);
});

app.listen(3000, function () {
  console.log("Mi app esta corriendo en el puerto: 3000!");
});
