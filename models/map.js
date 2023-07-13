const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema(
  {
    name: String,
    image: String,
    minimap: String
  }
);

module.exports = mongoose.model("Map", mapSchema);
