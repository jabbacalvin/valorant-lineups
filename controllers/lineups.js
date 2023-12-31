const mongoose = require("mongoose");
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
  console.log(req);
  try {
    const images = [req.body.img1, req.body.img2, req.body.img3];
    req.body.images = images;

    console.log(req.body.coordinates);
    const coordinatesArr = req.body.coordinates.split(",");
    req.body.coordinates = [
      {
        x: coordinatesArr[0],
        y: coordinatesArr[1]
      },
      {
        x: coordinatesArr[2],
        y: coordinatesArr[3]
      }
    ];
    const lineup = await Lineup.create(req.body);

    res.redirect(`/users/show`);

  } catch (err) {
    console.log(err);
    res.render("lineups/new", { errorMsg: err.message });
  }
}

async function edit(req, res) {
  const maps = await Map.find({});
  const agents = await Agent.find({});
  const lineupInfo = await Lineup.findOne({ _id: req.params.id })
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
  lineupData.url = req.body.url;
  lineupData.updatedBy = req.user._id;
  lineupData.ability = req.body.ability;

  const images = [req.body.img1, req.body.img2, req.body.img3];
  console.log(req.body);
  req.body.images = images;
  lineupData.images = req.body.images;
  const coordinatesArr = req.body.coordinates.split(",");
  req.body.coordinates = [
    {
      x: coordinatesArr[0],
      y: coordinatesArr[1]
    },
    {
      x: coordinatesArr[2],
      y: coordinatesArr[3]
    }
  ];
  lineupData.coordinates = req.body.coordinates;

  await Lineup.updateMany(req.body, req.params.id);
  //save
  await lineupData.save();

  res.redirect("/users/show");
}

async function deleteLineup(req, res) {
  await Lineup.deleteOne({ _id: req.params.id });

  res.redirect("/users/show");
}
