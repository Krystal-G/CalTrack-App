const mongoose = require("mongoose");

const conn = mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => {
    console.log("Database connected");
    return db;
  })
  .catch((err) => {
    console.log(`Error connecting to database:- ${err}`);
  });

module.exports = conn;
