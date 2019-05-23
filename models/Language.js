const { language } = require('./config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const languageSchema = new Schema(language);

console.log(languageSchema.paths.icon.validators[0])
console.log('test >> ?? ', !!languageSchema.paths.icon.validators[0].validator(''))
console.log('test >> ', languageSchema.paths.show)

module.exports = mongoose.model('language', languageSchema);
