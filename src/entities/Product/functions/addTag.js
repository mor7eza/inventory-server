const Tag = require("../models/Tag");
const { tagSchema } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

module.exports = async function ({ name }) {
  validationHandler(tagSchema, { name });
  const tag = new Tag({ name });
  await tag.save();
  return {
    code: 201,
    success: true,
    message: `${name} added to Tags.`,
    id: tag.id
  };
};
