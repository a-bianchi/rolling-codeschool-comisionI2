const express = require("express");

// Controller
const turnos = require("./turnos.controller");

const router = express.Router();

router
  .route("/:id")
  .get(turnos.getOneTurno)
  .delete(turnos.eliminarTurno)
  .put(turnos.modificarTurno);
router.route("/").get(turnos.getTurnos).post(turnos.insertarTurno);

module.exports = router;
