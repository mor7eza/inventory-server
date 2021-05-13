const joi = require("joi");

const _Rules = {
  title: joi.string().min(2).max(30).required()
};

exports.categoryJoiRules = joi.object({ title: _Rules.title });

exports.vendorJoiRules = joi.object({ title: _Rules.title });

exports.locationJoiRules = joi.object({ title: _Rules.title });

exports.tagJoiRules = joi.object({ title: _Rules.title });

exports.productJoiRules = joi
  .object({
    title: _Rules.title,
    quantity: joi.number().positive(),
    sku: joi.string(),
    image: joi.string(),
    vendor: joi.string(),
    category: joi.string(),
    location: joi.string(),
    tags: joi.array().items(joi.string())
  })
  .options({ abortEarly: false });
