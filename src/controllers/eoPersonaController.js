const sequelize = require("../lib/sequelize");

const nameGetLog = async () => {
  const rta = await sequelize.models.modelNameEoPersonas.findAll();
  return rta;
};

const nameGetLogId = async (id) => {
  const rta = await sequelize.models.modelNameEoPersonas.findByPk(id);
  return rta;
};

const nameGenerateIdSpi = async () => {
  const rta = await sequelize.query(`SELECT MAX(id_pais + 1) FROM NAME_PAISES`);
  return rta;
};

const nameNewLog = async (data) => {
  const rta = await sequelize.models.modelNameEoPersonas.create(data);
  return rta;
};

const namePutLog = async (id, nombre) => {
  const rta = await sequelize.models.modelNameEoPersonas.update(
    { nombreUno: nombre },
    {
      where: {
        id: id,
      },
    }
  );
  return rta;
};

const namePutStatusSpi = async (id, status) => {
  const rta = await sequelize.models.modelNameEoPersonas.update(
    { U_VERIFY: status },
    {
      where: {
        id: id,
      },
    }
  );
  return rta;
};

const execStoradeProcedure = async () => {
  const rta = await sequelize.query(`
    BEGIN
      CARGA_SPI();
      COMMIT;
    END;
    `);
  return rta;
};

const nameDestroyLog = async (id) => {
  const rta = await sequelize.models.modelNameEoPersonas.destroy({
    where: {
      id: id,
    },
  });
  return rta;
};

module.exports = {
  nameNewLog,
  nameGetLog,
  nameGetLogId,
  namePutStatusSpi,
  namePutLog,
  nameDestroyLog,
  execStoradeProcedure,
  nameGenerateIdSpi,
};
