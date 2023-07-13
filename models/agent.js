const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abilitySchema = new Schema({
    name: String,
    icon: String,
});

const agentSchema = new Schema({
    name: String,
    icon: String,
    abilities: [abilitySchema]
});


module.exports = mongoose.model('Agent', agentSchema);
