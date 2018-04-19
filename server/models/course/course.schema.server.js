var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'
  },
  name: String,
  description: String,
  title: String,
  rating: Number,
  sumRating: Number,
  numRating: Number,
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
