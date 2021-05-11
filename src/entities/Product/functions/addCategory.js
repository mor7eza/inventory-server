const Category = require("../models/Category");

module.exports = async function ({ name }) {
  const category = new Category({ name });
  await category.save();
  return {
    code: 201,
    success: true,
    message: `${name} added to Categories.`
  };
};
