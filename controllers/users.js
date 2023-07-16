const User = require("../models/user");
const Lineup = require("../models/lineup");
const Agent = require("../models/agent");

module.exports = {
  show,
};

async function show(req, res) {
  const lineups = await Lineup.find({ user: req.user._id })
    .populate("agent")
    .populate("map");

  res.render("users/show", {
    title: "Manage Lineups",
    lineups,
  });
}