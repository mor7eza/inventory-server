const { Schema, model, ObjectId } = require("mongoose");

const schema = new Schema({
  name: String,
  products: [{ type: ObjectId, ref: "Product" }]
});

module.exports = model("Location", schema);
