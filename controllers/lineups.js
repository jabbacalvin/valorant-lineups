const Lineup = require("../models/lineup");

module.exports = {
  new: newLineup,
};

function newLineup(req, res) {
  res.render("lineups/new", { title: "New Lineup" });
}
