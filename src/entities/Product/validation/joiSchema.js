const joi = require("joi");

const _Rules = {
  name: joi.string().min(2).max(30).required()
};

exports.categorySchema = joi.object({ name: _Rules.name });

exports.vendorSchema = joi.object({ name: _Rules.name });

exports.locationSchema = joi.object({ name: _Rules.name });

exports.tagSchema = joi.object({ name: _Rules.name });

exports.productSchema = joi
  .object({
    name: _Rules.name,
    quantity: joi.number().positive(),
    sku: joi.string(),
    image: joi.string(),
    vendor: joi.string(),
    category: joi.string(),
    location: joi.string(),
    tags: joi.array().items(joi.string())
  })
  .options({ abortEarly: false });
