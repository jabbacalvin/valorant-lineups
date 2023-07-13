const Lineup = require("../models/lineup");

module.exports = {
  new: newLineup,
  create,
  show,
};

function newLineup(req, res) {
  res.render("lineups/new", { title: "Add New Lineup" });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    const lineup = await Lineup.create(req.body);
    res.redirect(`/user/show`);
  } catch (err) {
    console.log(err);
    res.render("lineups/new", { errorMsg: err.message });
  }
}

function show(req, res){
  
}
// Lineup.create(req.body);
// res.redirect('/lineups/show');