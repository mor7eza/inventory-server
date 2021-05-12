const Vendor = require("../models/Vendor");

async function addProductToVendor(productId, vendorId) {
  let vendor = await Vendor.findById(vendorId);
  if (vendor) {
    vendor.products.push(productId);
  }
  await vendor.save();
}

module.exports = addProductToVendor;
