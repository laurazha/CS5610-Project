var mongoose = require('mongoose');
var CourseSchema = require('./course.schema.server');
var Course = mongoose.model('Course', CourseSchema);
var UserModel = require("../user/user.model.server");

Course.createCourseForUser = createCourseForUser;
Course.findAllCoursesForUser = findAllCoursesForUser;
Course.findCourseById = findCourseById;
Course.findCourseByName = findCourseByName;
Course.updateCourse = updateCourse;
Course.deleteCourse = deleteCourse;

module.exports = Course;

function createCourseForUser(userId, course) {
  course._user = userId;
  return Course.create(course)
    .then(function(responseCourse){
      UserModel.findUserById(userId)
        .then(function(user){
        user.courses.push(responseCourse);
        return user.save();
      });
      return responseCourse;
    });
}

function findAllCoursesForUser(userId) {
  return Course.find({ _user: userId });
}

function findCourseById(courseId) {
  return Course.findById(courseId);
}


function findCourseByName(courseName) {
  return Course.find({name: courseName});
}

function updateCourse(courseId, course) {
  return Course.findByIdAndUpdate(courseId, course);
}

function deleteCourse(courseId) {
  return Course.findByIdAndRemove(courseId);
}
