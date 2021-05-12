const Product = require("../models/Product");
const { productSchema } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

module.exports = async function ({ input: { name, quantity, sku, image, vendor, category, location, tags } }) {
  validationHandler(productSchema, { name, quantity, sku, image, vendor, category, location, tags });
  const product = new Product({
    name,
    quantity,
    sku,
    image,
    vendor,
    category,
    location,
    tags
  });
  await product.save();
  // add product to category
  // add product to location
  // add product to vendor
  // add product to tags
  return {
    code: 201,
    success: true,
    message: `${name} added to Products`,
    id: product.id
  };
};
