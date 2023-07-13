const Agent = require("../models/agent");
const Map = require("../models/map");

module.exports = {
  index,
  show
};

async function index(req, res) {
  const maps = await Map.find();

  let mapGrid = [];

  maps.forEach(function (map, index) {
    if (!(index % 3)) {
      mapGrid.push([]);
    }
  });
  
  maps.forEach(function (map, index) {
    mapGrid[index % 3].push(map);
  });
  
  res.render("maps/index", { title: "Touch Grass", maps, mapGrid });
}

async function show(req, res) {
  const map = await Map.findById(req.body.id);
  const agents = await Agent.find();

  res.render("maps/show", { title: "Map", map, agents });
}
