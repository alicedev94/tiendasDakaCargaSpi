const sequelize = require("../lib/sequelize");

const singUp = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await sequelize.models.nameUsers.findAll({
    where: { email: email },
  });

  if (user[0] != undefined) {
    res.json({ error: "El usuario ya existe!" });
  } else {
    await sequelize.models.nameUsers.create({
      email: email,
      password: password,
    });
    next();
  }
};

module.exports = { singUp };
