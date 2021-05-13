const Tag = require("../models/Tag");
const { tagJoiRules } = require("../validation/joiSchema");
const validationHandler = require("@helpers/validationHandler");

exports.addTag = async function ({ title }) {
  validationHandler(tagJoiRules, { title });
  const tag = new Tag({ title });
  await tag.save();
  return {
    code: 201,
    success: true,
    message: `${title} added to Tags.`,
    id: tag.id
  };
};

exports.addProductToTag = async function (productId, tagsId) {
  tagsId.forEach(async (tagId) => {
    let tag = await Tag.findById(tagId);
    tag && tag.products.push(productId);
    await tag.save();
  });
};
