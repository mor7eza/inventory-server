const { UserInputError } = require("apollo-server");

global.validationHandler = function validationHandler(schema, args) {
  const { error } = schema.validate(args);
  if (error) {
    let validationErrors = {};
    error.details.forEach((detail) => {
      validationErrors = { ...validationErrors, [detail.path[0]]: detail.message };
    });
    throw new UserInputError("Bad Request!", { invalidArgs: Object.keys(validationErrors), validationErrors });
  }
};

module.exports = validationHandler;
