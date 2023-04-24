// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "NAME_TA_RELACION_PUESTO";
const modelName = "modelNameTaRelacionPuesto";

const nameTaRelacionPuestosSchema = {
  idEmpresa: {
    field: "ID_EMPRESA",
    allowNull: false,
    type: DataTypes.STRING(4),
    primaryKey: true,
  },
  ficha: {
    field: "FICHA",
    allowNull: false,
    type: DataTypes.STRING(10),
  },
  fechaIni: {
    field: "FECHA_INI",
    allowNull: false,
    type: DataTypes.DATE,
  },
  id_unidad: {
    field: "FECHA_INI",
    allowNull: true,
    type: DataTypes.STRING(16),
  },
  id_puesto: {
    field: "ID_PUESTO",
    allowNull: true,
    type: DataTypes.NUMBER(10),
  },
  fechaFin: {
    field: "FECHA_FIN",
    allowNull: true,
    type: DataTypes.DATE,
  },
  idCambio: {
    field: "ID_CAMBIO",
    allowNull: true,
    type: DataTypes.STRING(10),
  },
  observa: {
    field: "OBSERVA",
    allowNull: true,
    type: DataTypes.STRING(128),
  },
  usrcre: {
    field: "USRCRE",
    allowNull: true,
    type: DataTypes.STRING(60),
  },
  feccre: {
    field: "FECCRE",
    allowNull: true,
    type: DataTypes.DATE,
  },
  usract: {
    field: "FECCRE",
    allowNull: true,
    type: DataTypes.STRING(60),
  },
  feact: {
    field: "FECACT",
    allowNull: true,
    type: DataTypes.DATE,
  },
};

class NameTaRelacionPuesto extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: tableName,
      modelName: modelName,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    };
  }
}

module.exports = {
  tableName,
  nameTaRelacionPuestosSchema,
  NameTaRelacionPuesto,
};
