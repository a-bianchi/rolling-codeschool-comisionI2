const express = require("express");

// Controller
const usuarios = require("./usuarios.controller");

const router = express.Router();

router.route("/").get(usuarios.getUsuarios);
router.route("/saludos").get(usuarios.saludos);

module.exports = router;
