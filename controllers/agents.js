const Agent = require("../models/agent");
const Map = require('../models/map');

module.exports = {
    index,
    show
};

async function show(req, res) {
    res.render('agents/show', { title: 'Agents' });
}

async function index(req, res) {
    const agents = await Agent.find({});
    const map = await Map.findById(req.params.id);
    res.render('agents/index', { title: 'Agents', map, agents });
}