const Vendor = require("../models/Vendor");
const { vendorSchema } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

module.exports = async function ({ name }) {
  validationHandler(vendorSchema, { name });
  const vendor = new Vendor({ name });
  await vendor.save();
  return {
    code: 201,
    success: true,
    message: `${name} added to Vendors.`,
    id: vendor.id
  };
};
