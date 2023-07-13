const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lineupSchema = new Schema(
  {
    name: { type: String, required: true },
    map: { type: String },
    agent: { type: String },
    ability: { type: String },
    url: { type: String },
    image: { data: Buffer, contentType: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Lineup", lineupSchema);