const { Sequelize  } = require("sequelize");
const setupModels = require("../models/index");
require("dotenv").config();

const sequelize  = new Sequelize(
  process.env.SERVICE_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_ENGINE,
    host: process.env.DB_SERVER,
    port: process.env.DB_PORT,
  }
);

setupModels(sequelize);
//sequelize.sync();

module.exports = sequelize;
