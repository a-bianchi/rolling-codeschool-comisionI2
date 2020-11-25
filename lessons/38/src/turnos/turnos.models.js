const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const turnosSchema = new Schema({
  nombre: { type: String, required: true },
  nombreDueno: { type: String, required: true },
  fecha: { type: String, required: true },
  hora: { type: String, required: true },
  sintomas: { type: String, required: true },
});

module.exports = mongoose.model("Turnos", turnosSchema);
