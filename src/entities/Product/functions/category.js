const Category = require("../models/Category");
const { categoryJoiRules } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

exports.addCategory = async ({ title }) => {
  validationHandler(categoryJoiRules, { title });
  const category = new Category({ title });
  await category.save();
  return {
    code: 201,
    success: true,
    message: `${title} added to Categories.`,
    id: category.id
  };
};

exports.addProductToCategory = async (productId, categoryId) => {
  let category = await Category.findById(categoryId);
  category && category.products.push(productId);
  await category.save();
};
