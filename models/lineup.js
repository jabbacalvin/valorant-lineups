const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coordinateSchema = new Schema({
  x: {
    type: Number,
    min: 0,
  },
  y: {
    type: Number,
    min: 0,
  },
});

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
    ability: { type: String },
    url: { type: String },
    images: { type: Array },
    difficulty: { type: Number, min: 0, max: 2 },
    coordinates: [coordinateSchema],
    isVerified: {
      type: Boolean,
      default: false
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lineup", lineupSchema);
