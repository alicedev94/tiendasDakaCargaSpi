const sequelize = require("../lib/sequelize");
const bcrypt = require("bcrypt");

const singIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await sequelize.models.nameUsers.findAll({
    where: { email: email },
  });

  if (user[0] != undefined) {
    const passwordDb = await user[0].dataValues.password;
    if (await bcrypt.compare(password, passwordDb)) {
      next();
    } else {
      res.json({ error: "contraseña incorrecta." });
      console.log("contraseña incorrecta.");
    }
  } else {
    res.json({ error: "El usuario no esta registrado." });
    console.log("El usuario no esta registrado.");
  }
};

module.exports = { singIn };
