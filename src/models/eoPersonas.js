// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "NAME_EO_PERSONAS";
const modelName = "modelNameEoPersonas";

const nameEoPersonasSchema = {
  /* id: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  */
  nombreUno: {
    field: "NOMBRE1",
    allowNull: false,
    type: DataTypes.STRING(17),
  },
  segundoNombre: {
    field: "NOMBRE2",
    allowNull: true,
    type: DataTypes.STRING(15),
  },
  apellidoUno: {
    field: "APELLIDO1",
    allowNull: true,
    type: DataTypes.STRING(17),
  },
  apellidoDos: {
    field: "APELLIDO2",
    allowNull: true,
    type: DataTypes.STRING(15),
  },
  idTipoIdentificacion: {
    field: "ID_TIPO_IDEN",
    allowNull: true,
    type: DataTypes.STRING(2),
  },
  nacionalidad: {
    field: "NACIONAL",
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  numeroIdentificacion: {
    field: "NUM_IDEN",
    allowNull: true,
    type: DataTypes.STRING(20),
  },
  pasaporte: {
    field: "PASAPORTE",
    allowNull: true,
    type: DataTypes.STRING(10),
  },
  fechaNacimiento: {
    field: "FECHA_NA",
    allowNull: true,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  ciudadNacimiento: {
    field: "CIUDAD_NA",
    allowNull: true,
    type: DataTypes.STRING(30),
  },
  idEntidadFederal: {
    field: "ID_ENTFE_NA",
    allowNull: true,
    type: DataTypes.STRING(4),
  },
  idPaisNacimiento: {
    field: "ID_PAIS_NA",
    allowNull: true,
    type: DataTypes.STRING(4),
  },
  sexo: {
    field: "SEXO",
    allowNull: true,
    type: DataTypes.STRING(1),
  },
  edoCivil: {
    field: "EDO_CIVIL",
    allowNull: true,
    type: DataTypes.STRING(30),
  },
  manoDominante: {
    field: "ZURDO",
    allowNull: true,
    type: DataTypes.NUMBER(1),
  },
  tipoSangre: {
    field: "TIPO_SANGRE",
    allowNull: true,
    type: DataTypes.STRING(10), // 2
  },
  factorRh: {
    field: "FACTOR_RH",
    allowNull: true,
    type: DataTypes.STRING(10), // 1
  },
  direccion: {
    field: "DIRECCION",
    allowNull: true,
    type: DataTypes.STRING(120),
  },
  ciudad: {
    field: "CIUDAD",
    allowNull: true,
    type: DataTypes.STRING(30),
  },
  idEntidadFederalResidencial: {
    field: "ID_ENTFE",
    allowNull: true,
    type: DataTypes.STRING(10), // 4
  },
  idPais: {
    field: "ID_PAIS",
    allowNull: true,
    type: DataTypes.STRING(4),
  },
  parroquia: {
    field: "PARROQUIA",
    allowNull: true,
    type: DataTypes.STRING(64),
  },
  municipio: {
    field: "MUNICIPIO",
    allowNull: true,
    type: DataTypes.STRING(64),
  },
  codPostal: {
    field: "COD_POSTAL",
    allowNull: true,
    type: DataTypes.STRING(10),
  },
  telefono1: {
    field: "TELEFONO1",
    allowNull: true,
    type: DataTypes.STRING(15),
  },
  telefono2: {
    field: "TELEFONO2",
    allowNull: true,
    type: DataTypes.STRING(15),
  },
  fax: {
    field: "FAX",
    allowNull: true,
    type: DataTypes.STRING(15),
  },
  celular: {
    field: "CELULAR",
    allowNull: true,
    type: DataTypes.STRING(15),
  },
  emailUno: {
    field: "E_MAIL1",
    allowNull: true,
    type: DataTypes.STRING(25), // 15
  },
  emailDos: {
    field: "E_MAIL2",
    allowNull: true,
    type: DataTypes.STRING(25), // 15
  },
  inRelTrab: {
    field: "IN_REL_TRAB",
    allowNull: true,
    type: DataTypes.STRING(1),
    /*
    Identificación que existe relación laboral: 
    1=si existe relación laboral, 
    null=si no existe relación laboral
    */
  },
  usrcree: {
    field: "USRCRE",
    allowNull: true,
    type: DataTypes.STRING(60),
  },
  feccre: {
    field: "FECCRE",
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  usract: {
    field: "USRACT",
    allowNull: true,
    type: DataTypes.STRING(60),
  },
  fecact: {
    field: "FECACT",
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  /*registro: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "FECHA_REGISTRO",
    defaultValue: Sequelize.NOW,
  },*/
};

class NameEoPersonas extends Model {
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
  nameEoPersonasSchema,
  NameEoPersonas,
};
