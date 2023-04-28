const Joi = require("joi");

const schema = Joi.object({
  NOMBRE2: Joi.string().alphanum().min(3).max(17).required(),
  NOMBRE2: Joi.string().alphanum().min(3).max(15),
  APELLIDO1: Joi.string().alphanum().min(3).max(17).required(),
  APELLIDO2: Joi.string().alphanum().min(3).max(15),
  ID_TIPO_IDEN: Joi.string().alphanum().min(1).max(2),
  NACIONAL: Joi.string().alphanum().min(3).max(50).required(),
  NUM_IDEN: Joi.string().alphanum().min(3).max(20),
  PASAPORTE: Joi.string().alphanum().min(3).max(10),
  //FECHA_NA: ,
  CIUDAD_NA: Joi.string().alphanum().min(3).max(30),
  ID_ENTFE_NA: Joi.string().alphanum().min(3).max(4),
  ID_PAIS_NA: Joi.string().alphanum().min(3).max(4),
  SEXO: Joi.string().alphanum().min(1).max(1).required(),
  EDO_CIVIL: Joi.string().alphanum().min(3).max(30),
  ZURDO: Joi.number().integer().min(1).max(1),
  TIPO_SANGRE: Joi.string().alphanum().min(1).max(2),
  FACTOR_RH: Joi.string().alphanum().min(1).max(1),
  DIRECCION: Joi.string().alphanum().min(3).max(120),
  CIUDAD: Joi.string().alphanum().min(3).max(30),
  ID_ENTFE: Joi.string().alphanum().min(1).max(4),
  ID_PAIS: Joi.string().alphanum().min(1).max(4),
  PARROQUIA: Joi.string().alphanum().min(3).max(64),
  MUNICIPIO: Joi.string().alphanum().min(3).max(64),
  COD_POSTAL: Joi.string().alphanum().min(3).max(10),
  TELEFONO1: Joi.string().alphanum().min(3).max(15),
  TELEFONO2: Joi.string().alphanum().min(3).max(15),
  FAX: Joi.string().alphanum().min(3).max(15),
  CELULAR: Joi.string().alphanum().min(3).max(15),
  EMAIL: Joi.string().alphanum().min(3).max(60),
  EMAIL2: Joi.string().alphanum().min(3).max(60),
  //IN_REL_TRAB: ,
  USRCRE: Joi.string().alphanum().min(3).max(60),
  //FECCRE: ,
  USRACT: Joi.string().alphanum().min(3).max(60),
  //FECACT: ,
});

async function validarCampo(nombre1) {
  try {
    const rta = await schema.validate({ nombre1: nombre1 });
    console.log(rta);
  } catch (error) {}
}

//validarCampo("abc");
