const mongoose = require("mongoose");
const Lineup = require("../../models/lineup");

module.exports = {
  show,
  showOne
};

async function show(req, res) {
  try {
    const lineups = await Lineup.find({ map: req.params.mapId, agent: req.params.agentId });
    res.json(lineups);
  } catch (err) {
    console.log(err);
    res.status(500).json('som ting wong');
  }
}

async function showOne(req, res) {
  try {
    const lineup = await Lineup.findOne({ _id: req.params.lineupId }).populate('agent');
    console.log(lineup);
    res.json(lineup);
  } catch (err) {
    console.log(err);
    res.status(500).json('som ting wong');
  }
}