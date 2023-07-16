const mongoose = require("mongoose");
const Map = require("../../models/map");

module.exports = {
  show
};

async function show(req, res) {
  try {
    const map = await Map.findById(req.params.mapId);
    res.json(map);
  } catch (err) {
    console.log(err);
    res.status(500).json('som ting wong');
  }
}