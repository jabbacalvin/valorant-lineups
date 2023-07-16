const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  getOne,
};

const lineupSchema = new Schema(
  {
    name: { type: String, required: true },
    map: {
      type: Schema.Types.ObjectId,
      ref: "Map",
    },
    agent: {
      type: Schema.Types.ObjectId,
      ref: "Agent",
    },
    url: { type: String },
    image: { data: Buffer, contentType: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

function getOne(id) {
  id = parseInt(id);
  return lineupSchema.find((lineup) => lineup._id === id);
}

module.exports = mongoose.model("Lineup", lineupSchema);
