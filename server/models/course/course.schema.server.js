var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
  name: String,
  description: String,
  title: String,
  rating: String,
  // widgets: [{
  //  type: mongoose.Schema.Type.ObjectId,
  //  ref: 'Widget'
  // }],
  dateCreated: {
    type: Date,
    default: Date.now
  }
}, {collection: 'course'});

module.exports = CourseSchema;
