const Location = require("../models/Location");
const { locationJoiRules } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

exports.addLocation = async function ({ title }) {
  validationHandler(locationJoiRules, { title });
  const location = new Location({ title });
  await location.save();
  return {
    code: 201,
    success: true,
    message: `${title} added to Locations.`,
    id: location.id
  };
};

exports.addProductToLocation = async function (productId, locationId) {
  let location = await Location.findById(locationId);
  location && location.products.push(productId);
  await location.save();
};
