// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "NAME_TA_RELACION_LABORAL";
const modelName = "modelNameTaRelacionLaboral";

const nameTaRelacionLaboralSchema = {
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
  idPersona: {
    field: "ID_PERSONA",
    allowNull: false,
    type: DataTypes.NUMBER(20),
  },
  fIngreso: {
    field: "F_INGRESO",
    allowNull: false,
    type: DataTypes.DATE,
  },
  fCorporacion: {
    field: "F_CORPORACION",
    allowNull: false,
    type: DataTypes.DATE,
  },
  fAjustada1: {
    field: "F_AJUSTADA1",
    allowNull: true,
    type: DataTypes.DATE,
  },
  fAjustada2: {
    field: "F_AJUSTADA2",
    allowNull: true,
    type: DataTypes.DATE,
  },
  fAjustada3: {
    field: "F_AJUSTADA3",
    allowNull: true,
    type: DataTypes.DATE,
  },
  idLocalidad: {
    field: "ID_LOCALIDAD",
    allowNull: false,
    type: DataTypes.STRING(4),
  },
  idCategoriaUno: {
    field: "ID_CATEGORIA1",
    allowNull: false,
    type: DataTypes.STRING(4),
  },
  idCategoriaDos: {
    field: "ID_CATEGORIA2",
    allowNull: false,
    type: DataTypes.STRING(4),
  },
  idCategoriaThree: {
    field: "ID_CATEGORIA3",
    allowNull: false,
    type: DataTypes.STRING(4),
  },
  idSindicato: {
    field: "ID_SINDICATO",
    allowNull: false,
    type: DataTypes.STRING(4),
  },
  dCentroMed: {
    field: "ID_CENTRO_MED",
    allowNull: true,
    type: DataTypes.STRING(4),
  },
  nroRif: {
    field: "NRO_RIF",
    allowNull: true,
    type: DataTypes.STRING(15),
  },
  nroSso: {
    field: "NRO_SSO",
    allowNull: true,
    type: DataTypes.STRING(12),
  },
  fRetiro: {
    field: "F_RETIRO",
    allowNull: true,
    type: DataTypes.DATE,
  },
  idFiniquito: {
    field: "ID_FINIQUITO",
    allowNull: true,
    type: DataTypes.STRING(4),
  },
  fContrato: {
    field: "F_CONTRATO",
    allowNull: true,
    type: DataTypes.DATE,
  },
  nroTarjeta: {
    field: "NRO_TARJETA",
    allowNull: true,
    type: DataTypes.STRING(5),
  },
  idProfesion: {
    field: "ID_PROFESION",
    allowNull: true,
    type: DataTypes.NUMBER(2),
  },
  fGraducion: {
    field: "F_GRADUACION",
    allowNull: true,
    type: DataTypes.STRING(4),
  },
  idNivelEdu: {
    field: "ID_NIVEL_EDU",
    allowNull: true,
    type: DataTypes.DATE,
  },
  anoAprobado: {
    field: "ANO_APROBADO",
    allowNull: true,
    type: DataTypes.STRING(1),
  },
  idGrado: {
    field: "ID_GRADO",
    allowNull: true,
    type: DataTypes.STRING(6),
  },
  iniGrado: {
    field: "INI_GRADO",
    allowNull: true,
    type: DataTypes.DATE,
  },
  aumentoGrado: {
    field: "AUMENTO_GRADO",
    allowNull: true,
    type: DataTypes.STRING(1),
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

class NameTaRelacionLaboral extends Model {
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
  nameTaRelacionLaboralSchema,
  NameTaRelacionLaboral,
};
