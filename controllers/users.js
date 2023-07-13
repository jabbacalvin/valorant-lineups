const User = require("../models/user");
const Lineup = require("../models/lineup");

module.exports = {
  show,
};

async function show(req, res) {
  const lineups = await Lineup.find({ user: req.user._id });
  res.render("users/show", { title: "Manage Lineups", lineups });
}