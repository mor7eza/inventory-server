const Tag = require("../models/Tag");

async function addProductToTag(productId, tagsId) {
  tagsId.forEach(async (tagId) => {
    let tag = await Tag.findById(tagId);
    if (tag) {
      tag.products.push(productId);
    }
    await tag.save();
  });
}

module.exports = addProductToTag;
