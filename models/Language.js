const { language } = require('./config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const languageSchema = new Schema(language);

module.exports = mongoose.model('language', languageSchema);
