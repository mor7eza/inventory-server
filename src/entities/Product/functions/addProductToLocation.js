const Location = require("../models/Location");

async function addProductToLocation(productId, locationId) {
  let location = await Location.findById(locationId);
  if (location) {
    location.products.push(productId);
  }
  await location.save();
}

module.exports = addProductToLocation;
