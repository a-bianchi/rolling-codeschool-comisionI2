const mongoose = require("mongoose");
const config = require("./config");

const uri = `mongodb://${config.db.username}:${config.db.password}@${config.db.ip}:${config.db.port}/${config.db.name}`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then((item) => console.log("Se conecto a la base de datos!!!"))
  .catch((err) => console.log(err));
