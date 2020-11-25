const express = require("express");

// Controller
const turnos = require("./turnos.controller");

const router = express.Router();

router.route("/:id").get(turnos.getOneTurno);
router
  .route("/")
  .get(turnos.getTurnos)
  .post(turnos.insertarTurno)
  .put(turnos.modificarTurno)
  .delete(turnos.eliminarTurno);

module.exports = router;
