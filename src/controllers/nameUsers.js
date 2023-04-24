const sequelize = require("../lib/sequelize");

const nameNewUser = async (data) => {
  const rta = await sequelize.models.nameUsers.create(data);
  return rta;
};

module.exports = { nameNewUser };