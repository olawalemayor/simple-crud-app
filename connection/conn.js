const mongoose = require("mongoose");

const dbURL = "localhost:27017";

const connectApptoDb = () => {
  return mongoose
    .connect(`mongodb://${dbURL}/crud-app`)
    .then(() => {
      console.log("Connected to database!!!");
    })
    .catch((err) => {
      throw Error(err);
    });
};

module.exports = connectApptoDb;
