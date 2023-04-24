// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "NAME_USERS";
const modelName = "nameUsers";

const nameUsersSchema = {
  email: {
    field: "email",
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  password: {
    field: "password",
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  rol: {
    field: "rol_user",
    allowNull: true,
    type: DataTypes.STRING(10),
    defaultValue: "client",
  },
};

class NameUsers extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: tableName,
      modelName: "nameUsers",
      timestamps: false,
      createdAt: true,
      updatedAt: false,
    };
  }
}

module.exports = {
  tableName,
  nameUsersSchema,
  NameUsers,
};
