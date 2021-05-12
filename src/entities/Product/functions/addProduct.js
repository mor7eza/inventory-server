const Product = require("../models/Product");
const { productSchema } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");
const addProductToCategory = require("./addProductToCategory");
const addProductToLocation = require("./addProductToLocation");
const addProductToVendor = require("./addProductToVendor");
const addProductToTag = require("./addProductToTag");

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
  if (product.id) {
    category && addProductToCategory(product.id, category);
    location && addProductToLocation(product.id, location);
    vendor && addProductToVendor(product.id, vendor);
    tags.length > 0 && addProductToTag(product.id, tags);
  }
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
