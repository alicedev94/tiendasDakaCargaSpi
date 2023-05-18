const Joi = require("joi");

const schema = Joi.object({
  PRIMER_NOMBRE: Joi.string().alphanum().min(3).max(17).required(),
});

async function validateField(primerNombre) {
  try {
    const rta = await schema.validate({
      PRIMER_NOMBRE: primerNombre,
    });
    if (rta.error) {
      console.log("formValidation: " + rta.error.details[0].message);
      return rta.error.details[0].message;
    }
  } catch (err) {}
}

validateField("fsss");

module.exports = validateField;
