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
  } catch (err) {
    console.log(err);
    res.render("lineups/new", { errorMsg: err.message });
  }
}

function edit(req, res) {
  const lineup = Lineup.getOne(req.params.id);
  console.log(lineup);
  res.render(`lineups/edit/${lineup._id}`, { title: "Edit Lineups", lineup });
}