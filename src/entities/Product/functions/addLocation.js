const Location = require("../models/Location");

module.exports = async function ({ name }) {
  const location = new Location({ name });
  await location.save();
  return {
    code: 201,
    success: true,
    message: `${name} added to Locations.`,
    id: location.id
  };
};
