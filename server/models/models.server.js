var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/cs5610project');
// var db = mongoose.connect('mongodb://laurazha_cs5610project:cs5610@ds251889.mlab.com:51889/heroku_2j2bj958');

module.exports = db;
