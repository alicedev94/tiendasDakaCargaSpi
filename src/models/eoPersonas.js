// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "NAME_EO_PERSONA";
const modelName = "modelNameEoPersonas";

const nameEoPersonasSchema = {
  id: {
    field: "ID",
    allowNull: false, // valor autoincrementable
    type: DataTypes.NUMBER,
    primaryKey: true
  },
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
    allowNull: false,
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
    allowNull: false,
    type: DataTypes.STRING(50),
  }, // SELECT A ...
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
    allowNull: false,
    type: DataTypes.DATE,
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
    allowNull: false,
    type: DataTypes.STRING(1),
  },
  edoCivil: {
    field: "EDO_CIVIL",
    allowNull: true,
    type: DataTypes.STRING(30),
  },
  manoDominante: {
    field: "ZURDO",
    allowNull: false,
    type: DataTypes.NUMBER(1),
  },
  tipoSangre: {
    field: "TIPO_SANGRE",
    allowNull: true,
    type: DataTypes.STRING(2), 
  },
  factorRh: {
    field: "FACTOR_RH",
    allowNull: true,
    type: DataTypes.STRING(1), 
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
    type: DataTypes.STRING(4), 
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
    type: DataTypes.STRING(60), 
  },
  emailDos: {
    field: "E_MAIL2",
    allowNull: true,
    type: DataTypes.STRING(60), 
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
    /*Usuario que creo la empresa en el sistema*/
  },
  feccre: {
    field: "FECCRE",
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    /*Fecha en cual se registro la empresaen el sistema*/
  },
  usract: {
    field: "USRACT",
    allowNull: true,
    type: DataTypes.STRING(60),
    /*Ultimo usuario que hizo algÃºn cambio en los datos de la empresa*/
  },
  fecact: {
    field: "FECACT",
    allowNull: true,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    /*Fecha en la cual se hizo el Ãºltimo cambio en los datos de la empresa*/
  },// Verificado
  nombreFoto: {
    field: "NOMBRE_FOTO",
    allowNull: true,
    type: DataTypes.STRING(128),
    defaultValue: null,
  },
  ENFERMEDADOCU: {
    field: "ENFERMEDADOCU",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Presenta enfermedad ocupacional*/
  },
  ETNIAINDIGENA: {
    field: "ETNIAINDIGENA",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Presenta enfermedad ocupacional*/
  },
  ETNIAINDIGENA: {
    field: "ETNIAINDIGENA",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Pertenece a una etnia indigena*/
  },
  DISCAUDITIVA: {
    field: "DISCAUDITIVA",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Presenta discapacidad auditiva*/
  },
  DISCVISUAL: {
    field: "DISCVISUAL",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Presenta discapacidad visual*/
  },
  DISCINTELECTUAL: {
    field: "DISCINTELECTUAL",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Presenta discapacidad intelectual*/
  },
  DISCMENTAL: {
    field: "DISCMENTAL",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Presenta discapacidad Mental*/
  },
  DISCMUSCULOESQ: {
    field: "DISCMUSCULOESQ",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Presenta discapacidad musculo esqueletica*/
  },
  DISCACCIDENTE: {
    field: "DISCACCIDENTE",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Discapacidad generada por accidente de trabajo*/
  },
  DISCOTRA: {
    field: "DISCOTRA",
    allowNull: true,
    type: DataTypes.STRING(1),
    defaultValue: 0,
    /*Posee otra discapacidad*/
  },
  DESCRIDISCA: {
    field: "DESCRIDISCA",
    allowNull: true,
    type: DataTypes.STRING(50),
    defaultValue: null,
    /*DescripciÃ³n de la otra discapacidad*/
  },
  DEP_VENTAS: {
    field: "DEP_VENTAS",
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    /*Empleados del departamento de ventas*/
  },
  U_VERIFY: {
    field: "U_VERIFY",
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    /*Bandera de verificación por admin*/
  },
  TRANS_SAP: {
    field: "TRANS_SAP",
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    /*Bandera de verificación por admin*/
  },
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
