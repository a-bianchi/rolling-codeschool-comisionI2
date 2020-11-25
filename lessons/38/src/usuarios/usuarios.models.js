const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
  nombre: { type: String, required: true },
  password: { type: String, required: true },
  rol: { type: String },
});

module.exports = mongoose.model("Usuarios", usuariosSchema);
