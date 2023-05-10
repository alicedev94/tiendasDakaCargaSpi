const passport = require("passport");
const express = require("express");
const session = require("express-session");
const router = require("./routes/main");
const cors = require("cors");
const app = express();

require("./middlewares/auth/strategys/local");

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "mysecretsession",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
app.use(passport.initialize());
app.use(passport.session());

app.listen(5000, () => {
  console.log("run on port 5000");
});
