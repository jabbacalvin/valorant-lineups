const Lineup = require("../models/lineup");
const User = require("../models/user");
const Map = require("../models/map");
const Agent = require("../models/agent");

module.exports = {
  new: newLineup,
  create,
  edit,
};

async function newLineup(req, res) {
  const maps = await Map.find({});
  const agents = await Agent.find({});
  res.render("lineups/new", {
    title: "Add New Lineup",
    maps,
    agents,
  });
}

async function create(req, res) {
  const user = await User.findById(req.params.id);
  const map = await Map.findById(req.params.id);
  // console.log(map);
  req.body.user = req.user._id;
  try {
    const lineup = await Lineup.create(req.body);
    res.redirect(`/users/show`);
    // console.log(lineup);
  } catch (err) {
    console.log(err);
    res.render("lineups/new", { errorMsg: err.message });
  }
}

async function edit(req, res) {
  const maps = await Map.find({});
  const agents = await Agent.find({});
  // const lineupId = Lineup.findById(req.params.id);
  const lineupId = await Lineup.findById(req.params.id);
  // console.log(lineupId._id.toHexString());
  res.render("lineups/edit", {
    title: "Edit Lineups",
    maps,
    agents,
    lineupId,
  });
}

