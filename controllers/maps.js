const { name } = require("ejs");
const Agent = require("../models/agent");
const Map = require("../models/map");
const Lineup = require("../models/lineup");

module.exports = {
  index,
  show
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

