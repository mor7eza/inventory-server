const Product = require("../models/Product");
const { productJoiRules } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");
const { addProductToCategory } = require("./category");
const { addProductToLocation } = require("./location");
const { addProductToVendor } = require("./vendor");
const { addProductToTag } = require("./tag");

exports.addProduct = async ({ input }) => {
  // input -> title, quantity, sku, image, vendor, category, location, tags
  validationHandler(productJoiRules, input);
  const product = new Product({ ...input });
  await product.save();
  const { title, vendor, category, location, tags } = input;
  if (product.id) {
    category && addProductToCategory(product.id, category);
    location && addProductToLocation(product.id, location);
    vendor && addProductToVendor(product.id, vendor);
    tags.length > 0 && addProductToTag(product.id, tags);
  }
  return {
    code: 201,
    success: true,
    message: `${title} added to Products`,
    id: product.id
  };
};
