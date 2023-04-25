const sequelize = require("../lib/sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const singUp = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  const user = await sequelize.models.nameUsers.findAll({
    where: { email: email },
  });

  if (user[0] != undefined) {
    res.json({ error: "El usuario ya existe!" });
  } else {
    if (password != confirmPassword) {
      res.json({ error: "Las contraseñas no coinciden." });
    } else {
      const passCrypt = await bcrypt.hash(password, saltRounds);
      await sequelize.models.nameUsers.create({
        email: email,
        password: passCrypt,
      });
      next();
    }
  }
};

module.exports = { singUp };
