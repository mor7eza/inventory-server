const { Schema, model, ObjectId } = require("mongoose");

const schema = new Schema({
  title: String,
  products: [{ type: ObjectId, ref: "Product" }]
});

module.exports = model("Tag", schema);
