var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/cs5610project');
module.exports = db;
