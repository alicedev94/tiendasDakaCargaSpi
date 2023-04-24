const { nameEoPersonasSchema, NameEoPersonas } = require("../models/eoPersonas");
const { nameTaRelacionPuestosSchema, NameTaRelacionPuesto } = require("../models/taRelacionPuesto");
const { nameTaRelacionLaboralSchema, NameTaRelacionLaboral } = require("../models/taRelLaboral");

function setupModels(sequelize) {
  NameEoPersonas.init(nameEoPersonasSchema,NameEoPersonas.config(sequelize));
  NameTaRelacionPuesto.init(nameTaRelacionPuestosSchema,NameTaRelacionPuesto.config(sequelize));
  NameTaRelacionLaboral.init(nameTaRelacionLaboralSchema,NameTaRelacionLaboral.config(sequelize));
}

module.exports = setupModels;
