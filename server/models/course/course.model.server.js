var mongoose = require('mongoose');
var CourseSchema = require('./course.schema.server');
var CourseModel = mongoose.model('CourseModel', CourseSchema);
var UserModel = require("../user/user.model.server");

CourseModel.createCourseForUser = createCourseForUser;
CourseModel.findAllCoursesForUser = findAllCoursesForUser;
CourseModel.findCourseById = findCourseById;
CourseModel.findCourseByName = findCourseByName;
CourseModel.updateCourse = updateCourse;
CourseModel.deleteCourse = deleteCourse;
CourseModel.addCourseForStudent = addCourseForStudent;
CourseModel.topCourses = topCourses;
CourseModel.findCoursesByUser = findCoursesByUser;


module.exports = CourseModel;

function createCourseForUser(userId, course) {
  course._user = userId;
  return CourseModel.create(course)
    .then(function(responseCourse){
      UserModel.findUserById(userId)
        .then(function(user){
        user.courses.push(responseCourse);
        return user.save();
      });
      return responseCourse;
    });
}

function addCourseForStudent(userId, courseId) {
  return CourseModel.findCourseById(courseId)
    .then(function(responseCourse){
      UserModel.findUserById(userId)
        .then(function(user){
          user.courses.push(responseCourse);
          return user.save();
      });
      return responseCourse;
    });
}

function findAllCoursesForUser() {
  return CourseModel.find();
}


function findCourseById(courseId) {
  return CourseModel.findById(courseId);
}


function findCourseByName(courseName) {
  return CourseModel.findOne({name: courseName});
}

function updateCourse(courseId, course) {
  return CourseModel.findByIdAndUpdate(courseId, course);
}

function deleteCourse(courseId) {
  return CourseModel.findByIdAndRemove(courseId);
}

function topCourses() {
  return CourseModel.find({})
    .sort({rating: -1}).exec();
}

function findCoursesByUser(userId) {
  return CourseModel.find({_user: userId});
}
