const Category = require("../models/Category");

async function addProductToCategory(productId, categoryId) {
  let category = await Category.findById(categoryId);
  if (category) {
    category.products.push(productId);
  }
  await category.save();
}

module.exports = addProductToCategory;
