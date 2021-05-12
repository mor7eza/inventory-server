const Vendor = require("../models/Vendor");

module.exports = async function ({ name }) {
  const vendor = new Vendor({ name });
  await vendor.save();
  return {
    code: 201,
    success: true,
    message: `${name} added to Vendors.`,
    id: vendor.id
  };
};
