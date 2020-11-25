const app = require("./src/config/express");
const config = require("./src/config/config");
require("./src/config/mongo");

app.listen(config.server.port, function () {
  console.log(`Mi app esta corriendo en el puerto: ${config.server.port}!`);
});

module.exports = app;
