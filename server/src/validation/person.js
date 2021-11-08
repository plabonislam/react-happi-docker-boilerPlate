const Joi = require('joi');

let personValidateSchema = Joi.object({
    firstname: Joi.string().required(),
     lastname: Joi.string().required()
});

let personValidateId = Joi.object({
    id: Joi.string().required().min(24).max(24)
})


let personValidateSchema222 = Joi.object({
    firstname: Joi.string().optional(),
     lastname: Joi.string().optional()
});

module.exports = {
    personValidateSchema,
    personValidateId,
    personValidateSchema222
}
