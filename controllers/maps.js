const { name } = require("ejs");
const Agent = require("../models/agent");
const Map = require("../models/map");
const Lineup = require("../models/lineup");

module.exports = {
  index,
  show,
  showWithUrl
};

async function index(req, res) {
  const maps = await Map.find().sort({ name: 1 });

  res.render("maps/index", { title: "Touch Grass", maps });
}

async function show(req, res) {
  const map = await Map.findById(req.body.id);
  const agents = await Agent.find().sort({ name: 1 });
  const lineups = await Lineup.find({ map: req.body.id })
    .populate('coordinates')
    .populate('agent');
  
  res.render("maps/show", { title: `${map.name}`, map, agents, lineups });
}

async function showWithUrl(req, res) {
  const mapName = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1); // Capitalize first character
  const map = await Map.findOne({ name: mapName });
  const agents = await Agent.find().sort({ name: 1 });
  const lineups = await Lineup.find({ map: map._id })
    .populate('coordinates')
    .populate('agent');

  res.render("maps/show", { title: `${map.name}`, map, agents, lineups });
}