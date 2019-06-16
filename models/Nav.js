const { navigation } = require('./config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NavSchema = new Schema(navigation);

module.exports = mongoose.model('nav', NavSchema);
