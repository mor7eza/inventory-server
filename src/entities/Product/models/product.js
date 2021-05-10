const { Schema, model, ObjectId } = require("mongoose");

const schema = new Schema({
  name: String,
  quantity: Number,
  sku: String,
  image: String,
  vendor: { type: ObjectId, ref: "Vendor" },
  category: { type: ObjectId, ref: "Category" },
  location: { type: ObjectId, ref: "Location" },
  tags: [{ type: ObjectId, ref: "Tag" }]
});

module.exports = model("Product", schema);
