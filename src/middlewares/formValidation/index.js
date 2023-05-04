const Joi = require("joi");

const schema = Joi.object({
  NOMBRE: Joi.string().alphanum().min(3).max(17).required(),
});

module.exports = { Joi, schema};
