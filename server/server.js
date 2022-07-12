const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//mongodb connection
const conn = require("./db/connection.js");

const PORT = process.env.PORT || 5000;

//routes
app.use(require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port :- ${PORT}`);
});
