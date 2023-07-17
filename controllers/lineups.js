const Lineup = require("../models/lineup");
const User = require("../models/user");
const Map = require("../models/map");
const Agent = require("../models/agent");

module.exports = {
  new: newLineup,
  create,
  edit,
  update,
  delete: deleteLineup,
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
  req.body.createdBy = req.user._id;
  try {
    const lineup = await Lineup.create(req.body);
    console.log(req.body);

    res.redirect(`/users/show`);

  } catch (err) {
    console.log(err);
    res.render("lineups/new", { errorMsg: err.message });
  }
}

async function edit(req, res) {
  const maps = await Map.find({});
  const agents = await Agent.find({});
  const lineupInfo = await Lineup.findById(req.params.id)
    .populate("map")
    .populate("agent");

  res.render("lineups/edit", {
    title: "Edit Lineups",
    maps,
    agents,
    lineupInfo,
  });
}

async function update(req, res) {
  const lineupData = await Lineup.findById(req.params.id);
  //update different propertries on lineupdata based on req.body
  lineupData.name = req.body.name;
  lineupData.map = req.body.map;
  lineupData.agent = req.body.agent;
  lineupData.image = req.body.image;
  lineupData.url = req.body.url;
  lineupData.updatedBy = req.user._id;
  await Lineup.updateMany(req.body, req.params.id);
  //save
  await lineupData.save();

  res.redirect("/users/show");
}

async function deleteLineup(req, res) {
  const lineupData = await Lineup.findById(req.params.id);
  await Lineup.deleteOne({});

  res.redirect("/users/show");
}
