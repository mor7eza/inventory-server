const Vendor = require("../models/Vendor");
const { vendorJoiRules } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

exports.addVendor = async function ({ title }) {
  validationHandler(vendorJoiRules, { title });
  const vendor = new Vendor({ title });
  await vendor.save();
  return {
    code: 201,
    success: true,
    message: `${title} added to Vendors.`,
    id: vendor.id
  };
};

exports.addProductToVendor = async function (productId, vendorId) {
  let vendor = await Vendor.findById(vendorId);
  vendor && vendor.products.push(productId);
  await vendor.save();
};
