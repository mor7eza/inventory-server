const Tag = require("../models/Tag");

module.exports = async function ({ name }) {
  const tag = new Tag({ name });
  await tag.save();
  return {
    code: 201,
    success: true,
    message: `${name} added to Tags.`
  };
};
