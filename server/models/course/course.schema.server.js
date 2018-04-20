var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
  name: String,
  description: String,
  title: String,
  rating: Number,
  sumRating: Number,
  numRating: Number,
  widgets: [WidgetSchema],
  dateCreated: {
    type: Date,
    default: Date.now
  }
}, {collection: 'course'});

module.exports = CourseSchema;
