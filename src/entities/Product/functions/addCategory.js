const Category = require("../models/Category");
const { categorySchema } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

module.exports = async function ({ name }) {
  validationHandler(categorySchema, { name });
  const category = new Category({ name });
  await category.save();
  return {
    code: 201,
    success: true,
    message: `${name} added to Categories.`,
    id: category.id
  };
};
