const User = require("../models/user");
const Lineup = require("../models/lineup");
const Agent = require("../models/agent");

module.exports = {
  show,
};

async function show(req, res) {
  const lineups = await Lineup.find(req.params.id)
    .populate("agent")
    // .populate("agent.abilities")
    .populate("map");

  // console.log(lineups);
  res.render("users/show", {
    title: "Manage Lineups",
    lineups,
  });
}