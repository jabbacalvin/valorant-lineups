const { name } = require("ejs");
const Agent = require("../models/agent");
const Map = require("../models/map");

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
  
  res.render("maps/show", { title: `${map.name}`, map, agents });
}
