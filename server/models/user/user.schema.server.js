var mongoose = require("mongoose");
var CourseSchema = require("../course/course.schema.server");

var UserSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  firstName: String,
  lastName: String,
  email: String,
  type: {type: String, enum: ['STUDENT', 'PROFESSOR', 'ADMIN']},
  courses: [CourseSchema],
  dateCreated: {type: Date, default: Date.now},
  facebook: {
    id:    String,
    token: String
  }
}, {collection:'user'});

module.exports = UserSchema;
