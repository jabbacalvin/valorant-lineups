const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abilitySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  icon: {
    type: String,
  },
});

const agentSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  icon: {
    type: String,
  },
  abilities: [abilitySchema],
});


module.exports = mongoose.model('Agent', agentSchema);
