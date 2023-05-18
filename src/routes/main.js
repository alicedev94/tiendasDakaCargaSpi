const { Router } = require("express");
const router = Router();
const {
  querySql,
  query2Sql,
  nameNewLog2,
  nameGetCountry,
} = require("../controllers/main");
const {
  nameNewLog,
  nameGetLog,
  nameGetLogId,
  namePutLog,
  namePutStatusSpi,
  nameDestroyLog,
  execStoradeProcedure,
  nameGenerateIdSpi,
} = require("../controllers/eoPersonaController");
const { nameNewUser } = require("../controllers/nameUsers");
const { singUp } = require("../middlewares/singUp");
const { singIn } = require("../middlewares/singIn");
const { singToken, verifyToken, jwt } = require("../middlewares/serviceToken");
const validateField = require("../middlewares/formValidation/");
const passport = require("passport");

// GET
router.get("/query", async (req, res) => {
  const rta = await querySql();
  res.json(rta);
});

router.get("/nameGetLog", async (req, res) => {
  const rta = await nameGetLog();
  res.json(rta);
});

router.get("/nameGetLog/:id", async (req, res) => {
  const rta = await nameGetLogId(req.params.id);
  res.json(rta);
});

router.get("/user/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

router.get("/data/generateIdSpi", async (req, res) => {
  const rta = await nameGenerateIdSpi();
  res.json(rta);
});

router.get("/data/country", async (req, res) => {
  const rta = await nameGetCountry();
  res.json(rta);
});

// POST
//metodo en revsión
router.post("/nameNewLog", async (req, res) => {
  const field = await validateField(req.body.nombreUno);
  if (field != null) {
    console.log(field);
  } else {
    await nameNewLog(req.body);
  }
});

router.post("/taRelacionPuesto", async (req, res) => {
  /*const field = await validateField(req.body.nombreUno);
  if (field != null) {
    return field;
  } else {
    await query2Sql(req.body);
  }*/
  await query2Sql(req.body);
});

router.post("/newUser", async (req, res) => {
  const rta = await nameNewUser(req.body);
  res.json(rta);
});

router.post(
  "/user/signup",
  passport.authenticate("local-signup", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
    failureFlash: true,
  })
);

router.post(
  "/user/signin",
  passport.authenticate("local-signin", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
    failureFlash: true,
  }),
  async (req, res) => {
    res.json({ auth: true });
  }
);

// PUT
router.put("/namePutLog/:id", async (req, res) => {
  const name = req.body.nombreUno;
  console.log(name);
  await namePutLog(req.params["id"], name);
  res.json({ update_records: name });
});

router.put("/namePutStatusSpi/:id", async (req, res) => {
  await namePutStatusSpi(req.params["id"], "1"); // TRUE
  await execStoradeProcedure();
  res.redirect("http://localhost:3000/");
});

// DELETE
router.delete("/nameDestroyLog/:id", async (req, res) => {
  const rta = await nameDestroyLog(req.params["id"]);
  res.json({ nameDestroyLog: rta });
});

module.exports = router;
