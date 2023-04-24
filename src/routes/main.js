const { Router } = require("express");
const router = Router();
const { querySql, query2Sql } = require("../controllers/main");
const {
  nameNewLog,
  nameGetLog,
  nameGetLogId,
  namePutLog,
  nameDestroyLog,
} = require("../controllers/eoPersonaController");
const { nameNewUser } = require("../controllers/nameUsers");
const { apiKey, singUp } = require("../middlewares/singUp");

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

// POST
router.post("/nameNewLog", async (req, res) => {
  const rta = await nameNewLog(req.body);
  res.json(rta);
});

router.post("/taRelacionPuesto", async (req, res) => {
  const rta = await query2Sql(req.body);
  res.json(rta);
});

router.post("/user/singup", singUp, async (req, res) => {
  const rta = { dev: "alicedev94" };
  res.json(rta);
});

router.post("/user/singin", async (req, res) => {
  const rta = await nameNewUser(req.body);
  res.json(rta);
});

// PUT
router.put("/namePutLog/:id", async (req, res) => {
  const name = req.body.nombreUno;
  console.log(name);
  await namePutLog(req.params["id"], name);
  res.json({ update_records: name });
});

// DELETE
router.delete("/nameDestroyLog/:id", async (req, res) => {
  const rta = await nameDestroyLog(req.params["id"]);
  res.json({ nameDestroyLog: rta });
});

module.exports = router;
