const express = require("express");
const router = require("backend/src/router");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT;
const app = express();

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: process.env.COOKIE_MAX_AGE_MS,
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
