const Location = require("../models/Location");
const { locationSchema } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

module.exports = async function ({ name }) {
  validationHandler(locationSchema, { name });
  const location = new Location({ name });
  await location.save();
  return {
    code: 201,
    success: true,
    message: `${name} added to Locations.`,
    id: location.id
  };
};
