const User = require("../models/user");
const Lineup = require("../models/lineup");
const lineup = require("../models/lineup");

module.exports = {
  show,
};

async function show(req, res) {
  // const lineups = await Lineup.find({ user: req.user._id });
  const lineups = await Lineup.find({ _id: { $nin: lineup.map } });
  // console.log(lineups);
  res.render("users/show", { title: "Manage Lineups", lineups });
}