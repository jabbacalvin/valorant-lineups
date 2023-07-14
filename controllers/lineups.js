const Lineup = require("../models/lineup");
const User = require("../models/user");
const Map = require("../models/map");
const Agent = require("../models/agent");

module.exports = {
  // show,
  new: newLineup,
  create,
  edit,
};

// async function show(req, res) {
//   const lineups = await Lineup.find({});
//   console.log(lineups);
//   res.render("user/show", { lineups });
// }

async function newLineup(req, res) {
  const maps = await Map.find({});
  const agents = await Agent.find({});
  const agentAbilities = await Agent.find({ abilities: [] });
  console.log(agentAbilities);
  res.render("lineups/new", {
    title: "Add New Lineup",
    maps,
    agents,
    agentAbilities,
  });
}

async function create(req, res) {
  const user = await User.findById(req.params.id);
  const map = await Map.findById(req.params.id);
  req.body.user = req.user._id;
  try {
    const lineup = await Lineup.create(req.body);
    // console.log(lineup);
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