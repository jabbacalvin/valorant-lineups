const Lineup = require("../../models/lineup");

module.exports = {
  show
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