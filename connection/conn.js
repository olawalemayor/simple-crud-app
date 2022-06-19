const mongoose = require("mongoose");
const config = require("config");

//database Options
const dbUser = config.get("dbUser");
const dbPass = config.get("dbPass");
const dbURL =
  dbUser && dbPass
    ? `${dbUser}:${dbPass}@${config.get("dbUrl")}`
    : config.get("dbUrl");
const dbPort = config.get("dbPort");
const dbName = config.get("dbName");

//connect method
const connectApptoDb = () => {
  return mongoose
    .connect(`mongodb://${dbURL}:${dbPort}/${dbName}`)
    .then(() => {
      console.log("Connected to database!!!");
    })
    .catch((err) => {
      throw Error(err);
    });
};

module.exports = connectApptoDb;
