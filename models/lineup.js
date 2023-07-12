const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lineupSchema = new Schema(
  {
    content: { type: String, required: true },
    map: { type: String },
    agent: { type: String },
    ability: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Lineup", lineupSchema);
