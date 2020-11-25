const express = require("express");

const turnosRoutes = require("./src/turnos/turnos.routes");
const usuariosRoutes = require("./src/usuarios/usuarios.routes");

const router = express.Router();

router.get("/status", (req, res) => {
  res.status(200).json({
    mensaje: "Estoy viva!!!",
  });
});

router.use("/turnos", turnosRoutes);
router.use("/usuarios", usuariosRoutes);

module.exports = router;
