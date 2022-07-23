require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

const MAX_AGE = 3 * 60 * 60 * 1000;

const mongoDbStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});

const sessionConfig = {
  secret: "mySessionSecret",
  name: "session-id",
  store: mongoDbStore,
  cookie: {
    maxAge: MAX_AGE,
    sameSite: false,
    secure: false,
  },
  resave: true,
  saveUninitialized: false,
};

//middlewares
app.use(express.json());
app.use(cors());
app.use(session(sessionConfig));

//mongodb connection
const conn = require("./db/connection.js");

const PORT = process.env.PORT || 5000;

//routes
app.use(require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port :- ${PORT}`);
});
